const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',

  entry: {
    bundle: path.resolve(__dirname, './frontend/index.js'),// path to our input file
  }
  ,
  output: {
    path: path.resolve(__dirname, './static'),  // path to our Django static directory
    filename: '[name].js',  // output bundle file name
  },
  resolve: {
      alias: {
            assets: path.resolve(__dirname, "./frontend/assets"),
            components: path.resolve(__dirname, "./frontend/components"),
            variables: path.resolve(__dirname, "./frontend/variables"),
            views: path.resolve(__dirname, "./frontend/views"),
      },
  },
  module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                    options: {
                      cacheDirectory: true,
                      "presets": ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: [/\.(woff|eot|mp4)$/, /favicon-16x16\.png$/],
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 25000,
                },
            }
        ]
    },
    plugins: [
    new Dotenv()
    ]
};