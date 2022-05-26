const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    stats: {
        children: true,
    },
});

mix.sass('resources/sass/app.scss', 'public/css', [
        //
    ]);
    mix.sass('resources/sass/animate.scss', 'public/css', [
        //
    ]);
    mix.sass('resources/sass/jquery.countdown.scss', 'public/css', [
        //
    ]);
    mix.sass('resources/sass/magnific-popup.scss', 'public/css', [
        //
    ]);
    mix.sass('resources/sass/bootstrap.scss', 'public/css', [
        //
    ]);
    mix.sass('resources/sass/owl.carousel.scss', 'public/css', [
        //
    ]);
   



