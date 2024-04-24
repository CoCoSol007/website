<script>
import {
    onMount
} from 'svelte';
import {
    fetchArticles
} from '../../lib/api';

let articles = [];

onMount(async () => {
    articles = await fetchArticles();
});
</script>

<!-- Blog component -->
<div class="max-w-3xl mx-auto py-8 px-4">
    {#each articles as article, index}
    <div class="my-4 border-b border-gray-700 pb-4">
        <div class="flex justify-between items-center" >
            <div>
                <a href="/blog/{article.path}" class="text-lg font-semibold text-gray-200 hover:underline cursor-pointer">{article.title}</a>
                <p class="text-sm text-gray-400">{article.description}</p>
            </div>
            <p class="text-sm text-gray-400">{article.date}</p>
        </div>
    </div>
    {/each}
</div>
