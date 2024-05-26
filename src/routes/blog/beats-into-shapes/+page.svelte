<script>
    import arrow from "../../../assets/arrow.svg";
    import image1 from "../../../assets/beats/1.png";
    import image2 from "../../../assets/beats/2.png";
    import image3 from "../../../assets/beats/3.png";
    import image4 from "../../../assets/beats/4.png";
    import image5 from "../../../assets/beats/5.png";
</script>

<div class="container mx-auto max-w-6xl p-8">
    <div class="flex items-center gap-2 mb-4">
        <a href="/blog">
            <img src={arrow} alt="Back to Blog" class="w-12 h-12 hover:scale-125 transition">
        </a>
        <h1 class="text-5xl font-bold text-gray-100">New game project: Beats into shape</h1>
    </div>
    <p class="text-xl text-gray-300">A rhythm game where you forge items from the very beginning of the process.</p>
    <div class="text-left">
        <h1 class="text-3xl font-bold mb-4 text-white">Welcome to our submission for YH4F 2024</h1>
        <p class="text-lg mb-6 text-white">We create a rhythmic adventure where you craft items from start to finish.</p>
    </div>
    
    <section class="my-8">
        <h2 class="text-3xl font-bold mb-4 text-white">Gameplay</h2>
        <p class="text-lg text-white">You play as a smith in your forge, making objects in rhythm with the music.</p>
        <p class="text-lg text-white">The game contains 5 levels with each level representing every step to create a nice and flawless metallic object.</p>
    </section>
    
    <section class="my-8">
        <h2 class="text-3xl font-bold mb-4 text-white">Preview</h2>
        <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">    
            <img src={image1} alt="Preview 1" class="w-full h-auto rounded-tl-xl">
            <img src={image2} alt="Preview 2" class="w-full h-auto rounded-tr-xl">
            <img src={image3} alt="Preview 3" class="w-full h-auto">
            <img src={image4} alt="Preview 4" class="w-full h-auto">
        </div>
        <img src={image5} alt="Preview 5" class="w-full h-auto rounded-b-xl">
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
