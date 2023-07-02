fs = require('fs')
shell = require("shelljs");
path = require('path');

const appRoot = JSON.parse(fs.readFileSync('angular.json', {encoding: "utf8"})).projects.cloudflared.architect.build.options.outputPath

shell.exec("npm run ng build")

let releases = Object.values(JSON.parse(fs.readFileSync('release-info.json', {encoding: "utf8"})))
let latestRelease = releases.sort((a, b) => new Date(b.releaseDate).valueOf() - new Date(a.releaseDate).valueOf())[0];

fs.writeFileSync(
    path.join(appRoot, '_redirects'),
    [
        "/binaries/cloudflared-freebsd-latest.7z /" + latestRelease.binary7zipPath + " 302",
        "/binaries/cloudflared-freebsd-latest.sha1 /" + latestRelease.binarySHA1Path + " 302",
    ].join('\n')
)
