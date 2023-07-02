# cloudflared-freebsd
### FreeBSD builds of the Cloudflare Tunnel client (cloudflared)
These binaries are built from the official `cloudflared` GitHub repository and hosted at [cloudflared.bowring.uk](https://cloudflared.bowring.uk)

### Rationale
Cloudflare provide official builds for macOS, Windows, and various flavours of Linux over at [github.com/cloudflare/cloudflared](https://github.com/cloudflare/cloudflared) but there are no builds for FreeBSD as of yet :(

Most people can probably manage by installing the native `cloudflared` FreeBSD port or package, but for systems that can't use `pkg` (such as TrueNAS) the compiled binaries are provided here.

## Auto-updates
Updating can be scripted by getting the hash of the latest version from [cloudflared.bowring.uk/binaries/cloudflared-freebsd-latest.sha1](https://cloudflared.bowring.uk/binaries/cloudflared-freebsd-latest.sha1) and comparing this to the currently running version. The latest (compressed) executable can then be obtained from [cloudflared.bowring.uk/binaries/cloudflared-freebsd-latest.7z](https://cloudflared.bowring.uk/binaries/cloudflared-freebsd-latest.7z) which will redirect to the latest built release.

The `update-cloudflared.sh` script automates this checking/updating/unzipping process and will also restart `cloudflared` once updated.
