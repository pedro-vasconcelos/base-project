<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @vite('resources/js/app.js')
    </head>
    <body class="antialiased">
        <div id="app"></div>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
    </body>
</html>
