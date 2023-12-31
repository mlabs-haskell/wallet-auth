const path = require('path');

module.exports = {
    mode: 'production',
    experiments: {
        topLevelAwait: true,
    },
    entry: './test/browser.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // ...
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
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env',
                                  '@babel/preset-typescript'],
                    },
                },
            },
        ],
    },

    resolve: {
        extensionAlias: {
            ".js": [".ts", ".js"],
            ".mjs": [".mts", ".mjs"]
        }
    }
};
