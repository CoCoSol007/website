<!-- Connexion en tant qu'administrateur -->
<section class="pt-6 pb-10 md:pt-16 md:pb-16">
    <div
        class="container px-4 mx-auto sm:px-6 lg:px-8 flex flex-col items-center justify-center"
    >
        <div
            class="max-w-md w-full py-10 px-8 bg-gray-700 shadow-lg rounded-lg"
        >
            <h2 class="text-3xl font-bold text-center mb-8">Admin Login</h2>
            <form method="post">
                <div class="mb-4">
                    <label
                        for="password"
                        class="block text-white font-semibold mb-2"
                        >Password</label
                    >
                    <input
                        type="password"
                        id="password"
                        name="password"
                        class="border-gray-300 text-gray-800 rounded-md px-4 py-2 w-full"
                        placeholder="Your password"
                    />
                </div>
                <button
                    type="submit"
                    class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 block w-full"
                    >Login</button
                >
            </form>
        </div>
    </div>
</section>
