<script>
  import { onMount } from "svelte";
  import { fetchArticles } from "../../lib/api";

  let articles = [];

  onMount(async () => {
    articles = await fetchArticles();
  });
</script>

<svelte:head>
  <title>My Personal Blog - Tech, AI, Math, and Reflections</title>
  <meta
    name="description"
    content="Welcome to my personal blog where I post articles about tech, artificial intelligence, mathematics, reflections on life, philosophy, and much more."
  />
</svelte:head>

<div class="max-w-3xl mx-auto py-8 px-4">
  <h1 class="text-3xl font-bold text-gray-200 mb-2">
    Welcome to My Personal Blog
  </h1>
  <p class="text-lg text-gray-400 mb-8">
    Here, I share articles on tech, AI, math, reflections on life, philosophy,
    and many other topics.
  </p>

  {#each articles as article}
    <div class="py-4 border-b border-gray-700">
      <div class="flex items-center">
        <a
          href="/blog/{article.path}"
          class="text-xl font-semibold text-gray-200 hover:underline hover:text-blue-500"
        >
          {article.title}
        </a>
        <p class="mx-2 text-xs text-gray-500 whitespace-nowrap">
          {article.date}
        </p>
      </div>

      {#if article.subtitle}
        <p class="text-sm text-gray-400 italic mt-1">{article.subtitle}</p>
      {/if}

      <p class="text-sm text-gray-400 mt-2">{article.description}</p>

      {#if article.tags && article.tags.length > 0}
        <div class="flex flex-wrap gap-2 mt-3">
          {#each article.tags as tag}
            <span class="px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded">
              {tag}
            </span>
          {/each}
        </div>
      {/if}
    </div>
  {/each}
</div>
