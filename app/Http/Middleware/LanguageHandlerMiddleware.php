<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LanguageHandlerMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $appLocale = session()->get('applocale');

        if ($appLocale && array_key_exists($appLocale, config('app.available_languages'))) {
            app()->setLocale($appLocale);
        } else {
            app()->setLocale(config('app.fallback_locale'));
        }

        return $next($request);
    }
}
