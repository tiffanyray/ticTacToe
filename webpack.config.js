const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'style.css' });

    return {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'docs'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                { //js testing
                    test: /\.js$/,
                        exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }, //end of js testing
                {  //style testing
                    test: [
                        /\.sass$/,
                        /\s?css$/
                    ],
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                } //end of style testing
            ]
        },  //end of module
        plugins: [
            CSSExtract
        ],
        devServer: {
            contentBase: path.join(__dirname, 'docs'),
            historyApiFallback: true
        }
    }  //end of return statement
}