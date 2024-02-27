<script>
    import { onMount } from "svelte";
    import { fetchProjects, fetchServices } from "$lib/api.js"; // Assuming you have separate functions to fetch projects and services

    let projects = [];
    let services = [];

    onMount(async () => {
        projects = await fetchProjects();
        services = await fetchServices();
    });
</script>

<!-- My projects section -->
<h1 class="text-3xl font-bold mx-auto text-center mt-8">My projects</h1>
<div class="container mx-auto my-8 flex flex-wrap justify-center">
    {#each projects as project}
        <a
            href={project.link}
            class="flex flex-row m-5 w-full md:w-1/2 lg:w-1/3 px-4 mb-4 duration-300 hover:bg-gray-600 hover:scale-105 bg-gray-700 p-6 rounded-lg shadow-md"
        >
            <img
                src="/api/get-images?path={project.link_img}"
                alt="logo"
                class="w-1/3 h-40 object-contain mb-4"
            />
            <div
                class="w-2/3 flex flex-col justify-between p-4 leading-normal text-white"
            >
                <h5
                    class="mb-2 h-1/3 text-2xl font-bold tracking-tight text-gray-900 text-white"
                >
                    {project.title}
                </h5>
                <article
                    class="mb-3 h-2/3 font-normal text-gray-400 text-wrap"
                >
                    {project.description}
                </article>
            </div>
        </a>
    {/each}
</div>

<!-- My services section -->
<h1 class="text-3xl font-bold mx-auto text-center mt-8">My services</h1>
<div class="container mx-auto my-8 flex flex-wrap justify-center">
    {#each services as service}
        <div
            class="w-full max-w-sm m-4 rounded-lg shadow bg-gray-700 border-gray-600 flex flex-col"
        >
            <img
                src="/api/get-images?path={service.link_img}"
                alt="logo"
                class="rounded-t-lg h-40 w-full pt-4 object-contain"
            />
            <div class="flex-1 p-5">
                <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white"
                >
                    {service.title}
                </h5>
                <article
                    class="mb-3 font-normal text-gray-400 text-gray-400"
                >
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
<section class="pt-10 overflow-hidden bg-grey-800 md:pt-0 sm:pt-16 2xl:pt-16">
    <div
        class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row p-10"
    >
        <div class="md:w-1/2">
            <h2
                class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
                Whoami ?
            </h2>
            <p
                class="max-w-lg mt-3 text-xl leading-relaxed text-gray-50 md:mt-8"
            >
                Hello World ! <br />
                My name is <u>CoCoSol</u>. I am 16 years old.<br />
                I am a French coder with not much experience but a strong desire
                to
                <span class="text-2xl font-bold text-red-500">learn</span>.<br
                />
                I'm passionate about development and math. I'm currently a student
                at
                <a href="https://www.caousou.com/" class="text-blue-500"
                    >Caousou</a
                >
                in France, and I'm always looking for new challenges. If you want
                to know more about me or have any questions, you can contact me at
                <strong class="text-red-500">contact@cocosol.fr</strong>.
            </p>
        </div>
        <div class="md:w-1/2 relative">
            <img
                alt="logo"
                src="logo.svg"
                class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
            />
        </div>
    </div>
</section>
