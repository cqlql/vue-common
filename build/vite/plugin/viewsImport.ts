import fs from 'fs'
import path from 'path'
export default function viewsImport() {
  const virtualModuleId = 'virtual:views-import'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'views-import',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const viewsDir = path.join(process.cwd(), 'src/views')
        const dirList = fs.readdirSync(viewsDir)

        let resultString = ''
        dirList.forEach((dir) => {
          // let viewPath = path.join(viewsDir, dir, 'index.vue')
          resultString += `,${dir}:() => import('@/views/${dir}/index.vue')`
        })
        resultString = `{${resultString.substring(1)}}`
        return `export default ${resultString}`
      }
    },
  }
}
