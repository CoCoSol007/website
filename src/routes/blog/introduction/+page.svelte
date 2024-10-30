<script>
  import arrow from "../../../assets/arrow.svg";
  // Date de naissance
  const birthDate = new Date('2007-10-29');
  
  // Date actuelle
  const currentDate = new Date();
  
  // Calcul de l'âge
  const age = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24 * 365));
  </script>
  
  <br><br><br>

  <div class="flex flex-col items-center justify-center px-4 max-w-3xl mx-auto">
      <h1 class="text-5xl font-bold mb-4 text-gray-100 text-center">Corentin SOLOIS (CoCoSol)</h1>
      <p class="text-lg text-gray-300 text-center">
          Age: {age} years
          <br />
          Location: Toulouse, France
          <br />
          Email: <a href="mailto:contact@cocosol.fr" class="text-blue-500 hover:underline">contact@cocosol.fr</a>
      </p>
  </div>
  
  <main class="p-6 max-w-3xl mx-auto">
      <h2 class="text-2xl font-semibold mb-2">About Me</h2>
      <p class="mb-4 text-gray-300">
          I am a passionate developer with a strong interest in coding and mathematics. Currently, I am a student at Lycée Caousou in Terminale, constantly seeking new challenges and opportunities to expand my skills.
      </p>
  
      <hr class="mb-4 border-gray-700" />
  
      <h2 class="text-2xl font-semibold mb-2">Coding Experiences</h2>
      <ul class="list-disc pl-5 mb-4 text-gray-300">
          <li>
              Participated in Game Jams, achieving 5th place globally in one of them.
          </li>
          <li>
              Win a price in the Youth Hacking 4 Freedom 2024 competition.
          </li>
          <li>
            Ranking 6th in the Toulouse Academy for IT.
          </li>
          <li>
            AI Foundations issued by IBM-SkillsBuild
          </li>
      </ul>
  
      <hr class="mb-4 border-gray-700" />
  
      <h2 class="text-2xl font-semibold mb-2">Skills</h2>
      <p class="mb-4 text-gray-300">
          My skills include game development, drawing, 3D rendering. I also have experience in network development, IA and enjoy working as part of a team.
      </p>
  
      <hr class="mb-4 border-gray-700" />
  
      <h2 class="text-2xl font-semibold mb-2">Programming Languages</h2>
      <p class="mb-4 text-gray-300">
          I am proficient in Rust and Python and have a keen interest in learning more about programming language theory.
          I want to learn more about Java, C, Haskell...
      </p>
  
      <hr class="mb-4 border-gray-700" />
  
      <h2 class="text-2xl font-semibold mb-2">Languages</h2>
      <p class="mb-4 text-gray-300">
          I am fluent in French and English, and I have basic knowledge of Esperanto.
      </p>
  
      <hr class="mb-4 border-gray-700" />
  
      <h2 class="text-2xl font-semibold mb-2">Interests</h2>
      <p class="mb-4 text-gray-300">
            My interests include mathematics, physics, artificial intelligence, game development, 3D rendering and much more.
      </p>
  </main>
  