[![Minimal node version](https://img.shields.io/static/v1?label=node&message=%3E=14.16&logo=node.js&color)](https://nodejs.org/about/releases/)
[![Minimal npm version](https://img.shields.io/static/v1?label=npm&message=%3E=6.14.12&logo=npm&color)](https://github.com/npm/cli/releases)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/stephen-shopopop/broz/graphs/commit-activity)
[![Linux](https://svgshare.com/i/Zhy.svg)](https://svgshare.com/i/Zhy.svg)
[![macOS](https://svgshare.com/i/ZjP.svg)](https://svgshare.com/i/ZjP.svg)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)
[![Linters](https://github.com/stephen-shopopop/broz/actions/workflows/lint.yml/badge.svg)](https://github.com/stephen-shopopop/broz/actions/workflows/lint.yml)
[![Changelog](https://github.com/stephen-shopopop/broz/actions/workflows/release.yml/badge.svg)](https://github.com/stephen-shopopop/broz/actions/workflows/release.yml)

# BROZ

a simple, frameless browser for screenshots

It uses Cocoa/WebKit on macOS, gtk-webkit2 on Linux.

Inspire by [antfu broz](https://github.com/antfu/broz)

## Usage

### Install

Add .npmrc file in your env $HOME

> @stephen-shopopop:registry=https://npm.pkg.github.com

```
npx @stephen-shopopop/broz --url https://antfu.me

OR 

npm install -g  @stephen-shopopop/broz 
// launch
broz --url https://antfu.me
```

```
broz [options]

  --dir string
        path to serve (default ".")
  --url string
        instead of serving files, load this url
  --title string
        title of the webview window (default "broz")
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

