# Laravel-inertia-react-tailwind-starter

This is a simple boilerplate for a Laravel, Inertia, React and Tailwind application. 

Includes PurgeCSS enabled out of the box for production builds as well as versioning. [See complete Laravel Mix config](https://github.com/Erroler/laravel-inertia-react-tailwind-starter/blob/master/webpack.mix.js).

Also includes the setup of CSRF token validation for Inertia/Axios.

## Setup (development)

> 1. Run **composer install** and **npm install**.
> 1. Rename **.env.example** to **.env**.
> 1. Run **php artisan key:generate**.
> 1. Run **php artisan serve** and **npm run hot** to launch the application with hot module replacement enabled.

## Prepare assets for production

> 1. Run **npm run build production**
> 1. *Voilà*, that's it!
