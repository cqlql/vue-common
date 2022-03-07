import type { Router } from 'vue-router'

// import { Toast } from 'vant'

export function setupRouterGuard(router: Router) {
  // createPageLoadingGuard(router)
  createScrollGuard(router)

  createPermissionGuard(router)
}

// Routing switch back to the top
function createScrollGuard(router: Router) {
  const body = document.getElementById('app')

  router.afterEach(async () => {
    // scroll top
    body?.scrollTo(0, 0)
    return true
  })
}
async function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    next()
  })
}
// export function createPageLoadingGuard(router: Router) {
//   let timeId: number
//   router.beforeEach(async (to) => {
//     if (to.meta.loaded) {
//       return true
//     }

//     timeId = (setTimeout as Window['setTimeout'])(() => {
//       Toast.loading({
//         // message: '加载中...',
//         forbidClick: true,
//         duration: 0,
//       })
//     }, 200)

//     return true
//   })

//   router.afterEach(async () => {
//     clearTimeout(timeId)
//     Toast.clear()
//     return true
//   })
// }
