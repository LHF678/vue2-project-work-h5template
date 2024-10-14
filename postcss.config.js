module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 动态 rem 计算是 / 10 所以如果以 750 为基准宽度，那 rootValue 就应该是 75
      propList: ['*'], //属性的选择器，*表示通用
      selectorBlackList: [], // 忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
    },
  },
};
