const mix = require("laravel-mix");
const path = require("path");

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
  .ts("resources/js/app.js", "public/js")
  .react()
  .sass("resources/sass/app.scss", "public/css")
  .disableNotifications();

mix.webpackConfig({
  resolve: {
    extensions: [".js", ".jsx", "ts", ".tsx"],
    alias: {
      "@Root": path.resolve(__dirname, "resources/js"),
      "@Config": path.resolve(__dirname, "resources/js/Configs"),
      "@Interface": path.resolve(__dirname, "resources/js/Interfaces"),
      "@Layout": path.resolve(__dirname, "resources/js/Layouts"),
      "@Page": path.resolve(__dirname, "resources/js/Pages"),
      "@Component": path.resolve(__dirname, "resources/js/Components"),
      "@Style": path.resolve(__dirname, "resources/js/Styles"),
      "@Service": path.resolve(__dirname, "resources/js/Services"),
    },
  },
});
