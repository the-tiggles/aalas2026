import esbuild from "esbuild";
import base from './build-base.js';

await esbuild.build(base.CSSBase);
await esbuild.build(base.JSBase);