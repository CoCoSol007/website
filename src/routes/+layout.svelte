<script>
  import "../app.css";
  import logo from "../assets/logo.svg";
  import { onMount } from 'svelte';

  let isOpen = false;

  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  const closeMenu = (path) => {
    isOpen = false;
    window.location.href = path;
  };

  onMount(() => {
    const closeMenuOnNavigation = () => {
      isOpen = false;
    };
    window.addEventListener('popstate', closeMenuOnNavigation);
    return () => window.removeEventListener('popstate', closeMenuOnNavigation);
  });
</script>

<nav class="fixed w-full z-20 top-0 start-0 border-b border-gray-600 backdrop-blur-2xl bg-gray-900/80">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
    <a href="/">
      <img src={logo} alt="Logo" class="w-16 h-16 my-auto" />
    </a>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mr-4">
      <a href="/" class="text-xl font-bold text-gray-100 my-auto">CoCoSol</a>
      <button aria-label="Aria Name" id="navbar-toggle" on:click={toggleMenu} type="button" class="inline-flex items-center m-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded={isOpen}>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </div>
    <div class="items-center justify-between w-full md:flex md:w-auto md:order-1 {isOpen ? '' : 'hidden'}" id="navbar-sticky">
      <ul class="flex flex-col md:my-auto md:p-0 m-2 font-medium border rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700">
        <li>
          <button on:click={() => closeMenu('/')} class="block py-2 px-3 text-gray-300 rounded md:hover:bg-transparent md:hover:text-blue-500 md:hover:underline md:p-0 transition ease-in-out">Home</button>
        </li>
        <li>
          <button on:click={() => closeMenu('/blog')} class="block py-2 px-3 text-gray-300 rounded md:hover:bg-transparent md:hover:text-blue-500 md:hover:underline md:p-0 transition ease-in-out">Blog</button>
        </li>
        <li>
          <a href="https://github.com/cocosol007" class="block py-2 px-3 text-gray-300 rounded md:hover:bg-transparent md:hover:text-blue-500 md:hover:underline md:p-0 transition ease-in-out" target="_blank">GitHub</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<br>
<br>

<slot />


<footer class="py-4">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
        <p class="text-white text-center mb-2">© 2024 CoCoSol</p>
        <div class="text-center">
            <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.en" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">Licensed under CC BY-NC 4.0 DEED</a>
        </div>
    </div>
</footer>
