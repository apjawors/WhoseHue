module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
              }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        contentBase: "./dist"
    }
}
