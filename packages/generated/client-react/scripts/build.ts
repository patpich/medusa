import execa from "execa"
import os from "os"
import fs from "fs/promises"
import path from "path"

const basePath = path.resolve(__dirname, `../`)

async function run() {
  const tmpDirPath = await getTmpDirectory()
  for (const apiType of ["admin", "store"]) {
    await generateOASSources(tmpDirPath, apiType)
    const oasFilePath = path.resolve(tmpDirPath, `${apiType}.oas.json`)
    const outDirPath = path.resolve(basePath, "src/lib/", apiType)
    const prefixHooks = apiType === "admin" ? "Admin" : ""
    await generateClientHooks(
      oasFilePath,
      outDirPath,
      apiType,
      prefixHooks,
      true
    )
  }
}

const generateOASSources = async (outDir: string, apiType: string) => {
  const params = ["oas", `--out-dir=${outDir}`, `--type=${apiType}`]
  const { all: logs } = await execa("medusa-oas", params, {
    cwd: basePath,
    all: true,
  })
  console.log(logs)
}

const generateClientHooks = async (
  srcFile: string,
  outDir: string,
  apiType: string,
  prefixHooks: string,
  clean = false
) => {
  const params = [
    "client",
    `--src-file=${srcFile}`,
    `--out-dir=${outDir}`,
    `--type=${apiType}`,
    `--prefix-hooks=${prefixHooks}`,
    "--component=hooks",
    "--types-package=@medusajs/client-types",
    "--client-package=@medusajs/client-js",
  ]
  if (clean) {
    params.push("--clean")
  }

  const { all: logs } = await execa("medusa-oas", params, {
    cwd: basePath,
    all: true,
  })
  console.log(logs)
}

const getTmpDirectory = async () => {
  /**
   * RUNNER_TEMP: GitHub action, the path to a temporary directory on the runner.
   */
  const tmpDir = process.env["RUNNER_TEMP"] ?? os.tmpdir()
  return await fs.mkdtemp(tmpDir)
}

void (async () => {
  await run()
})()
