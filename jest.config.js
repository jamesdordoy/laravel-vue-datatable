module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  "setupFilesAfterEnv": [
    "<rootDir>/__tests__/bootstrap.js"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/__tests__/bootstrap.*"
  ]
}
  