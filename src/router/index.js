import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

// const Parent = {
//   data () {
//     return {
//       transitionName: 'slide-left'
//     }
//   },
//   beforeRouteUpdate (to, from, next) {
//     const toDepth = to.path.split('/').length
//     const fromDepth = from.path.split('/').length
//     this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
//     next()
//   },
//   template: `
//     <div class="parent">
//       <h2>Parent</h2>
//       <transition :name="transitionName">
//         <router-view class="child-view"></router-view>
//       </transition>
//     </div>
//   `
// }

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      name: 'Home',
      component: Home
      // children: [
      //   {
      //     path: 'about',
      //     name: 'About',
      //     component: About
      //   },
      //   {
      //     path: 'contact',
      //     name: 'Contact',
      //     component: Contact
      //   }
      // ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
