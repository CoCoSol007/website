<script>
  import arrow from "../../../assets/arrow.svg";
  // Date de naissance
  const birthDate = new Date('2007-10-29');
  
  // Date actuelle
  const currentDate = new Date();
  
  // Calcul de l'âge
  const age = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24 * 365));
  </script>
  
  <div class="container mx-auto max-w-6xl p-8">
      <div class="flex flex-row items-center md:items-start gap-2 mb-4">
          <a href="/blog" class="md:self-start">
              <img src={arrow} alt="Back to Blog" class="w-full h-full hover:scale-125 transition">
          </a>
          <h1 class="text-5xl font-bold text-gray-100">Introducing CoCoSol</h1>
      </div>
      <p class="text-xl text-gray-300">Get to know CoCoSol, a passionate young developer.</p>
  
      <div class="mt-8 text-gray-700">
          <div class="mt-4 text-left">
              <h1 class="text-3xl font-bold mb-2 text-white">Hello World!</h1>
              <p class="text-lg mb-4 text-white">I'm CoCoSol, a <span id="age">{age}</span>-year-old French programmer eager to learn. I have a passion for coding and mathematics. Currently, I'm a student at Caousou in France, always seeking new challenges.</p>
              <p class="text-lg text-white">To get in touch with me or ask questions, you can email me at <a href="mailto:contact@cocosol.fr" class="text-blue-500 hover:underline">contact@cocosol.fr</a>.</p>
          </div>
          <div class="mt-8">
              <h2 class="text-3xl font-bold mb-2 text-white">Experience</h2>
              <p class="text-lg mb-4 text-white">Participated in 3 <a class="hover:underline text-blue-500" href="https://godotwildjam.com/">Game-Jams</a> and <a class="hover:underline text-blue-500" href="https://fsfe.org/activities/yh4f/index.en.html"> Youth Hacking 4 Freedom </a> 2024.</p>
          </div>
          <div class="mt-8">
              <h2 class="text-3xl font-bold mb-2 text-white">Education</h2>
              <p class="text-lg mb-4 text-white">Currently in 11th grade at Caousou high school in France.</p>
          </div>
          <div class="mt-8">
              <h2 class="text-3xl font-bold mb-2 text-white">Skills</h2>
              <p class="text-lg mb-4 text-white">Proficient in game development, network development, and teamwork.</p>
          </div>
          <div class="mt-8">
              <h2 class="text-3xl font-bold mb-2 text-white">Languages</h2>
              <p class="text-lg mb-4 text-white">My main programming languages are Rust, Python and I want to learn more about programming language theory.</p>
          </div>
          <div class="mt-8">
              <h2 class="text-3xl font-bold mb-2 text-white">Interests</h2>
              <p class="text-lg mb-4 text-white">Passionate about mathematics, physics, and software development.</p>
          </div>
  
          <div class="flex flex-col md:flex-row justify-center mt-4 md:gap-4">
              <img src="https://raw.githubusercontent.com/cocosol007/github-stats/master/generated/languages.svg#gh-dark-mode-only" alt="" class="mt-4 md:w-1/2">
              <img src="https://raw.githubusercontent.com/cocosol007/github-stats/master/generated/overview.svg#gh-dark-mode-only" alt="" class="mt-4 md:w-1/2">
          </div>
      </div>
  </div>
  