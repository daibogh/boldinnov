var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  mode: 'development',
  entry:  path.join(__dirname, 'assets/src/js/index'),
  output: {
    path: path.join(__dirname, 'assets/dist'),
    filename: '[name]-[hash].js'
  },
  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: 'webpack-stats.json'
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
    { test: /\.tsx?$/, loader: "awesome-typescript-loader", exclude: /node_modules/, },

    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    
    //css
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
  {
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=512&&name=[path][name].[ext]?[hash]'
  }
    ],
  },
  devtool: "source-map",
  resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json",".css"]
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //     "react": "React",
  //     "react-dom": "ReactDOM"
  // }
};
