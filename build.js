fs = require('fs')
shell = require("shelljs");

let releases = Object.values(JSON.parse(fs.readFileSync('release-info.json', {encoding: "utf8"})))

let latestRelease = releases.sort((a, b) => new Date(b.releaseDate).valueOf() - new Date(a.releaseDate).valueOf())[0];

fs.writeFileSync('src/_redirects', "/binaries/cloudflared-freebsd-latest /" + latestRelease.binaryPath + " 302")

shell.exec("npm run ng build")
