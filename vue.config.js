
const argv = require('yargs').argv

let config = {}
if (argv.project) {
  config = require('./projects/' + argv.project + '/vue.config.js')
} else {
  config = require('./vue.config.main.js')
}

module.exports = config
