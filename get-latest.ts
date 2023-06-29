import { execSync } from 'child_process'
import fs from 'fs'
import { tmpdir } from 'os'
import path from 'path'

function exec(command: string, options?: any) {
    console.log(`> ${command}`)
    return execSync(command, { stdio: 'inherit', shell: true, ...options })
}

async function main() {
    // create a branch with current date, fetch framer package from npm and merge all of it's files into the current files
    const date = new Date()
    // const branchName = `framer-${date.getFullYear()}-${
    //     date.getMonth() + 1
    // }-${date.getDate()}`
    exec(`git checkout main`)
    // try {
    //     exec(`git checkout -b ${branchName}`)
    // } catch (e) {
    //     console.log('branch already exists')
    //     exec(`git checkout ${branchName}`)
    // }

    const tempDir = '/tmp/framer'

    const output = process.cwd()
    fs.mkdirSync(tempDir, { recursive: true })
    exec(`npm init -y`, { stdio: 'inherit', cwd: tempDir })
    exec(`npm i framer@latest`, { stdio: 'inherit', cwd: tempDir })
    exec(`cp -r node_modules/framer/* ${output}/`, {
        stdio: 'inherit',
        cwd: tempDir,
    })
    // exec(`git add .`, )
    // exec(`git commit -m "chore: update framer"`)
    // exec(`git checkout main`)
    // exec(`git merge ${branchName}`, {
    //     stdio: 'inherit',
    //     cwd: tempDir,
    // })
}

main()
