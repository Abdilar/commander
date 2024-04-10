const commander = require('commander')
const path = require('path')
const fs = require('fs')

const program = new commander.Command()

program
  .command('tea')
  .action(() => {
    console.log('tea is ready....')
  })


  program
    .command('create <fileName> [destination]')
    .description('create a new file with the specified file extension')
    .action((fileName, destination = '.') => {
      const dir = path.join(__dirname, destination, fileName)
      fs.writeFileSync(dir, '')
    })

  program.parse()