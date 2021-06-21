const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
   .js('resources/js/category.js', 'public/js')
   .js('resources/js/favorite.js', 'public/js')
   .js('resources/js/search.js', 'public/js')
   .js('resources/js/prettify.js', 'public/js')
   .js('resources/js/pagination.js', 'public/js')
   .js('resources/js/showFavorite.js', 'public/js')
   .js('resources/js/comment.js', 'public/js')
   .js('resources/js/infinitescroll.js', 'public/js')
   .js('resources/js/Memos/sectionAdd.js', 'public/js')
   .js('resources/js/Memos/sectionEdit.js', 'public/js')
   .js('resources/js/Memos/s3_upload.js', 'public/js')
   .js('resources/js/Chats/pusher.js', 'public/js')
   .js('resources/js/Chats/flagChange.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .version();

if (mix.inProduction()) {
    mix.version();
}
