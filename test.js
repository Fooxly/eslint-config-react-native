const eslint = require('eslint')
const baseConfig = require('.')

const engine = new eslint.CLIEngine({ baseConfig, parser: 'babel-eslint', ignore: false })
const report = engine.executeOnFiles('test/fail')

const EXPECTED_ERROR = 2
const EXPECTED_WARN = 2

if (report.errorCount !== EXPECTED_ERROR || report.warningCount !== EXPECTED_WARN) {
  console.error('\x1b[31mError: \x1b[37mError/Warning count mismatch')
  console.error(`Expected: ${EXPECTED_ERROR} error(s) & ${EXPECTED_WARN} warning(s)`)
  console.error(`Recieved: ${report.errorCount} error(s) & ${report.warningCount} warning(s)`)
  console.error(engine.getFormatter()(report.results))
  return process.exit(1)
}

console.log('Success!')
process.exit(0)
