export default [
    {
      path: '/',
      name: 'LayOut',
      component: () => import( '../views/LayOut.vue'),
      //重定向
      redirect:"/index",
      children:[
        {
          path:"/index",
          name:"index",
          component:()=>import("../views/index/HomeIndex")
        },
        {
          path: "/Staff/list",
          name: "StaffList",
          meta: { bread: ["员工管理", "员工列表"], auth: ["admin", "administration"] },
          component: () => import("../views/Staff/StaffList"),
      },
      {
          path: "/AddressBook",
          name: "AddressBook",
          meta: { bread: ["通讯录"], auth: ["admin", "administration"] },
          component: () => import("../views/Staff/AddressBook"),
      },
      {
          path: "/Assets/in",
          name: "AssetsIn",
          meta: { bread: ["资产管理", "资产录入"], auth: ["admin", "administration"] },
          component: () => import("../views/Assets/AssetsIn"),
      },
      {
          path: "/Assets/list",
          name: "AssetsList",
          meta: { bread: ["资产管理", "资产列表"], auth: ["admin", "administration"], keepAlive: true },
          component: () => import("../views/Assets/AssetsList"),
      },
      {
          path: "/Assets/list/detail",
          name: "AssetsListDetail",
          meta: { bread: ["资产管理", "资产列表", "资产详情"], auth: ["admin", "administration"] },
          component: () => import("../views/Assets/AssetsDetail"),
      },
      {
          path: "/performance/performanceList",
          name: "performanceList",
          meta: { bread: ["绩效管理"], auth: ["admin", "administration"] },
          component: () => import("../views/performance/performanceList"),
      },
      {
          path: "/performance/performanceList/performanceDetail",
          name: "performanceDetail",
          meta: { bread: ["绩效管理", "个人季度绩效"], auth: ["admin", "administration"] },
          component: () => import("../views/performance/performanceDetail"),
      },
      {
          path: "/IT/data",
          name: "ITListIn",
          meta: { bread: ["IT管理", "IT数据"], auth: ["admin", "administration"] },
          component: () => import("../views/IT/ITData")
      },
      {
          path: "/set/user",
          name: "UserList",
          meta: { bread: ["设置中心", "账户管理"], auth: ["admin", "administration"] },
          component: () => import("../views/UserRole/UserList")
      },
      {
          path: "/set/role",
          name: "RoleList",
          meta: { bread: ["设置中心", "角色管理"], auth: ["admin", "administration"] },
          component: () => import("../views/UserRole/RoleList")
      },
        {
          path: "/reminder",
          name: "ReminderList",
          meta: { bread: ["个人提醒"] },
          component: () => import("../views/Reminder/ReminderList")
      },
      {
        path: "/midjourney",
        name: "Midjourney",
        meta: { bread: ["AI"] },
        component: () => import("../views/AiMidjourney/AiMidjourney")
    },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( '../views/LoginPage.vue')
    },   
    {
      path: "*",
      name: "NotFound",
      component: () => import('@/views/NotFound')
  }
  ]