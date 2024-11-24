<script>
  import { fetchProjects, fetchArticles } from "$lib/api.js";

  import { onMount } from "svelte";

  let projects = fetchProjects();
  let articles = [];

  onMount(async () => {
    articles = await fetchArticles();
    articles = articles.slice(0, 2);
  });

  import logo from "../assets/logo.svg";

  const birthDate = new Date("2007-10-29");

  const currentDate = new Date();

  const age = Math.floor(
    (currentDate - birthDate) / (1000 * 60 * 60 * 24 * 365)
  );
</script>

<svelte:head>
  <title>CoCoSol</title>
  <meta
    name="description"
    content="Welcome to my personal blog where I showcase my projects, share my ideas, and offer my services. Explore articles about tech, artificial intelligence, mathematics, reflections on life, philosophy, and much more."
  />
</svelte:head>

<!-- Intro -->
<div class="relative flex flex-col md:flex-row">
  <div class="flex-1">
    <div class="absolute inset-0 flex justify-center items-center">
      <div class="p-8 rounded-lg text-center md:text-left">
        <h1
          class="text-4xl md:text-8xl font-bold text-white mb-4 md:mb-8 md:text-shadow-[0 0.7px 0 rgba(0,0,0,0.6)]"
        >
          Coding with passion
        </h1>
        <h2
          class="text-2xl md:text-4xl text-white md:text-shadow-[0 0.7px 0 rgba(0,0,0,0.6)]"
        >
          Learning with purpose
        </h2>
      </div>
    </div>
  </div>
  <div class="flex-1">
    <img alt="logo" src={logo} class="w-full h-full object-cover" />
  </div>
</div>

<!-- My projects section -->
<h1 class="text-3xl font-bold mx-auto text-center mt-8 text-white">
  My projects
</h1>

<div class="container mx-auto my-8 flex flex-wrap justify-center">
  {#each projects as project}
    <a
      href={project.link}
      class="flex flex-row m-5 w-full lg:w-1/3 duration-300 hover:scale-105 bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700 duration-[600ms]"
    >
      <img
        src={project.link_img}
        alt="logo"
        class="w-1/3 h-40 object-contain rounded-lg"
      />
      <div
        class="w-2/3 flex flex-col justify-between p-4 leading-normal text-gray-300"
      >
        <p class="mb-2 h-1/3 text-2xl font-bold tracking-tight text-gray-100">
          {project.title}
        </p>
        <article class="mb-3 h-2/3 font-normal text-gray-400 text-wrap">
          {project.description}
        </article>
      </div>
    </a>
  {/each}
</div>

<!-- Latest Articles section -->
<h1 class="text-3xl font-bold mx-auto text-center mt-32 text-white">
  Latest Articles
</h1>
<div class="container mx-auto mt-8 flex flex-wrap justify-center">
  {#each articles as article}
    <a
      href="blog/{article.path}"
      class="flex flex-col lg:flex-row m-5 w-full lg:w-1/3 px-4 duration-300 hover:scale-105 bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700"
    >
      <div class="w-full flex flex-col justify-between p-4 leading-normal">
        <p class="mb-2 text-2xl font-bold text-gray-100">{article.title}</p>

        <article class="mb-3 font-normal text-gray-400 text-wrap">
          {article.description}
        </article>

        {#if article.tags && article.tags.length > 0}
          <div class="flex flex-wrap gap-2 mb-3">
            {#each article.tags as tag}
              <span
                class="px-2 py-0.5 bg-gray-800 text-gray-300 text-xs rounded"
              >
                {tag}
              </span>
            {/each}
          </div>
        {/if}
      </div>
    </a>
  {/each}
</div>
<a href="/blog" class="text-blue-500 text-center block hover:underline">View more articles ...</a>

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
        My name is CoCoSol and I am a {age}-year-old French coder with a strong
        desire to learn.<br />
        Although I do not have much experience, I am passionate about development
        and math. Currently, I am a student at Caousou in France <br />
        and I am always seeking new challenges. <br /> To contact me or ask any
        questions, please email me at
        <a
          class="text-blue-500 hover:underline"
          href="mailto://contact@cocosol.fr">contact@cocosol.fr</a
        ><br />
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
