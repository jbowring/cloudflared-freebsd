# cloudflared-freebsd
### FreeBSD builds of the Cloudflare Tunnel client (cloudflared)
These binaries are built from the FreeBSD ports collection and hosted at [cloudflared.bowring.uk](https://cloudflared.bowring.uk)

### Rationale
Cloudflare provide official builds for macOS, Windows, and various flavours of Linux over at [github.com/cloudflare/cloudflared](https://github.com/cloudflare/cloudflared) but there are no builds for FreeBSD as of yet :(

Most people can probably manage by installing the native `cloudflared` FreeBSD port or package, but for systems that can't use `pkg` (such as TrueNAS) the compiled binaries are provided here. Auto-updating can be scripted by getting the latest binary from [cloudflared.bowring.uk/binaries/cloudflared-freebsd-latest](https://cloudflared.bowring.uk/binaries/cloudflared-freebsd-latest) which will serve a 302 redirect to the latest built release.
