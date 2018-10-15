module.exports = {
    verbose: true,
    rootDir: "../",
    moduleDirectories: ["node_modules"],
    moduleFileExtensions: [
        "js",   
        "jsx"
    ],
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest"
    },
    setupTestFrameworkScriptFile: "<rootDir>/.test/enzyme.config.js",
}