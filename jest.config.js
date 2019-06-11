module.exports = {
    moduleFileExtensions: [
        'js',
        'json',
        'vue'
    ],
    'transform': {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    "setupFilesAfterEnv": [
        "<rootDir>/src/__tests__/bootstrap.js"
    ],
    "snapshotSerializers": ["jest-serializer-vue"],
    "testPathIgnorePatterns": [
        "<rootDir>/src/__tests__/bootstrap.*"
    ]
}