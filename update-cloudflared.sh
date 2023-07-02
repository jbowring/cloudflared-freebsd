#!/bin/bash

set -e -o pipefail

if [ -z "$1" ] || [ "$1" == '-h' ] || [ "$1" == '--help' ]
then
  echo "Usage: update-cloudflared.sh <cloudflared executable location> [<cloudflared pidfile>]"
  exit 0
fi

ROOT_URL='https://cloudflared.bowring.uk/binaries/cloudflared-freebsd-latest'
TEMP_BINARY="/tmp/cloudflared"
TEMP_ARCHIVE="${TEMP_BINARY}.7z"

response=$(curl --silent --show-error --fail-with-body -L "${ROOT_URL}.sha1") || (echo "$response" >&2; exit 1)

hash=$(shasum -a 1 "$1" | awk '{ printf $1 }')

test "$hash" == "$response" && exit 0

curl --silent --show-error --fail-with-body -o "$TEMP_ARCHIVE" -L "${ROOT_URL}.7z" || (cat "$TEMP_ARCHIVE" >&2; exit 1)

7z e -so -y "$TEMP_ARCHIVE" > "$TEMP_BINARY"
mv -f "$TEMP_BINARY" "$1"
chmod +x "$1"
test -f "$2" && (kill "$(<"$2")" || echo "Failed to kill old instance")
echo "cloudflared upgraded to $("$1" -v)"
