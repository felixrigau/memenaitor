module.exports = {
    verbose: true,
    rootDir: "../",
    moduleDirectories: ["node_modules"],
    moduleFileExtensions: [
        "js",   
        "jsx"
    ],
    "transform": {
        "^.+\\.js$": "<rootDir>/.test/jest.transform.js"
    },
    setupTestFrameworkScriptFile: "<rootDir>/.test/enzyme.config.js",
}