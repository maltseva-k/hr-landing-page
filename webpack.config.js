const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  devServer: {
    hot: true
  },
  entry: [
    './src/js/index.js',
    './src/style/main.scss'
  ],
  output: {
    filename: './js/bundle.js',
    publicPath: '/hr-landing-page/',
    path: path.resolve(__dirname, './docs')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        include: [
          path.resolve(__dirname, 'src/style'),
          path.resolve(__dirname, 'node_modules/swiper/swiper-bundle.min.css')
        ],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new ESLintPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/fonts',
          to: './fonts'
        },
        {
          from: './src/favicon',
          to: './favicon'
        },
        {
          from: './src/img',
          to: './img'
        },
        {
          from: './src/index.html',
          to: './index.html'
        }
      ]
    })
  ]
}
