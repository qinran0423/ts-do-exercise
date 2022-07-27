import * as inquirer from "inquirer"
import { ensureDirSync, writeFileSync } from "fs-extra"
import { lightBlue, lightGray, red } from "kolorist"
import { readdirSync } from "node:fs"
import { resolve } from "path"
import { Octokit } from "@octokit/core"
import { WriteFileOptions } from "fs"

const WRITE_FILE_OPTIONS: WriteFileOptions = { encoding: "utf-8" }

const octokit = new Octokit({
  auth: "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"
})

interface obj {
  name: string
}

export async function onCreate(args: obj = { name: "" }) {
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

  const dirs = await readdirSync("../type-challenges")
  // 先看看有没有重复创建的
  const hasCreate = dirs.findIndex((item) => {
    const names = item.split("-")
    return names[0] == name
  })

  if (hasCreate > -1) {
    const result = await inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: red(`×题目${name}已经被创建， 请重新输入`)
      }
    ])
    name = result.name
  }

  createDir(name)
}

async function createDir(name: string) {
  try {
    const res = await octokit.request(
      "GET /repos/{owner}/{repo}/contents/{path}",
      {
        owner: "type-challenges",
        repo: "type-challenges",
        path: `questions`
      }
    )
    if (res.data) {
      let filearr = res.data as any[]

      const isFindFileContent = filearr.find((item) => {
        const names = item.name.split("-")
        return names[0] === name
      })
      // 如果isFindFileContent,那就去创建文件夹 和内容
      if (isFindFileContent) {
        name = isFindFileContent.name
        const tmplDir = resolve("../type-challenges", name)
        ensureDirSync(tmplDir)

        createTmpl(tmplDir, name, "template")
        createTmpl(tmplDir, name, "test-cases")

        console.log(
          lightBlue(`
            ✔️ 题目${name}创建成功
          `)
        )
      } else {
        // 不存在则可能没找到  重新创建
        aFreshCreate(name)
      }
    }
  } catch (error) {
    aFreshCreate(name)
  }
}

async function createTmpl(tmplDir: string, name: string, file: string) {
  const res = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      headers: {
        accept: "application/vnd.github.raw"
      },
      owner: "type-challenges",
      repo: "type-challenges",
      path: `questions/${name}/${file}.ts`
    }
  )

  const tmplFilePath = resolve(tmplDir, `${file}.ts`)
  writeFileSync(tmplFilePath, res.data, WRITE_FILE_OPTIONS)
}

function aFreshCreate(name) {
  console.log(red(`题目${name}可能没有找到`))
  return onCreate()
}
