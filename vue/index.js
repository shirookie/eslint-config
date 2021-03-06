const {parserOptions, rules: base} = require('../index');

module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        ...parserOptions,
        parser: '@babel/eslint-parser',
    },
    plugins: ['vue'],
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                'indent': 'off',
            },
        },
    ],
    rules: {
        'vue/comment-directive': 'error',
        'vue/jsx-uses-vars': 'error',
        'vue/no-dupe-keys': 'error',
        'vue/no-duplicate-attributes': [
            'error',
            {
                'allowCoexistClass': true,
                'allowCoexistStyle': true,
            },
        ],
        'vue/no-parsing-error': 'error',
        'vue/no-reserved-keys': 'error',
        'vue/no-shared-component-data': 'error',
        'vue/no-template-key': 'error',
        'vue/no-textarea-mustache': 'error',
        'vue/no-unused-vars': 'error',
        'vue/no-unused-components': 'error',
        'vue/no-use-v-if-with-v-for': 'warn',
        'vue/require-prop-type-constructor': 'error',
        'vue/require-render-return': 'error',
        'vue/require-v-for-key': 'error',
        'vue/require-valid-default-prop': 'error',
        'vue/return-in-computed-property': 'error',
        'vue/use-v-on-exact': 'off',
        'vue/valid-template-root': 'error',
        'vue/valid-v-bind': 'error',
        'vue/valid-v-cloak': 'error',
        'vue/valid-v-else-if': 'error',
        'vue/valid-v-else': 'error',
        'vue/valid-v-for': 'error',
        'vue/valid-v-html': 'error',
        'vue/valid-v-if': 'error',
        'vue/valid-v-model': 'error',
        'vue/valid-v-on': 'error',
        'vue/valid-v-once': 'error',
        'vue/valid-v-pre': 'error',
        'vue/valid-v-show': 'error',
        'vue/valid-v-text': 'error',
        'vue/attribute-hyphenation': 'error',
        'vue/html-closing-bracket-newline': 'error',
        'vue/html-closing-bracket-spacing': [
            'warn', {
                'selfClosingTag': 'never',
            },
        ],
        'vue/html-end-tags': 'error',
        'vue/html-indent': ['error', 4, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': false,
            'ignores': [],
        }],
        'vue/html-quotes': 'error',
        'vue/html-self-closing': [
            'error',
            {
                'html': {
                    'void': 'never',
                    'normal': 'never',
                    'component': 'always',
                },
                'svg': 'always',
                'math': 'always',
            },
        ],
        'vue/max-attributes-per-line': [
            'error', {
                'singleline': 2,
                'multiline': {
                    'max': 2,
                    'allowFirstLine': false,
                },
            },
        ],
        'vue/multiline-html-element-content-newline': 'off',
        'vue/mustache-interpolation-spacing': 'error',
        'vue/name-property-casing': 'off',
        'vue/no-multi-spaces': 'error',
        'vue/no-spaces-around-equal-signs-in-attribute': 'error',
        'vue/prop-name-casing': 'error',
        'vue/require-default-prop': 'error',
        'vue/require-prop-types': 'error',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/v-bind-style': 'warn',
        'vue/v-on-style': 'warn',
        'vue/attributes-order': 'warn',
        'vue/this-in-template': 'error',
        'vue/array-bracket-spacing': base['array-bracket-spacing'] || 'off',
        'vue/arrow-spacing': base['arrow-spacing'] || 'off',
        'vue/block-spacing': base['vue/block-spacing'] || 'off',
        'vue/brace-style': base['brace-style'] || 'off',
        'vue/camelcase': base.camelcase || 'off',
        'vue/comma-dangle': base['comma-dangle'] || 'off',
        'vue/component-definition-name-casing': 'off',
        'vue/component-name-in-template-casing': [
            'error',
            'kebab-case',
            {
                'registeredComponentsOnly': true,
                'ignores': [],
            },
        ],
        'vue/component-tags-order': [
            'warn',
            {
                'order': [
                    'template',
                    'script',
                    'style',
                ],
            },
        ],
        'vue/dot-location': base['dot-location'] || 'off',
        'vue/eqeqeq': base.eqeqeq || 'off',
        'vue/key-spacing': base['key-spacing'] || 'off',
        'vue/keyword-spacing': base['keyword-spacing'] || 'off',
        'vue/max-len': base['max-len'] || 'off',
        'vue/no-deprecated-scope-attribute': 'off',
        'vue/no-deprecated-slot-attribute': 'off',
        'vue/no-deprecated-slot-scope-attribute': 'off',
        'vue/no-empty-pattern': base['no-empty-pattern'] || 'off',
        'vue/no-irregular-whitespace': base['no-irregular-whitespace'] || 'off',
        'vue/no-reserved-component-names': 'error',
        'vue/no-restricted-syntax': base['no-restricted-syntax'] || 'off',
        'vue/no-unsupported-features': 'off',
        'vue/object-curly-spacing': base['@babel/object-curly-spacing'] || 'off',
        'vue/require-direct-export': 'error',
        'vue/script-indent': [
            'error',
            4,
            {
                switchCase: 1,
            },
        ],
        'vue/space-infix-ops': base['space-infix-ops'] || 'off',
        'vue/space-unary-ops': base['space-unary-ops'] || 'off',
        'vue/v-slot-style': 'off',
        'vue/valid-v-bind-sync': 'error',
        'vue/valid-v-slot': 'error',
    },
};
