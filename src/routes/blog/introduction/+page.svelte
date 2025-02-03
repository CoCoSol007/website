<script>
  const birthDate = new Date("2007-10-29");

  const currentDate = new Date();

  const age = Math.floor(
    (currentDate - birthDate) / (1000 * 60 * 60 * 24 * 365)
  );
</script>

<svelte:head>
  <title>Corentin SOLOIS (CoCoSol) - My Developer Profile</title>
  <meta
    name="description"
    content="I am Corentin SOLOIS, a motivated and innovative student with a strong foundation in programming, mathematics, physics, and computer science."
  />
</svelte:head>

<div class="flex flex-col items-center justify-center max-w-3xl mx-auto mt-8">
  <h1 class="text-5xl font-bold mb-4 text-gray-100 text-center">
    Corentin SOLOIS (CoCoSol)
  </h1>
  <p class="text-lg text-gray-300 text-center">
    Age: {age} years
    <br />
    Location: Toulouse, France
  </p>
</div>

<main class="p-6 max-w-3xl mx-auto">
  <h2 class="text-2xl font-semibold mb-2">About Me</h2>
  <p class="mb-4 text-gray-300">
    I am a motivated and innovative student with a strong foundation in
    programming, mathematics, physics, and computer science. Currently
    completing my high school education at Lycée Caousou in Toulouse, I have
    consistently excelled in both scientific and technical disciplines. I have
    also earned recognition for my achievements in software development and
    technology competitions. My passion lies in designing and implementing
    creative software solutions, which I have honed through hands-on projects
    and collaborative challenges.
  </p>

  <hr class="mb-4 border-gray-700" />

  <h2 class="text-2xl font-semibold mb-2">Honours and Awards</h2>
  <ul class="list-disc pl-5 mb-4 text-gray-300">
    <li>
      <strong>Youth Hacking 4 Freedom 2024 – Epic Game Award</strong> - 4th
      place for our rhythm game <em>Beats into Shapes</em>.
      <a
        href="https://fsfe.org/news/2024/news-20241027-01.en.html"
        class="text-blue-400">Details</a
      >
    </li>
    <li>
      <strong>IT Academic Olympiad</strong> - 6th place out of 209 participants.
      <a
        href="https://pedagogie.ac-toulouse.fr/informatique/system/files/2024-05/Palmar%C3%A8s%20complet%202024.pdf"
        class="text-blue-400">Details</a
      >
    </li>
    <li>
      <strong>Godot Wild Jam #68</strong> - 5th place out of 153 entries.
      <a href="https://itch.io/jam/godot-wild-jam-68" class="text-blue-400"
        >Details</a
      >
    </li>
  </ul>

  <hr class="mb-4 border-gray-700" />

  <h2 class="text-2xl font-semibold mb-2">Education and Training</h2>
  <ul class="list-disc pl-5 mb-4 text-gray-300">
    <li>
      <strong>High school graduation (in progress)</strong> - Lycée Caousou,
      Toulouse, France (2023 - Present)
      <a href="https://www.caousou.com/" class="text-blue-400">Details</a>
    </li>
    <li>
      <strong>AI Introduction and Certification Internship</strong> - IPESUP,
      Paris, France (2024)
      <a
        href="https://www.ipesup.fr/intelligence-artificielle/"
        class="text-blue-400">Details</a
      >
    </li>
    <li>
      <strong>Secondary School Diploma</strong> - Simone Veil Secondary School, Masseube,
      France (2016 - 2021)
    </li>
  </ul>

  <hr class="mb-4 border-gray-700" />

  <h2 class="text-2xl font-semibold mb-2">Work Experience</h2>
  <ul class="list-disc pl-5 mb-4 text-gray-300">
    <li>
      <strong>Middle School Science Tutor</strong> - Lycée Caousou (Sep 2023 -
      Apr 2024)
      <br />
      Developed communication skills, teaching, and mentorship abilities.
    </li>
    <li>
      <strong>Medical Assistant</strong> - La Reviscolada (Jun 2024 - Jul 2024)
      <br />
      Enhanced interpersonal, teamwork, and adaptability skills.
    </li>
  </ul>

  <hr class="mb-4 border-gray-700" />

  <h2 class="text-2xl font-semibold mb-2">Skills</h2>
  <p class="mb-4 text-gray-300">
    My skills include game development, drawing, 3D rendering, network
    development, AI, and teamwork. I am proficient in Rust and Python with a
    keen interest in learning more about Java, C, and Haskell. My technical
    expertise spans:
  </p>
  <ul class="list-disc pl-5 mb-4 text-gray-300">
    <li>Programming: Rust, C, Python</li>
    <li>Web Development: HTML, CSS, JavaScript, Tailwind CSS, Svelte</li>
    <li>Data Tools: NumPy, MySQL, Matplotlib, MongoDB</li>
    <li>DevOps: Git, Cloudflare, Docker</li>
    <li>Design: Figma, Inkspace, Krita</li>
  </ul>

  <hr class="mb-4 border-gray-700" />

  <h2 class="text-2xl font-semibold mb-2">Languages</h2>
  <p class="mb-4 text-gray-300">
    Fluent in French and proficient level in english.
  </p>

  <hr class="mb-4 border-gray-700" />

  <h2 class="text-2xl font-semibold mb-2">Interests</h2>
  <p class="mb-4 text-gray-300">
    My interests include mathematics, physics, artificial intelligence, game
    development, 3D rendering, and Taekwondo. I also enjoy participating in math
    competitions and developing innovative software projects.
  </p>
</main>
