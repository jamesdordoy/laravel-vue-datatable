process.env.VUE_CLI_BABEL_TARGET_NODE = true;
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;

module.exports = {
    moduleFileExtensions: [
        'js',
        'json',
        'vue'
    ],
    'transform': {
        '^.+\\.(js|jsx)?$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    transformIgnorePatterns: [
        "node_modules/(?!(babel-jest|jest-vue-preprocessor)/)"
      ],
    "setupFiles": ["jest-localstorage-mock"],
    "setupFilesAfterEnv": [
        "<rootDir>/src/__tests__/bootstrap.js"
    ],
    "snapshotSerializers": ["jest-serializer-vue"],
    "testPathIgnorePatterns": [
        "<rootDir>/src/__tests__/bootstrap.*"
    ]
}