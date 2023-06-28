#!/bin/bash

set -e -o pipefail

BUILD_DIR=temp
OUTPUT_DIR=src/binaries
RELEASE_INFO_PATH='release-info.json'

response=$(curl --fail-with-body --silent --show-error -L \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  'https://api.github.com/repos/cloudflare/cloudflared/releases/latest') || (echo "$response" >&2; return 1)
latest_version=$(<<<"$response" jq -r '.name')
echo "Latest version is $latest_version"

if [[ $(jq "has(\"$latest_version\")" "$RELEASE_INFO_PATH") == 'true' ]]
then
  echo "Release already in repo"
  echo "Quitting..."
  exit
fi

tag_name=$(<<<"$response" jq -r '.tag_name')
if [ -d "$BUILD_DIR" ]
then
  rm -rf "$BUILD_DIR"
fi

git clone --branch "$tag_name" https://github.com/cloudflare/cloudflared.git "$BUILD_DIR"

# Avoid depending on C code since we don't need it.
export CGO_ENABLED=0
export TARGET_OS=freebsd
export TARGET_ARCH=amd64

make -C "$BUILD_DIR" cloudflared

executable_name="cloudflared-$TARGET_OS-$latest_version"
mv "${BUILD_DIR}/cloudflared" "${BUILD_DIR}/$executable_name"

archive_path="${OUTPUT_DIR}/$executable_name"
7z a -mx=9 "$archive_path.7z" "${BUILD_DIR}/$executable_name"

rm -rf "$BUILD_DIR"

build_date=$(date -uIseconds)
release_date=$(<<<"$response" jq -r '.created_at')

release_info=$(cat "$RELEASE_INFO_PATH")
jq --arg version "$latest_version" \
    --arg build_date "$build_date" \
    --arg release_date "$release_date" \
    --arg archive_path "$archive_path" \
    '.[$version] = {
        "buildDate": $build_date,
        "platform": "FreeBSD",
        "releaseDate": $release_date,
        "binaryPath": $archive_path
    }' <<<"$release_info" >"$RELEASE_INFO_PATH"

git config user.name github-actions
git config user.email github-actions@github.com
git add .
git status
git commit -m "Add version $latest_version"
git push
