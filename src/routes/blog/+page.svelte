<script>
    import { onMount } from 'svelte';
    import { fetchArticles } from '../../lib/api';

    let articles = [];

    onMount(async () => {
        articles = await fetchArticles();
    });

    // Fonction pour basculer l'état de l'article lorsqu'on clique sur le titre
    function toggleArticle(index) {
        articles[index].show = !articles[index].show;
        // Met à jour la liste des articles pour déclencher le rendu
        articles = [...articles];
    }
</script>

<!-- Blog component -->
<div class="max-w-3xl mx-auto py-8 px-4">
    {#each articles as article, index}
    {#if article.isActive}
        <div class="my-4 border-b border-gray-700 {article.show ? '' : 'pb-4'}">
            <div class="flex justify-between items-center" >
                <div>
                    <a href="/" class="text-lg font-semibold text-gray-200 hover:underline cursor-pointer" on:click|preventDefault={() => toggleArticle(index)}>{article.title}</a>
                    <p class="text-sm text-gray-400">{article.description}</p>
                </div>
                <p class="text-sm text-gray-400">{article.date}</p>
            </div>
            { #if article.show }
            <div class="pb-8 pt-2">
                <p class="text-gray-300">{article.content}</p>
            </div>
            {/if}
        </div>
    {/if}
    {/each}
</div>
