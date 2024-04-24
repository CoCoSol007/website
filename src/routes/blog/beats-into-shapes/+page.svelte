<script>
    import arrow from "../../../assets/arrow.svg";
    import image1 from "../../../assets/beats/1.png";
    import image2 from "../../../assets/beats/2.png";
    import image3 from "../../../assets/beats/3.png";
    import image4 from "../../../assets/beats/4.png";
    import image5 from "../../../assets/beats/5.png";
</script>

<div class="container mx-auto w-2/3 py-8">
    <div class="flex items-center gap-2 my-4">
        <a href="/blog">
            <img src={arrow} alt="Back to Blog" class="w-12 h-12 hover:scale-125 transition">
        </a>
        <h1 class="text-5xl font-bold text-gray-100">New game project: Beats into shape</h1>
    </div>
    <p class="text-xl text-gray-300">A rhythm game where you forge items from the very beginning of the process.</p>
    <div class="text-left">
        <h1 class="text-3xl font-bold mb-4 text-white">Welcome to our submission for Godot Wild Jam #68</h1>
        <p class="text-lg mb-6 text-white">This month's theme was Forge, inspiring us to create a rhythmic adventure where you craft items from start to finish.</p>
    </div>
    
    <section class="my-8">
        <h2 class="text-3xl font-bold mb-4 text-white">Gameplay</h2>
        <p class="text-lg text-white">You play as a smith in your forge, making objects in rhythm with the music.</p>
        <p class="text-lg text-white">The game contains 4 levels with each level representing every step to create a nice and flawless metallic object.</p>
    </section>
    
    <section class="my-8">
        <h2 class="text-3xl font-bold mb-4 text-white">Try the Game!</h2>
        <p class="text-lg mb-4 text-white">Ready to forge your own beats? Click below to play!</p>
        <button onclick="window.location.href='https://edmondada.itch.io/beats-into-shapes'" class="bg-blue-500 hover:bg-blue-700 hover:scale-105 text-white font-bold py-2 px-4 rounded-xl transition ease-in-out inline-flex items-center gap-2">
            <span>Play Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.25 5.75L18.75 12L14.25 18.25"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 5.75L14.25 12L9.75 18.25"></path>
            </svg>
        </button>
    </section>

    <section class="my-8">
        <h2 class="text-3xl font-bold mb-4 text-white">Preview</h2>
        <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">    
            <img src={image1} alt="Preview 1" class="w-full h-auto">
            <img src={image2} alt="Preview 2" class="w-full h-auto">
            <img src={image3} alt="Preview 3" class="w-full h-auto">
            <img src={image4} alt="Preview 4" class="w-full h-auto">
        </div>
        <img src={image5} alt="Preview 5" class="w-full h-auto">
    </section>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 justify-start">
        <h2 class="text-2xl font-bold col-span-full mb-4 text-white">Meet Our Team</h2>
        <div class="text-white flex flex-col items-center">
            <img src="https://secure.gravatar.com/avatar/4beb3e2939b1a0d1ec5664b525486b36?d=identicon&s=512" alt="Tipragot" class="w-1/2 rounded-full mb-2">
            <h3 class="text-lg font-bold mb-1">Tipragot</h3>
            <p class="text-gray-300">Programmer</p>
        </div>
        <div class="text-white flex flex-col items-center">
            <img src="https://secure.gravatar.com/avatar/a7942845be95211969be1f821d85368c?d=identicon&s=512" alt="CoCo_sol" class="w-1/2 rounded-full mb-2">
            <h3 class="text-lg font-bold mb-1">CoCo_sol</h3>
            <p class="text-gray-300">Programmer - Art</p>
        </div>
        <div class="text-white flex flex-col items-center">
            <img src="https://secure.gravatar.com/avatar/a953fcb8402aa74a9f84e651b57b8af2?d=identicon&s=512" alt="Edmond" class="w-1/2 rounded-full mb-2">
            <h3 class="text-lg font-bold mb-1">Edmond</h3>
            <p class="text-gray-300">Art</p>
        </div>
    </div>
</div>
