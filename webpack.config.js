const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';

const config = {
    entry: './src/game.ts',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.(png|jpg)$/,
                use: ["file-loader?name=/assets/[name].[ext]"],
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        modules: ['./node_modules'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
