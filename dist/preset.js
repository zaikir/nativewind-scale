"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const scale_var_1 = require("./scale-var");
const spacing = [
    0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9,
    9.5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 28, 32, 36, 40, 44, 48,
    52, 56, 60, 64, 72, 80, 96,
];
exports.default = {
    theme: {
        spacing: {},
        spacingX: Object.fromEntries(spacing.map((s) => [s, (0, scale_var_1.scaleVar)(s, 'x')])),
        spacingY: Object.fromEntries(spacing.map((s) => [s, (0, scale_var_1.scaleVar)(s, 'y')])),
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
            xs: [(0, scale_var_1.scaleVar)(10.5), { lineHeight: (0, scale_var_1.scaleVar)(14) }],
            sm: [(0, scale_var_1.scaleVar)(12.25), { lineHeight: (0, scale_var_1.scaleVar)(17.5) }],
            base: [(0, scale_var_1.scaleVar)(14), { lineHeight: (0, scale_var_1.scaleVar)(21) }],
            lg: [(0, scale_var_1.scaleVar)(15.75), { lineHeight: (0, scale_var_1.scaleVar)(24.5) }],
            xl: [(0, scale_var_1.scaleVar)(17.5), { lineHeight: (0, scale_var_1.scaleVar)(24.5) }],
            '2xl': [(0, scale_var_1.scaleVar)(21), { lineHeight: (0, scale_var_1.scaleVar)(28) }],
            '3xl': [(0, scale_var_1.scaleVar)(26.25), { lineHeight: (0, scale_var_1.scaleVar)(31.5) }],
            '4xl': [(0, scale_var_1.scaleVar)(31.5), { lineHeight: (0, scale_var_1.scaleVar)(35) }],
            '5xl': [(0, scale_var_1.scaleVar)(42), { lineHeight: (0, scale_var_1.scaleVar)(42) }],
            '6xl': [(0, scale_var_1.scaleVar)(52.5), { lineHeight: (0, scale_var_1.scaleVar)(52.5) }],
            '7xl': [(0, scale_var_1.scaleVar)(63), { lineHeight: (0, scale_var_1.scaleVar)(63) }],
            '8xl': [(0, scale_var_1.scaleVar)(84), { lineHeight: (0, scale_var_1.scaleVar)(84) }],
            '9xl': [(0, scale_var_1.scaleVar)(112), { lineHeight: (0, scale_var_1.scaleVar)(112) }],
        },
        lineHeight: {
            xs: (0, scale_var_1.scaleVar)(14),
            sm: (0, scale_var_1.scaleVar)(17.5),
            base: (0, scale_var_1.scaleVar)(21),
            lg: (0, scale_var_1.scaleVar)(24.5),
            xl: (0, scale_var_1.scaleVar)(24.5),
            '2xl': (0, scale_var_1.scaleVar)(28),
            '3xl': (0, scale_var_1.scaleVar)(31.5),
            '4xl': (0, scale_var_1.scaleVar)(35),
            '5xl': (0, scale_var_1.scaleVar)(42),
            '6xl': (0, scale_var_1.scaleVar)(52.5),
            '7xl': (0, scale_var_1.scaleVar)(63),
            '8xl': (0, scale_var_1.scaleVar)(84),
            '9xl': (0, scale_var_1.scaleVar)(112),
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
                pt: (value) => ({ paddingTop: value }),
                pb: (value) => ({ paddingBottom: value }),
                py: (value) => ({ paddingTop: value, paddingBottom: value }),
            }, {
                values: { ...spacingY, auto: 'auto' },
                modifiers,
                type: 'position',
            });
            matchUtilities({
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
