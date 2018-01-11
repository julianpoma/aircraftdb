# Aircarft DB
Small project that list aircrafts models with performance data. 
This is a project aimed to learn integrate a Laravel 5 backend with an Angular 4 frontend. I also I implemented JWT auth and protected routes.

January 2018.

## Try it out

### Laravel backend

* `cd aircraftdb`
* Set up your own DB settings on the .env file.
* Run `composer install`
* Run `php artisan migrate --seed`
* Run `php artisan serve`

### Angular froentend

* `cd aircraftdb\angular`
* Run `npm install`
* Run `ng serve`
* Navigate to `http://localhost:4200/`


Login credentials:
`email: test@test.com`
`password: secret`

Remember to run migrations, if not login user won't be created.