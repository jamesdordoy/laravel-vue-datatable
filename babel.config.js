module.exports = {
    "presets": [
        [
            '@vue/app',
            {
                "modules": false
            }
        ]
    ],
    "env": {
        "test": {
            "presets": [
                [
                    "@babel/preset-env",
                    {
                        "targets": {
                            "node": "current"
                        }
                    }
                ]
            ]
        }
    }
}
