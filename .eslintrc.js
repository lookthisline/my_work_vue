/**
 * NOTE: <https://eslint.org/>
 * 0 = off, 1 = warn, 2 = error
 */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // "@vue/prettier",
    // "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? 1 : 0, // 不允许出现console语句
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0, // 不允许出现debugger语句
    'template-tag-spacing': [2, 'always'],
    "comma-dangle": [2, "never"], // 是否允许对象中出现结尾逗号
    "no-constant-condition": 2, // 条件语句的条件中不允许出现恒定不变的量
    // "no-control-regex": 2, // 正则表达式中不允许出现控制字符
    "no-control-regex": 0,
    "no-dupe-args": 2, // 函数定义的时候不允许出现重复的参数
    "no-duplicate-case": 2, // switch语句中不允许出现重复的case标签
    "no-empty": 2, // 不允许出现空的代码块
    "no-empty-character-class": 2, // 正则表达式中不允许出现空的字符组
    "no-ex-assign": 2, // 在try catch语句中不允许重新分配异常变量
    "no-extra-boolean-cast": 2, // 不允许出现不必要的布尔值转换
    "no-extra-semi": 2, // 不允许出现不必要的分号
    "no-func-assign": 2, // 不允许重新分配函数声明
    "no-inner-declarations": [2, "functions"], // 不允许在嵌套代码块里声明函数
    "no-invalid-regexp": 2, // 不允许在RegExp构造函数里出现无效的正则表达式
    "no-irregular-whitespace": 2, // 不允许出现不规则的空格
    "no-negated-in-lhs": 2, // 不允许在in表达式语句中对最左边的运算数使用取反操作
    "no-obj-calls": 2, // 不允许把全局对象属性当做函数来调用
    "no-regex-spaces": 2, // 正则表达式中不允许出现多个连续空格
    // "quote-props": 2, // 对象中的属性名是否需要用引号引起来
    "quote-props": 0, // 对象字面量中属性名加引号
    "no-sparse-arrays": 2, // 数组中不允许出现空位置
    "no-unreachable": 2, // 在return，throw，continue，break语句后不允许出现不可能到达的语句
    "use-isnan": 2, // 要求检查NaN的时候使用isNaN()
    "valid-jsdoc": [2, {
      "requireReturn": false,
      "requireParamDescription": false,
      "requireReturnDescription": true
    }], // 强制JSDoc注释
    // "valid-typeof": [2, {
    //   "requireStringLiterals": true
    // }], // 在使用typeof表达式比较的时候强制使用有效的字符串
    "valid-typeof": 2,
    "block-scoped-var": 2, // 将变量声明放在合适的代码块里
    "complexity": 0, // 限制条件语句的复杂度
    "consistent-return": 2, // 无论有没有返回值都强制要求return语句返回一个值
    // "curly": [2, "all"], // 强制使用花括号的风格
    "curly": [2, "multi-line"],
    "default-case": 0, // 在switch语句中需要有default语句
    "dot-notation": [2, {
      "allowKeywords": true, // true:使用保留字做属性名时，只能使用.方式取属性. false:使用保留字做属性名时, 只能使用[]方式取属性
      "allowPattern": "" // 当属性名匹配提供的正则表达式时，允许使用[]方式取值,否则只能用.号取值 e.g [2, {"allowPattern": "^[a-z]+(_[a-z]+)+$"}]
    }], // 获取对象属性的时候使用点号
    "dot-location": [2, "property"], // 强制使用.号取属性
    "eqeqeq": [2, "always", /* {"null": "ignore"} */ ], // 比较的时候使用严格等于
    "no-alert": 1, // 是否允许使用alert，confirm，prompt语句
    "guard-for-in": 0, // 监视for in循环，防止出现不可预料的情况
    "no-div-regex": 2, // 不能使用看起来像除法的正则表达式
    "no-else-return": 0, // 如果if语句有return，else里的return不用放在else里
    "no-labels": [2, {
      "allowLoop": false,
      "allowSwitch": false
    }], // 不允许标签语句
    "no-eq-null": 2, // 不允许对null用==或者!=
    "no-extra-bind": 2, // 不允许不必要的函数绑定
    "no-fallthrough": 2, // 不允许switch按顺序全部执行所有case
    "no-floating-decimal": 2, // 不允许浮点数缺失数字
    "no-iterator": 2, // 不允许使用__iterator__属性
    "no-lone-blocks": 2, // 不允许不必要的嵌套代码块
    "no-loop-func": 2, // 不允许在循环语句中进行函数声明
    "no-multi-str": 2, // 不允许用\来让字符串换行
    "no-global-assign": 2, // 不允许重新分配原生对象
    "no-new": 2, // 不允许new一个实例后不赋值或者不比较
    "no-new-func": 2, // 不允许使用new Function
    "no-new-wrappers": 2, // 不允许使用new String，Number和Boolean对象
    "no-octal": 2, // 不允许使用八进制字面值
    "no-octal-escape": 2, // 不允许使用八进制转义序列
    "no-param-reassign": 0, // 不允许重新分配函数参数
    "no-proto": 2, // 不允许使用__proto__属性
    "no-redeclare": 2, // 不允许变量重复声明
    "no-return-assign": 2, // 不允许在return语句中使用分配语句
    "no-script-url": 2, // 不允许使用javascript:void(0)
    "no-self-compare": 2, // 不允许自己和自己比较
    "no-sequences": 2, // 不允许使用逗号表达式
    "no-unused-expressions": 2, // 不允许无用的表达式
    "no-void": 2, // 不允许void操作符
    "no-warning-comments": [1, {
      "terms": ["todo", "fixme", "any other term"]
    }], // 不允许警告备注
    "no-with": 2, // 不允许使用with语句
    "radix": 1, // 使用parseInt时强制使用基数来指定是十进制还是其他进制
    "vars-on-top": 0, // var必须放在作用域顶部
    // "yoda": [2, "never", {
    //   "exceptRange": true
    // }], // 不允许在if条件中使用yoda条件
    "yoda": [2, "never"],
    "strict": [2, "function"], // 使用严格模式
    "no-catch-shadow": 2, // 不允许try catch语句接受的err变量与外部变量重名
    "no-delete-var": 2, // 不允许使用delete操作符
    "no-label-var": 2, // 不允许标签和变量同名
    "no-shadow": 2, // 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    "no-shadow-restricted-names": 2, // js关键字和保留字不能作为函数名或者变量名
    "no-undef": 2, // 不允许未声明的变量
    "no-undef-init": 2, // 不允许初始化变量时给变量赋值undefined
    "no-undefined": 2, // 不允许把undefined当做标识符使用
    "no-unused-vars": [2, {
      "vars": "all",
      "args": "after-used"
    }], // 不允许有声明后未使用的变量或者参数
    "no-use-before-define": [2, "nofunc"], // 不允许在未定义之前就使用变量
    // "indent": 2, // 强制一致的缩进风格
    "indent": [2, 2, {
      "SwitchCase": 1
    }],
    "brace-style": [2, "1tbs", {
      "allowSingleLine": true
    }], // 大括号风格
    // "camelcase": [2, {
    //   "properties": "never"
    // }], // 强制驼峰命名规则
    "camelcase": [0, {
      "properties": "always"
    }],
    "comma-style": [2, "last"], // 逗号风格
    "consistent-this": [0, "self"], // 当获取当前环境的this是用一样的风格
    "eol-last": 2, // 文件以换行符结束
    "func-names": 0, // 函数表达式必须有名字
    "func-style": 0, // 函数风格，规定只能使用函数声明或者函数表达式
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true
    }], // 对象字面量中冒号的前后空格
    "max-nested-callbacks": 0, // 回调嵌套深度
    "new-cap": [2, {
      "newIsCap": true,
      "capIsNew": false
    }], // 构造函数名字首字母要大写
    "new-parens": 2, // new时构造函数必须有小括号
    "newline-after-var": [0, 'always'], // 变量声明后是否必须空一行
    "no-array-constructor": 2, // 不允许使用数组构造器
    "no-inline-comments": 0, // 不允许行内注释
    "no-lonely-if": 0, // 不允许else语句内只有if语句
    "no-mixed-spaces-and-tabs": 2, // 不允许混用tab和空格
    "no-multiple-empty-lines": [2, {
      "max": 1
    }], // 空行最多不能超过两行
    "no-nested-ternary": 2, // 不允许使用嵌套的三目运算符
    "no-new-object": 2, // 禁止使用new Object()
    // "fun-call-spacing": [2, 'never'], // 函数调用时，函数名与()之间不能有空格
    "no-ternary": 0, // 不允许使用三目运算符
    "no-trailing-spaces": 2, // 行尾不允许有空格
    "no-underscore-dangle": 2, // 不允许标识符以下划线开头
    // "no-extra-parens": 0, // 不允许出现不必要的圆括号
    "no-extra-parens": [2, "functions"],
    // "one-var": 0, // 强制变量声明放在一起
    "one-var": [2, {
      "initialized": "never"
    }],
    "operator-assignment": 0, // 赋值运算符的风格
    "padded-blocks": [2, "never"], // 块内行首行尾是否空行
    "quotes": [2, "single", {
      "avoidEscape": true,
      "allowTemplateLiterals": true
    }], // 引号风格，字符串单双引号等
    "semi": [2, "always"], // 强制语句分号结尾
    "semi-spacing": [2, {
      "before": false,
      "after": true
    }], // 分后前后空格
    "sort-vars": 0, // 变量声明时排序
    "space-before-blocks": [2, "always"], // 块前的空格
    // "space-before-function-paren": [2, {
    //   "anonymous": "always",
    //   "named": "never"
    // }], // 函数定义时括号前的空格
    "space-before-function-paren": [2, "never"],
    // "space-infix-ops": [2, {
    //   "int32Hint": true
    // }], // 操作符周围的空格
    "space-infix-ops": 2,
    // "keyword-spacing": 2, // 关键字前后的空格
    "keyword-spacing": [2, {
      "before": true,
      "after": true
    }],
    "space-unary-ops": [2, {
      "words": true,
      "nonwords": false
    }], // 一元运算符前后不要加空格
    "wrap-regex": 2, // 正则表达式字面量用括号括起来
    "no-var": 1, // 使用let和const代替var
    // "generator-star-spacing": [2, "both"], // 生成器函数前后空格
    "generator-star-spacing": [2, {
      "before": true,
      "after": true
    }],
    "max-depth": 0, // 嵌套块深度
    "max-len": 0, // 一行最大长度，单位为字符
    "max-params": 0, // 函数最多能有多少个参数
    "max-statements": 0, // 函数内最多有几个声明
    "no-bitwise": 0, // 不允许使用位运算符
    "no-plusplus": 0, // 不允许使用++ --运算符
    // NOTE: 新添加的规则↓
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/singleline-html-element-content-newline": 0,
    "vue/multiline-html-element-content-newline": 0,
    "vue/name-property-casing": [2, "PascalCase"],
    "vue/no-v-html": 0,
    "accessor-pairs": 2,
    "arrow-spacing": [2, {
      "before": true,
      "after": true
    }],
    "block-spacing": [2, "always"],
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    "constructor-super": 2,
    "handle-callback-err": [1, "^(err|error)$"],
    "jsx-quotes": [2, "prefer-single"],
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-empty-pattern": 2,
    "no-native-reassign": 2,
    "no-new-require": 2,
    "no-new-symbol": 2,
    "no-path-concat": 2,
    // "no-return-assign": [2, "except-parens"],
    "no-self-assign": 2,
    "no-spaced-func": 2,
    "no-this-before-super": 2,
    "no-unexpected-multiline": 1, // 不允许混淆多行表达式
    "no-unmodified-loop-condition": 2,
    "no-unneeded-ternary": [2, {
      "defaultAssignment": false
    }],
    "no-unsafe-finally": 2,
    "no-useless-call": 2,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-useless-escape": 0,
    "no-whitespace-before-property": 2,
    "operator-linebreak": [2, "after", {
      "overrides": {
        "?": "before",
        ":": "before"
      }
    }],
    "space-in-parens": [2, "never"],
    "spaced-comment": [2, "always", {
      "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","]
    }],
    "template-curly-spacing": [2, "never"],
    // "yield-star-spacing": [2, "both"],
    "prefer-const": 2,
    "object-curly-spacing": [2, "always", {
      objectsInObjects: false
    }],
    "array-bracket-spacing": [2, "never"]
  }
}
