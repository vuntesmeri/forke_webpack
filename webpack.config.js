const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const CopyWebpackPlugin  = require("copy-webpack-plugin");
const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: {
    filename: path.resolve(__dirname, "./src/index.js"),
  },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name][contenthash].js",
      assetModuleFilename: 'images/[hash][ext][query]',
      clean: true
        
    },
    performance: {
      hints: false,
      maxAssetSize: 512000,
      maxEntrypointSize: 512000
  },
    devtool: "source-map",
    devServer: {
      port: 8800,
      compress: true,
      hot: true,
      open: true,
      static: {
        directory: path.join(__dirname, 'dist')
      }
    },
  
  
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
      new CopyWebpackPlugin({'patterns': [
        {from:'./src/img/**/*.png', to:'images'}
      ]
      }),
    new LodashModuleReplacementPlugin({
      'collections': true,
      'paths': true
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  
  module: {
    rules: [  
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader","sass-loader"],
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
          type: "asset",
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
};
module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
}