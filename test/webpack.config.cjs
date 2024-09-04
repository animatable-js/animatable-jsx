const HTMLInlinePlugin = require("html-inline-webpack-plugin");
const path = require("path");

/** @type {import("webpack").Configuration} */
const config = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {publicPath: "/"},
    plugins: [
        new HTMLInlinePlugin({
            template: "./src/index.html",
            filename: "index.html",
            inline: false,
        })
    ],
    resolve: {
        extensions: [".js", ".ts", ".tsx"],

        // Resolves compatibility issues that arise during the building of React packages.
        /*
        alias: {
            "react": path.resolve(__dirname, "node_modules/react/"),
            "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
            "react/jsx-runtime": path.resolve(__dirname, "node_modules/react/jsx-runtime")
        },
        */
    },
    module: {
        rules: [
            { // for TSX and TS
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ]
    }
}

module.exports = config;