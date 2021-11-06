module.exports = {
    extends: "eslint-config-airbnb",
    parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
            node: true
        }
    },
    rules: {
        'arrow-parens': [1, 'as-needed'],
        'block-scoped-var': 1,
        'global-require': 1,
        indent: [2, 4, { SwitchCase: 1, VariableDeclarator: 1 }],
        'max-statements': [1, 15],
        'no-underscore-dangle': [2, { allow: ['__INITIAL_STATE__'], allowAfterThis: true }],
        'padded-blocks': [1, 'never'],
        strict: [1, 'never'],
        'max-len': 0, //100 chars is really narrow for modern screens
        'linebreak-style': 0,
        'no-plusplus':0,
    },
    globals: {}
};
