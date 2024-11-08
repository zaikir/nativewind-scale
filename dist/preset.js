"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const scale_var_1 = require("./scale-var");
const space = 4;
const spacing = [...new Array(100).keys()].flatMap((i) => [
    i, ...i < 20 ? [i + 0.5] : []
]);
exports.default = {
    theme: {
        spacing: {},
        spacingX: {
            ...Object.fromEntries(spacing.map((s) => [s, (0, scale_var_1.scaleVar)(s * space, 'x')])),
            screen: 'var(--screen-width)',
        },
        spacingY: {
            ...Object.fromEntries(spacing.map((s) => [s, (0, scale_var_1.scaleVar)(s * space, 'y')])),
            screen: 'var(--screen-height)',
            'edge-t': 'var(--edge-top)',
            'edge-b': 'var(--edge-bottom)',
        },
        borderSpacing: {},
        gap: {},
        height: {},
        inset: {},
        maxHeight: {},
        maxWidth: {},
        minHeight: {},
        minWidth: {},
        padding: {},
        margin: {},
        scrollMargin: {},
        scrollPadding: {},
        width: {},
        size: {},
        fontSize: {
            xxs: (0, scale_var_1.scaleVar)(10),
            xs: (0, scale_var_1.scaleVar)(12),
            sm: (0, scale_var_1.scaleVar)(14),
            base: (0, scale_var_1.scaleVar)(16),
            lg: (0, scale_var_1.scaleVar)(18),
            xl: (0, scale_var_1.scaleVar)(20),
            '2xl': (0, scale_var_1.scaleVar)(24),
            '3xl': (0, scale_var_1.scaleVar)(30),
            '4xl': (0, scale_var_1.scaleVar)(36),
            '5xl': (0, scale_var_1.scaleVar)(48),
            '6xl': (0, scale_var_1.scaleVar)(60),
            '7xl': (0, scale_var_1.scaleVar)(72),
            '8xl': (0, scale_var_1.scaleVar)(96),
            '9xl': (0, scale_var_1.scaleVar)(128),
        },
        lineHeight: {
            xxs: (0, scale_var_1.scaleVar)(12),
            xs: (0, scale_var_1.scaleVar)(16),
            sm: (0, scale_var_1.scaleVar)(20),
            base: (0, scale_var_1.scaleVar)(24),
            lg: (0, scale_var_1.scaleVar)(26),
            xl: (0, scale_var_1.scaleVar)(28),
            '2xl': (0, scale_var_1.scaleVar)(32),
            '3xl': (0, scale_var_1.scaleVar)(36),
            '4xl': (0, scale_var_1.scaleVar)(40),
            '5xl': (0, scale_var_1.scaleVar)(48),
            '6xl': (0, scale_var_1.scaleVar)(60),
            '7xl': (0, scale_var_1.scaleVar)(72),
            '8xl': (0, scale_var_1.scaleVar)(96),
            '9xl': (0, scale_var_1.scaleVar)(128),
        },
    },
    plugins: [
        (0, plugin_1.default)(function ({ matchUtilities, theme }) {
            const spacingX = theme('spacingX');
            const spacingY = theme('spacingY');
            const modifiers = ['responsive', 'hover'];
            matchUtilities({
                gap: (value) => ({ gap: value }),
                [`gap-x`]: (value) => ({ columnGap: value }),
            }, {
                values: spacingX,
                modifiers,
            });
            matchUtilities({
                [`gap-y`]: (value) => ({ rowGap: value }),
            }, {
                values: spacingY,
                modifiers: modifiers,
            });
            matchUtilities({
                height: (value) => ({ height: value }),
            }, {
                values: {
                    auto: 'auto',
                    ...spacingY,
                    '1/2': '50%',
                    '1/3': '33.333333%',
                    '2/3': '66.666667%',
                    '1/4': '25%',
                    '2/4': '50%',
                    '3/4': '75%',
                    '1/5': '20%',
                    '2/5': '40%',
                    '3/5': '60%',
                    '4/5': '80%',
                    '1/6': '16.666667%',
                    '2/6': '33.333333%',
                    '3/6': '50%',
                    '4/6': '66.666667%',
                    '5/6': '83.333333%',
                    full: '100%',
                },
                modifiers,
            });
            matchUtilities({
                m: (value) => ({ margin: value }),
                ml: (value) => ({ marginLeft: value }),
                mr: (value) => ({ marginRight: value }),
                mx: (value) => ({ marginLeft: value, marginRight: value }),
                inset: (value) => ({ top: value, left: value, right: value, bottom: value }),
                [`inset-x`]: (value) => ({ right: value, left: value }),
                [`inset-y`]: (value) => ({ top: value, bottom: value }),
                left: (value) => ({ left: value }),
                right: (value) => ({ right: value }),
            }, {
                values: { ...spacingX, auto: 'auto' },
                modifiers,
                type: 'position',
                supportsNegativeValues: true
            });
            matchUtilities({
                p: (value) => ({ padding: value }),
                pl: (value) => ({ paddingLeft: value }),
                pr: (value) => ({ paddingRight: value }),
                px: (value) => ({ paddingLeft: value, paddingRight: value }),
            }, {
                values: { ...spacingX, auto: 'auto' },
                modifiers,
                type: 'position',
            });
            matchUtilities({
                mt: (value) => ({ marginTop: value }),
                mb: (value) => ({ marginBottom: value }),
                my: (value) => ({ marginTop: value, marginBottom: value }),
                top: (value) => ({ top: value }),
                bottom: (value) => ({ bottom: value }),
            }, {
                values: { ...spacingY, auto: 'auto' },
                modifiers,
                type: 'position',
                supportsNegativeValues: true
            });
            matchUtilities({
                pt: (value) => ({ paddingTop: value }),
                pb: (value) => ({ paddingBottom: value }),
                py: (value) => ({ paddingTop: value, paddingBottom: value }),
            }, {
                values: { ...spacingY, auto: 'auto' },
                modifiers,
                type: 'position',
            });
            matchUtilities({
                [`h`]: (value) => ({ height: value }),
                [`min-h`]: (value) => ({ minHeight: value }),
                [`max-h`]: (value) => ({ maxHeight: value }),
            }, {
                values: { ...spacingY, auto: 'auto', full: '100%' },
                modifiers,
                type: 'absolute-size',
            });
            matchUtilities({
                [`w`]: (value) => ({ width: value }),
                [`min-w`]: (value) => ({ minWidth: value }),
                [`max-w`]: (value) => ({ maxWidth: value }),
                [`size`]: (value) => ({ width: value, height: value }),
            }, {
                values: {
                    ...spacingX,
                    auto: 'auto',
                    xs: '20rem',
                    sm: '24rem',
                    md: '28rem',
                    lg: '32rem',
                    xl: '36rem',
                    '2xl': '42rem',
                    '3xl': '48rem',
                    '4xl': '56rem',
                    '5xl': '64rem',
                    '6xl': '72rem',
                    '7xl': '80rem',
                    full: '100%',
                },
                modifiers,
                type: 'absolute-size',
            });
            return;
        }),
    ],
};
