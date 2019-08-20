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
    "setupFiles": ["jest-localstorage-mock"],
    "setupFilesAfterEnv": [
        "<rootDir>/src/__tests__/bootstrap.js"
    ],
    "snapshotSerializers": ["jest-serializer-vue"],
    "testPathIgnorePatterns": [
        "<rootDir>/src/__tests__/bootstrap.*"
    ]
}