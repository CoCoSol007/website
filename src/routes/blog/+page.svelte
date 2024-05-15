<script>
import { onMount } from 'svelte';
import { fetchArticles } from '../../lib/api';

let articles = [];

onMount(async () => {
    articles = await fetchArticles();
});
</script>

<svelte:head>
    <title>My Personal Blog - Tech, AI, Math, and Reflections</title>
    <meta name="description" content="Welcome to my personal blog where I post articles about tech, artificial intelligence, mathematics, reflections on life, philosophy, and much more." />
</svelte:head>

<!-- Blog component -->
<div class="max-w-3xl mx-auto py-8 px-4">
    <h1 class="text-3xl font-bold text-gray-200 mb-6">Welcome to My Personal Blog</h1>
    <p class="text-lg text-gray-400 mb-8">Here, I share articles on tech, AI, math, reflections on life, philosophy, and many other topics.</p>

    {#each articles as article, index}
    <div class="my-4 border-b border-gray-700 pb-4">
        <div class="flex justify-between items-center">
            <div>
                <a href="/blog/{article.path}" class="text-lg font-semibold text-gray-200 hover:underline cursor-pointer">{article.title}</a>
                <p class="text-sm text-gray-400">{article.description}</p>
            </div>
            <p class="text-sm text-gray-400">{article.date}</p>
        </div>
    </div>
    {/each}
</div>
