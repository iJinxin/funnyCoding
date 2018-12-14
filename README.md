## 运行
```
npm install
npm run dev
```
## 项目结构
```
/build          // webpack配置
/config         // webpack配置
/src
  /api          // api请求
  /assets       // 放置图片，css，icon等资源文件
  /components   // 组件
  /router       // 路由
  /service      // 业务逻辑处理
  /store        // vuex管理数据状态
  /utils        // 工具，服务
  /views        // 容器组件，和router中导入的组件对应
  App.vue       // 根组件
  main.js       // 入口文件
/static         // 静态资源
```
## 说明
推荐使用 <code>yarn</code> , 推荐使用 <code>css-module</code>

使用flex布局时，使用className即可，兼容性代码在 <code>compatibility.scss</code> 中

vue组件只关注于视图层，繁重的业务代码移植于service中

本地开发时，若要修改api地址，修改 ```src/api/http.js``` 中的 ```DEV_HOST``` 即可

## 核心库
- [ElementUI](http://element-cn.eleme.io/#/zh-CN)
- [Vue Router](https://router.vuejs.org/zh/)
- [Vuex](https://vuex.vuejs.org/zh/guide/)
- [axios](https://www.kancloud.cn/yunye/axios/234845)
