<script>
import "../app.css";
import logo from "/src/assets/logo.svg";
</script>

<nav class="bg-gray-900 fixed w-full top-0 z-50 backdrop-blur-2xl bg-gray-900/80 border-b border-gray-700">
    <div class="container mx-auto flex items-center justify-between">
        <img class="h-16 w-16" src={logo} alt="icon" />
        <div class="flex items-center">
            <a href="/" class="text-gray-300 mx-2 transition ease-in-out hover:text-blue-700">Home</a>
            <a href="/blog" class="text-gray-300 mx-2 transition ease-in-out hover:text-blue-700">Blog</a>
            <a href="https://github.com/CoCoSol007" class="text-gray-300 mx-2 transition ease-in-out hover:text-blue-700">GitHub</a>
        </div>
        <h1 class="font-bold text-lg">CoCoSol</h1>
    </div>
</nav>
<br>
<br>

<slot />


<footer class="py-4">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
        <p class="text-white text-center mb-2">© 2024 CoCoSol</p>
        <div class="text-center">
            <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.fr" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">Licensed under CC BY-NC 4.0 DEED</a>
        </div>
    </div>
</footer>
