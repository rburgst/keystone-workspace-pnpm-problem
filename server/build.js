const scripts = require('@keystone-6/core/scripts/cli')
const { resolve } = require('path')

;(async () => {
  const dirName = resolve('.')
  await scripts.cli(dirName, ['build'])
  process.exit()
})()
