const elixir = require('laravel-elixir');

// require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// elixir(mix => {
//     mix.sass('app.scss')
//        .webpack('app.js');
// });
const node = 'node_modules/';
const assets = 'public/assets/';
const js = `${assets}js/`;
const css = `${assets}css/`;
const fonts = `${assets}/css/fonts/`;

elixir(function (mix) {
    // jquery
    mix.copy(`${node}jquery/dist/jquery.min.js`, `${js}jquery`);
    // font-awesome
    mix.copy(`${node}font-awesome/css/font-awesome.min.css`, `${css}font-awesome`);
    mix.copy(`${node}font-awesome/fonts`, `${fonts}`);
    // bulma.css
    mix.copy(`${node}bulma/css/bulma.css`, `${css}bulma/css`);
    mix.copy(`${node}bulma/css/bulma.css.map`, `${css}bulma/css`);
});
