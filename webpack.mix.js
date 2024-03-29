const mix = require('laravel-mix');
const path = require('path');

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

mix
  .ts('resources/js/app.js', 'public/js')
  .react()
  .sass('resources/sass/app.scss', 'public/css')
  .disableNotifications();

// TODO: port this to Mix v6 format (mix.alias({ ... }))
mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.jsx', 'ts', '.tsx'],
    alias: {
      '@Root': path.resolve(__dirname, 'resources/js'),
      '@Interface': path.resolve(__dirname, 'resources/js/Interfaces'),
      '@Layout': path.resolve(__dirname, 'resources/js/Layouts'),
      '@Page': path.resolve(__dirname, 'resources/js/Pages'),
      '@Component': path.resolve(__dirname, 'resources/js/Components'),
      '@Hook': path.resolve(__dirname, 'resources/js/Hooks'),
      '@Util': path.resolve(__dirname, 'resources/js/Utils'),
      '@Style': path.resolve(__dirname, 'resources/js/Styles'),
      '@Context': path.resolve(__dirname, 'resources/js/Contexts'),
    },
  },
});
