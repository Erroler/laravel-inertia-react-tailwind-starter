<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function login() 
    {
        return Inertia::render('Home', [
            'laravel_version' => app()->version(),
            'php_version' => phpversion(),
        ]);
    }
}
