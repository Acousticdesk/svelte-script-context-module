const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'public', 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.svelte$/,
            use: 'svelte-loader',
        }],
    },
}