

import {Command} from 'commander'

// 创建命令对象
const program = new Command()

// 注册命令、参数、回调
program
    .command('create')
    .description('创建一个type-challenges题目')
    .option('-t --type <type>', '创建题目名称')
    .action((cmd) => {
      console.log(cmd);
    })

// 执行命令行参数解析
program.parse()