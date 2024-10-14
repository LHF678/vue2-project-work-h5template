module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
      parser: "babel-eslint"
    },
    rules: {
      "prettier/prettier": [ 
      "error",
        {
          singleQuote: true, // 使用单引号（默认false）
          bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
          jsxBracketSameLine: true, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
          htmlWhitespaceSensitivity: "ignore",
          trailingComma: "all", // 多行使用拖尾逗号（默认none）
          // 箭头函数参数括号 默认avoid 可选 avoid| always
          // avoid 能省略括号的时候就省略 例如x => x
          // always 总是有括号
          arrowParens: "avoid",
          endOfLine: "auto"
        }
      ],
      // 0 代表关闭  1 代表警告  2 代表开启
      "no-console": 0, // 禁用 console
      "no-debugger": 1, // 禁用 debugger
      "no-dupe-args": 2, // 函数参数不能重复
      "default-case": 2, // 禁止正则表达式字面量中出现多个空格
      "no-constant-condition": 0, //禁止在条件中使用常量表达式 if(true) if(1)
      "no-else-return": 2, // 如果if语句里面有return,后面不能跟else语句
      "no-empty": 2, // 块语句中的内容不能为空
      "no-eq-null": 1, // 禁止对null使用==或!=运算符
      "no-extra-bind": 2, // 禁止不必要的函数绑定
      "no-extra-boolean-cast": 2, // 禁止不必要的bool转换
      "no-extra-parens": 2, // 禁止非必要的括号
      "no-extra-semi": 2, // 禁止多余的冒号
      "no-floating-decimal": 2, // 禁止省略浮点数中的0 .5 3.
      "no-func-assign": 2, // 禁止重复的函数声明
      "no-implicit-coercion": 2, // 禁止隐式转换
      "no-invalid-this": 2, // 禁止无效的this，只能用在构造器，类，对象字面量
      "no-irregular-whitespace": 2, // 不能有不规则的空格
      "no-lone-blocks": 2, // 禁止不必要的嵌套块
      "no-mixed-spaces-and-tabs": [2, false],
      "no-multi-spaces": 2, // 不能用多余的空格
      "no-multi-str": 2, // 字符串不能用\换行
      "no-new-func": 1, // 禁止使用new Function
      "no-new-object": 1, // 禁止使用new Object()
      "no-new-require": 1, // 禁止使用new require
      "no-new-wrappers": 1, // 禁止使用new创建包装实例，new String new Boolean new Number
      "no-obj-calls": 0, // 不能调用内置的全局对象，比如Math() JSON()
      "no-redeclare": 2, // 禁止重复声明变量
      "no-self-compare": 2, // 不能比较自身
      "no-shadow": 2, // 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
      "no-shadow-restricted-names": 2, //严格模式中规定的限制标识符不能作为声明时的变量名使用
      "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
      "no-sparse-arrays": 2, //禁止稀疏数组， [1,,2]
      "no-trailing-spaces": 1, //一行结束后面不要有空格
      "no-throw-literal": 1, //禁止抛出字面量错误 throw "error";
      "no-unneeded-ternary": 1, //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
      "no-unreachable": 2, //不能有无法执行的代码
      "no-unused-expressions": 2, //禁止无用的表达式
      "no-unused-vars": [2, {vars: 'all', args: 'after-used'}], //不能有声明后未被使用的变量或参数
      "no-use-before-define": 2, //未定义前不能使用
      "no-useless-call": 2, //禁止不必要的call和apply
      "eqeqeq": 2,// 必须使用全等
      /**
       * es6相关
       */
      "no-class-assign": 2, // 不允许修改类声明的变量
      "no-var": 2, // 要求使用 let 或 const 而不是 var
      "no-const-assign": 2, // 不允许改变用const声明的变量
      "prefer-destructuring": [2, { // 优先使用数组和对象解构
        "array": false,
        "object": true
      }],
      "no-new-symbol": 0, // 禁止 Symbol 操作符和 new 一起使用lines-between
      "no-useless-computed-key": 2, // 禁止在对象中使用不必要的计算属性
      "no-useless-constructor": 2, // 禁用不必要的构造函数
      "no-useless-rename": 2, // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
      "object-shorthand": 2, // 要求对象字面量简写语法
      "prefer-arrow-callback": 2, // 要求使用箭头函数作为回调
      "no-dupe-class-members": 2, // 不允许类成员中有重复的名称
      "no-duplicate-imports": 2, // 禁止重复导入
      "prefer-rest-params": 2, // 使用剩余参数代替 arguments
      "prefer-spread": 2, // 建议使用扩展运算符而非.apply()
      "require-yield": 2, // 禁用函数内没有yield的 generator 函数
      "rest-spread-spacing": 2, // 强制剩余和扩展运算符及其表达式之间有空格
      "prefer-template": 2, // 建议使用模板而非字符串连接
    }
  };
  