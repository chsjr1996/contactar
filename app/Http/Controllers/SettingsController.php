<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function switchLang(Request $request)
    {
        $lang = $request->input('lang', config('app.fallback_locale'));

        if (in_array($lang, config('app.available_languages'))) {
            session()->put('applocale', $lang);
        }

        return redirect()->back();
    }
}
