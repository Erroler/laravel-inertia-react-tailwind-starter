import React from 'react';

function Home({laravel_version, php_version}) {
    return (
        <div className="h-screen w-screen flex items-center bg-gray-100">
            <div className="shadow-md mx-auto bg-white p-4 px-8">
                <div className="text-center text-blue-500 font-bold text-xl">
                    Laravel Inertia React Tailwind Starter
                </div>
                <ul className="mt-4 text-gray-800">
                    <li>Laravel version: { laravel_version }</li>
                    <li>PHP version: { php_version }</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
