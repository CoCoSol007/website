<script>
    export let data;
    import arrow from "../../../assets/arrow.svg";
</script>

<div class="container mx-auto w-2/3 py-8 ">
    <div class="flex items-center gap-2 my-4">
        <a href="/blog">
            <img src={arrow} alt="Back to Blog" class="w-12 h-12 hover:scale-105">
        </a>
        <h1 class="text-5xl font-bold text-gray-100">{data.title}</h1>
    </div>
    <p class="text-xl text-gray-300">{data.description}</p>
    <div class="mt-8 text-gray-700">{@html data.content}</div>
</div>
