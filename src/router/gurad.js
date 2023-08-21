import router from "./index"
import { getToken,removeToken } from "@/utils/auth"

import { get } from "@/utils/http"
//全局路由守卫（登录情况）
router.beforeEach(async (to, from, next) => {
    //获取Token，当前模拟有Token代表已登录
    const hasToken = getToken()
    //获取访问地址的权限要求
    const rolesRoute = to.meta.auth || [];
    if (hasToken) {
        try{
        //获取当前用户的角色
        const { role } = await get("/user/role")
        if (to.path == "/login") {
            next("/")
        } else {
            if (rolesRoute.length > 0 && !hasRoles(rolesRoute,role)) {
                //调用获取动态路由方法
                next("*")
            }
            else {
                next();
            }
        }
        }catch(error){
            if (error.response && error.response.status === 403) {
                // Token过期或无效
                removeToken() // 移除本地存储的token
                next("/login")
              } else {
                next(error)
              }
        }
    } else {
        if (to.path == "/login") {
            next()
        } else {
            next("/login")
        }
    }
})
// router.beforeEach(async (to, from, next) => {
//     const hasToken = getToken()
//     const rolesRoute = to.meta.auth || [];
  
//     if (hasToken) {
//       try {
//         const { role } = await get("/user/role")
  
//         if (to.path == "/login") {
//           next("/")
//         } else {
//           if (rolesRoute.length > 0 && !hasRoles(rolesRoute, role)) {
//             next("*")
//           } else {
//             next()
//           }
//         }
//       } catch (error) {
//         if (error.response && error.response.status === 401) {
//           // Token过期或无效
//           removeToken() // 移除本地存储的token
//           next("/login")
//         } else {
//           next(error)
//         }
//       }
//     } else {
//       if (to.path == "/login") {
//         next()
//       } else {
//         next("/login")
//       }
//     }
//   })
function hasRoles(rolesRoute,role){
    for (let i = 0; i < rolesRoute.length; i++) {
        if (rolesRoute[i] == role) {
            return true;
        }
    }
    return false;
}
