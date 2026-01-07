import esbuild from "esbuild";
import base from './build-base.js';

let CSSWatcher = await esbuild.context(base.CSSBase);
await CSSWatcher.watch();

let JSWatcher = await esbuild.context(base.JSBase);
await JSWatcher.watch();