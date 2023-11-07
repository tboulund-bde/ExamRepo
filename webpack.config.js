const path = require('path');

module.exports = {
  entry: './src/index.ts',  // Entry point of your TypeScript application
  output: {
    filename: 'bundle.js',  // Output bundle filename
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
