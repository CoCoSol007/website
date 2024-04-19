<script>
  import "../app.css";
  import logo from "../assets/logo.svg";
</script>

<nav class="bg-gray-900">
  <div class="container mx-auto flex items-center justify-between">
    <img class="h-16 w-16" src={logo} alt="icon" />
    <div class="flex items-center">
      <a href="/" class="text-gray-300 mr-4 transition ease-in-out hover:text-blue-700">Home</a>
      <a href="/blog" class="text-gray-300 transition ease-in-out hover:text-blue-700">Blog</a>
    </div>
    <h1 class="font-bold text-lg">CoCoSol</h1>
  </div>
</nav>

<slot />
