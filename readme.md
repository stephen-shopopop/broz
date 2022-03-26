# WEBVIEW GOLANG


It uses Cocoa/WebKit on macOS, gtk-webkit2 on Linux and Edge on Windows 10.
## Usage

### Install

Add .npmrc file in your env

> @stephen-shopopop:registry=https://npm.pkg.github.com

```
npx @stephen-shopopop/broz
```

```
broz [options]

  --dir string
        path to serve (default ".")
  --url string
        instead of serving files, load this url
  --title string
        title of the webview window (default "webview")
  --width int
        width of the webview window (default 800)
  --height int
        height of the webview window (default 600)
```

## Distributing webview apps

On Linux you get a standalone executable. It will depend on GTK3 and GtkWebkit2,
so if you distribute your app in DEB or RPM format include those dependencies.
An application icon can be specified by providing a .desktop file.

```linux
sudo apt-get install libwebkit2gtk-4.0-dev
```

## Contributing

1. npm run lint - eslint test config
2. npm run release - Release library && publish
## Package maintenance

A modern cli tool that keeps your deps fresh

```bash
npx taze
```

