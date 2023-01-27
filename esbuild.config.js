import * as esbuild from 'esbuild';

let result = await esbuild.build({
	entryPoints: ['./src/index.ts'],
	outfile: './dist/index.js',
	target: 'es2018',
	format: 'esm',
	platform: 'neutral',
	minify: true,
	bundle: true,
});
console.log(result);

// let ctx = await esbuild.context({
// 	entryPoints: ['./src/index.ts'],
// 	outdir: './dist',
// 	target: 'esNext',
// 	format: 'esm',
// 	minify: true,
// 	bundle: true,
// });

// await ctx.watch();
// console.log('watching...');

