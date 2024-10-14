# mobile-develop-template
### 安装依赖
```
$ npm i
```

### 启动开发环境
```
$ npm start
```
### 构建
```
// 打包生产环境
$ npm run build:pro

// 打包预生产环境
$ npm run build:pre

// 打包测试环境
$ npm run build:test
```

### 技术栈
[vue2.x](https://cn.vuejs.org/) <br>
[vue-cli](https://cli.vuejs.org/zh/) <br>
[axios](http://www.axios-js.com/zh-cn/docs/) <br>
[vant](https://vant-contrib.gitee.io/vant/#/zh-CN/advanced-usage)<br>
[less](https://less.bootcss.com/)

### 主题定制
```src > less > vars.less``` <br>
[vantui 组件的颜色变量参考](https://github.com/youzan/vant/blob/dev/src/style/var.less)

#### 注：
> vant 使用了按需加载机制，src > plugin 找到对应位置引入

> 模板中配置了 postcss-pxtorem 自动把 px 转化为 rem <br>
配置文件 ```postcss.config.js``` <br>
rem 动态计算 ```src > utils > rem.ts```
目前 postcss-pxtorem 的配置是以 750 二倍图最为基准宽度，所以如果设计稿是二倍图可直接使用设计稿中元素尺寸


> 项目使用 ```commitlint``` 提交规范校验；具体规则参考 ```commitlint.config.js```
