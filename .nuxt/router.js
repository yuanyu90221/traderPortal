import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _8cce3578 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _7df3db68 = () => import('../pages/daily/report.vue' /* webpackChunkName: "pages/daily/report" */).then(m => m.default || m)
const _d75f2c58 = () => import('../pages/admin/validate.vue' /* webpackChunkName: "pages/admin/validate" */).then(m => m.default || m)
const _7124abfc = () => import('../pages/daily/transactionFee.vue' /* webpackChunkName: "pages/daily/transactionFee" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _8cce3578,
			name: "index"
		},
		{
			path: "/daily/report",
			component: _7df3db68,
			name: "daily-report"
		},
		{
			path: "/admin/validate",
			component: _d75f2c58,
			name: "admin-validate"
		},
		{
			path: "/daily/transactionFee",
			component: _7124abfc,
			name: "daily-transactionFee"
		}
    ],
    fallback: false
  })
}
