import { spawn } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

spawn(
  'npx prettier -w . --plugin',
  [path.resolve(__dirname, 'plugin.js'), '.'],
  {
    shell: true,
    stdio: 'inherit'
  }
)
