import * as inquirer from "inquirer"
import { resolve } from "path"
import { ensureDirSync, ensureFileSync } from "fs-extra"
import { lightBlue } from "kolorist"

export async function onCreate(args) {
  let { name } = args

  if (!name) {
    const result = await inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "(必填) 请输入题目名称"
      }
    ])
    name = result.name
  }

  createComponent(name)
}

function createComponent(name) {
  const tmplDir = resolve("../type-challenges", name)
  ensureDirSync(tmplDir)

  ensureFileSync(resolve(tmplDir, "template.ts"))
  ensureFileSync(resolve(tmplDir, "test-cases.ts"))

  console.log(
    lightBlue(`
      ✔️ 题目文件${name}目录创建成功,请添加题目内容
    `)
  )
}
