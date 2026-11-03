import path from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'development',

    entry: './src/index.js',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    devServer: {
        static: './dist',
        port: 8080,
        open: true,
        watchFiles: ['src/**/*'],
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(jpg|jpeg|png)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },

            {
                test: /\.svg$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'icons/[name][ext]',
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
};
