<script>
  import { fetchProjects, fetchServices } from "$lib/api.js"; // Assuming you have separate functions to fetch projects and services

  let projects = fetchProjects();
  let services = fetchServices();

  import logo from "../assets/logo.svg";
</script>

<!-- Intro -->
<div class="relative flex flex-col md:flex-row">
  <div class="flex-1">
    <div class="absolute inset-0 flex justify-center items-center">
      <div class="p-8 rounded-lg text-center md:text-left">
        <h1 class="text-4xl md:text-8xl font-bold text-white mb-4 md:mb-8 md:text-shadow-[0 0.7px 0 rgba(0,0,0,0.6)]">Coding with passion</h1>
        <h2 class="text-2xl md:text-4xl text-white md:text-shadow-[0 0.7px 0 rgba(0,0,0,0.6)]">Learning with purpose</h2>
      </div>
    </div>
  </div>
  <div class="flex-1">
    <img alt="logo" src={logo} class="w-full h-full object-cover" />
  </div>
</div>


<!-- My projects section -->
<h1 class="text-3xl font-bold mx-auto text-center mt-8 text-white">My projects</h1>
<div class="container mx-auto my-8 flex flex-wrap justify-center">
  {#each projects as project}
    <a
      href={project.link}
      class="flex flex-row m-5 w-full lg:w-1/3 px-4 mb-4 duration-300 hover:bg-gray-800 hover:scale-105 bg-gray-900 p-6 rounded-lg shadow-md"
    >
      <img
        src={project.link_img}
        alt="logo"
        class="w-1/3 h-40 object-contain mb-4 rounded-lg"
      />
      <div
        class="w-2/3 flex flex-col justify-between p-4 leading-normal text-gray-300"
      >
        <h5
          class="mb-2 h-1/3 text-2xl font-bold tracking-tight text-gray-100"
        >
          {project.title}
        </h5>
        <article class="mb-3 h-2/3 font-normal text-gray-400 text-wrap">
          {project.description}
        </article>
      </div>
    </a>
  {/each}
</div>

<!-- My services section -->
<h1 class="text-3xl font-bold mx-auto text-center mt-8 text-white">My services</h1>
<div class="container mx-auto my-8 flex flex-wrap justify-center">
  {#each services as service}
    <div
      class="w-full max-w-sm m-4 rounded-lg shadow bg-gray-900 border-gray-800 flex flex-col"
    >
      <img
        src={service.link_img}
        alt="logo"
        class="rounded-t-lg h-40 w-full pt-4 object-contain"
      />
      <div class="flex-1 p-5">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-100"
        >
          {service.title}
        </h5>
        <article class="mb-3 font-normal text-gray-300">
          {service.description}
        </article>
      </div>
      <a
        href={service.link}
        class="mb-0 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-b-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
      >
        Check it out
      </a>
    </div>
  {/each}
</div>

<!-- About Me section -->
<section class="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
  <div
    class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row p-10"
  >
    <div class="md:w-1/2">
      <h2
        class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
      >
        whoami ?
      </h2>
      <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-300 md:mt-8">
        Hello World ! <br />
        My name is CoCoSol and I am a 17-year-old French coder with a strong desire
        to learn.<br />
        Although I do not have much experience, I am passionate about development
        and math. Currently, I am a student at
        <a href="https://www.caousou.com/" class="text-blue-500">Caousou</a>
        in France and I am always seeking new challenges. <br /> To contact me
        or ask any questions, please email me at contact@cocosol.fr. <br /><br
        />
        PS: I love rust and I hate python and javascript.
      </p>
    </div>
    <div class="md:w-1/2 relative">
      <img
        alt="logo"
        src={logo}
        class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
      />
    </div>
  </div>
</section>
