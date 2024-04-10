const commander = require('commander')

const program = new commander.Command()

program
  .command('tea')
  .action(() => {
    console.log('tea is ready....')
  })

  program.parse()