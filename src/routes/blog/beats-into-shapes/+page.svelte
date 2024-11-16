<script>
  import image1 from "../../../assets/beats/1.png";
  import image2 from "../../../assets/beats/2.png";
  import image3 from "../../../assets/beats/3.png";
  import image4 from "../../../assets/beats/4.png";
  import image5 from "../../../assets/beats/5.png";
</script>

<svelte:head>
  <title>New game project: Beats into Shape</title>
  <meta
    name="description"
    content="Discover 'Beats into Shape', a rhythm game where you craft items in sync with music. Forge objects from start to finish through rhythmic gameplay."
  />
</svelte:head>

<div class="container mx-auto max-w-3xl p-6 text-gray-200">
  <div class="mb-8">
    <h1 class="text-4xl font-extrabold text-white mb-2">
      New game project: Beats into Shape
    </h1>
    <p class="text-xl">
      A rhythm game where you forge items from the very beginning of the
      process.
    </p>
  </div>

  <div class="mb-12">
    <h2 class="text-2xl font-semibold mb-2 text-white">
      Welcome to our submission for YH4F 2024
    </h2>
    <p class="text-lg">
      We create a rhythmic adventure where you craft items from start to finish.
    </p>
  </div>

  <section class="mb-12">
    <h2 class="text-3xl font-bold mb-4">Gameplay</h2>
    <p class="text-lg">
      You play as a smith in your forge, making objects in rhythm with the
      music.
    </p>
    <p class="text-lg">
      The game contains 5 levels with each level representing every step to
      create a nice and flawless metallic object.
    </p>
  </section>

  <section class="mb-12">
    <h2 class="text-3xl font-bold mb-4">The Universe of Beats into Shape</h2>
    <p class="text-lg">
      In a world where music and nature intertwine, there exists a hidden valley
      named Harmony. At the heart of this valley lies the Ethereal Forge, a
      place of creation where blacksmiths work in harmony with the natural
      rhythms of music. Eirik, a young blacksmith, inherits this forge and
      discovers the fulfilling craft of blacksmithing.
    </p>
  </section>

  <section class="mb-12">
    <h2 class="text-3xl font-bold mb-4">Preview</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4">
      <img src={image1} alt="Preview 1" class="w-full h-auto rounded-xl" />
      <img src={image2} alt="Preview 2" class="w-full h-auto rounded-xl" />
      <img src={image3} alt="Preview 3" class="w-full h-auto rounded-xl" />
      <img src={image4} alt="Preview 4" class="w-full h-auto rounded-xl" />
    </div>
    <img src={image5} alt="Preview 5" class="w-full h-auto rounded-xl" />
  </section>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 justify-start">
    <h2 class="text-2xl font-bold col-span-full mb-4 text-white">
      Meet Our Team
    </h2>
    <div class="text-white flex flex-col items-center">
      <img
        src="https://secure.gravatar.com/avatar/4beb3e2939b1a0d1ec5664b525486b36?d=identicon&s=512"
        alt="Tipragot"
        class="w-1/2 rounded-full mb-2"
      />
      <h3 class="text-lg font-bold mb-1">Tipragot</h3>
      <p class="text-gray-300">Programmer</p>
    </div>
    <div class="text-white flex flex-col items-center">
      <img
        src="https://secure.gravatar.com/avatar/a7942845be95211969be1f821d85368c?d=identicon&s=512"
        alt="CoCo_sol"
        class="w-1/2 rounded-full mb-2"
      />
      <h3 class="text-lg font-bold mb-1">CoCo_sol</h3>
      <p class="text-gray-300">Programmer - Art</p>
    </div>
    <div class="text-white flex flex-col items-center">
      <img
        src="https://secure.gravatar.com/avatar/a953fcb8402aa74a9f84e651b57b8af2?d=identicon&s=512"
        alt="Edmond"
        class="w-1/2 rounded-full mb-2"
      />
      <h3 class="text-lg font-bold mb-1">Edmond</h3>
      <p class="text-gray-300">Art</p>
    </div>
  </div>
</div>
