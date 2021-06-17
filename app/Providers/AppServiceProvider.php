<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Repositories
        $this->app->bind(
            'App\Repositories\Contracts\ContactRepositoryInterface',
            'App\Repositories\Eloquent\ContactRepository',
        );

        // Services
        $this->app->bind(
            'App\Services\Interfaces\UploadServiceInterface',
            'App\Services\UploadFileService\UploadFileService',
        );

        $this->app->bind(
            'App\Services\Interfaces\SendMailServiceInterface',
            'App\Services\SendMailService\SendMailService',
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
