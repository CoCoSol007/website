<script>
    import "../app.css";
</script>

<nav class="bg-gray-900 p-4">
    <div class="container mx-auto flex items-center justify-between">
        <img class="h-8 w-8" src="logo.svg" alt="icon" />
        <a href="/" class="font-bold text-lg">CoCoSol</a>
        <a class="text-lg" href="/login">Login</a>
    </div>
</nav>

<slot />
