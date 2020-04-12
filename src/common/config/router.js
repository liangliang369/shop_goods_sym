// import Layout from '@/views/layout/index'
// 路由定义规则： 
/*
  路由定义规则：
    1： 组件文件命名暂时允许小写
    2： 只在路由文件中配置component就可以，不用多余配置path，以及name,
    3:  path/name值也可以自定义配置
**/ 
const routes = [
  {
    // path: '/',
    // name: 'layout',
    component: 'layout/index',
    children:[
      {
        // path:'/dashboard',
        // name:'dashboard',
        component: 'dashboard/index'
      },
      {
        component: 'shop/goods/list'
      }
    ]
  },
  {
    // path: '/login',
    // name: 'login',
    component: 'login/index'
  },
  {
    path:'*',
    redirect:'/dashboard'
  }
]
// 自动生成component
let getrouters = ()=>{
  createFun(routes);
  return routes
}
function createFun(arr) {
  for (let i = 0; i < arr.length; i++) {
    if(!arr[i].component) return;
    let val = getVal(arr[i].component);
    arr[i].name =  arr[i].name || val.replace(/\//g,'_');
    arr[i].path =  arr[i].path || `/${val}`;
    let componentFun = import(`@/views/${arr[i].component}`) 
    arr[i].component = ()=> componentFun;
    if(arr[i].children && arr[i].children.length>0) {
      createFun(arr[i].children)
    }
  }
}
// 自动过滤index结尾
function getVal(str) {
  let index = str.lastIndexOf('/');
  let val = str.substring(index+1,str.length);
  // 判断是不是index结尾
  if(val === 'index') {
    return str.substring(index,-1) 
  }else {
    return str;
  }
}
export default getrouters();