// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
    },
    module: {
       rules: [{
           test: /\.scss$/,
           use: [{
               loader: "style-loader" // creates style nodes from JS strings
           }, {
               loader: "css-loader" // translates CSS into CommonJS
           }, {
               loader: "sass-loader" // compiles Sass to CSS
           }]
       }]
    }
}
