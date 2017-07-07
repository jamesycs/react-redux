module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    root: __dirname,
    alias:{
      VideoList: './components/video_list.js',
      SearchBar: './components/search_bar.js',
      VideoDetail: './components/video_detail.js'
      
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
   devtool: 'inline-source-map',
};
