//加载模板文件
import index from '../route/index/index'
import school from '../route/school/school-info'
//路由规则设置
export default [
    {
        path: '/',
        component: index
    },
    {
        path: '/school/:uid',
        component: school
    }
]
