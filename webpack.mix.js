const mix = require('laravel-mix');
require('mix-tailwindcss');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/css/app.scss', 'public/css')
   .react('resources/js/app.js', 'public/js')
   .babelConfig({ plugins: ['@babel/plugin-syntax-dynamic-import'] })
   .webpackConfig({
       output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
       resolve: {
           alias: {
               '@': path.resolve('resources/js'),
           },
       },
   })
   .tailwind('resources/css/tailwind.config.js');

if (mix.inProduction()) {
    mix.version()
        .purgeCss();
}
