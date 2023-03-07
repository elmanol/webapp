const path = require('path');

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
  module: {
        rules: [
            // {
            //     test: /\.(js|jsx)$/,
            //     exclude: /node_modules/,
            //     loader: "babel-loader",
            //     options: {
            //         presets: ["@babel/preset-env", "@babel/preset-react", {
            //             'plugins': ['@babel/plugin-proposal-class-properties']
            //         }]
            //     }
            // },
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            // {
            //     test: [/\.(woff|eot|mp4)$/, /favicon-16x16\.png$/],
            //     type: 'asset/resource',
            //     generator: {
            //         filename: '[name][ext]'
            //     }
            // },
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: [
            //         // Creates `style` nodes from JS strings
            //         "style-loader",
            //         // Translates CSS into CommonJS
            //         "css-loader",
            //         // Compiles Sass to CSS
            //         "sass-loader",
            //     ],
            // },
            // {
            //     test: /\.(jpe?g|gif|png|svg)$/i,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 25000,
            //     },
            // }
        ]
    },
};