import {sassPlugin} from 'esbuild-sass-plugin';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

// CSS
let CSSBase = {
    entryPoints: ['css/styles.scss'],
    outfile: 'css/styles.css',
    minify: true,
    loader: {
        '.svg': 'dataurl',
        '.woff': 'dataurl',
        '.woff2': 'dataurl',
        '.ttf': 'dataurl'
    }
};

CSSBase = JSON.parse(JSON.stringify(CSSBase));

CSSBase.plugins = [
    sassPlugin({async transform(source, resolveDir) {
        const {css} = await postcss([autoprefixer]).process(source, {from:undefined});
        return css;
    }})
];

// JS
let JSBase = {
    entryPoints: ['js/scripts.js'],
    outfile: 'js/scripts-min.js',
    bundle: true,
    minify: true
};

JSBase = JSON.parse(JSON.stringify(JSBase));

// Make configuration objects available to other files
export default {
    CSSBase: CSSBase,
    JSBase: JSBase
};