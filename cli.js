#!/usr/bin/env node
const { execFileSync } = require('child_process')
const path = require('path')

let binaryPath
if (process.platform === 'darwin') {
  binaryPath = path.join(__dirname, 'bin', 'broz-darwin')
} else if (process.platform === 'linux') {
  binaryPath = path.join(__dirname, 'bin', 'broz-linux')
} else {
  throw new Error('Unsupported platform: ' + process.platform)
}

try {
  execFileSync(binaryPath, process.argv.slice(2), {
    cwd: process.cwd()
  })
} catch (err) {
  process.exitCode = 1
}
