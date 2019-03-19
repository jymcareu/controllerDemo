export default {
  "entry": ["babel-polyfill", "./src/index.js"],
  "disableCSSModules": true,
  "env": {
    "development": {
      "extraBabelPlugins": [
          "dva-hmr",
          "transform-runtime",
          ["import", { "libraryName": "antd", "style": "css" }],
          ["transform-decorators-legacy"]
      ]

    },
    "production": {
      "publicPath": "./",
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": "css" }],
        ["transform-decorators-legacy"]
      ]
    }
  },
  "proxy":{
    "/wcsSafe": {
      // "target": "http://192.168.17.10:10081",
      "target": "http://192.168.16.10/",
      "changeOrigin": true
    }
  }
}

