<script>
  import "../app.css";
  import logo from "../assets/logo.svg";
</script>

<nav class="bg-gray-900">
  <div class="container mx-auto flex items-center justify-between">
    <img class="h-16 w-16" src={logo} alt="icon" />
    <a href="/" class="font-bold text-lg">CoCoSol</a>
  </div>
</nav>

<slot />
