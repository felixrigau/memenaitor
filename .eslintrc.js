module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "env": {
        "node": true,
        "es6": true,
        "jest": true,
        "browser": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": "off",
        "react/jsx-uses-vars": "error",
    },
    "settings": { 
        "react": { 
            "version" : "16.4.2" 
        }
    }
};