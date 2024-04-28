<script>
import arrow from "../../../assets/arrow.svg";

let futureProjects = [
    {
        name: "Simple Minecraft plugin",
        description: "Create a simple plugin for Minecraft to understand game development and learn JavaScript.",
        difficulty: "easy",
        done: false
    },
    {
        name: "Learn blender",
        description: "Learn to use Blender for 3D modeling and animation, thereby expanding my skills in the field of graphic design.",
        difficulty: "medium",
        done: false,
    },
    {
        name: "Create my own compiled programming language",
        description: "Create my own compiled programming language to deepen my understanding of compilation concepts and language design.",
        difficulty: "hard",
        done: false
    },
    {
        name: "10 interpreters in 10 languages",
        description: "Implement 10 interpreters in 10 different programming languages to explore the differences between languages and improve my understanding of programming languages.",
        difficulty: "medium",
        done: false,
    },
    {
        name: "Improve my 3D python renderer",
        description: "Improve my 3D rendering engine in Python to deepen my knowledge of computer graphics and performance optimization.",
        difficulty: "easy",
        done: false,
    },
    {
        name: "Build a basic operating system kernel from scratch",
        description: "Build a basic operating system kernel from scratch to explore the fundamental concepts of operating systems and hardware operation.",
        difficulty: "hard",
        done: false,
    }
];


</script>

<div class="container mx-auto max-w-6xl p-8">
  <div class="flex flex-row md:items-start gap-2">
      <a href="/blog" class="md:self-start">
          <img src={arrow} alt="Back to Blog" class="w-full h-full hover:scale-125 transition">
      </a>
      <h1 class="text-5xl font-bold text-gray-100">My Future Projects</h1>
  </div>
  <p class="text-xl text-gray-300">A non-exhaustive list of my future projects.</p>

  <div class="mt-8 text-gray-300">
      <h2 class="text-2xl font-bold mb-4">Future Projects:</h2>
      <ul class="space-y-4">
          {#each futureProjects as project}
          <li class="border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-200">{project.name}</h3>
                  <p class="text-gray-300 mt-2">{project.description}</p>
                  {#if project.done}
                  <a href={project.link} class="text-blue-500 mt-2 block hover:underline">View Completed Project</a>
                  {:else}
                  <p class="text-gray-400 mt-2">This project has not been completed yet.</p>
                  {/if}
                  <span class="inline-block rounded-xl px-3 py-1 text-sm font-semibold mr-2 mt-2 {project.difficulty === 'easy' ? 'bg-yellow-500' : project.difficulty === 'medium' ? 'bg-blue-500' : 'bg-red-500'}">{project.difficulty}</span>
              </div>
          </li>
          {/each}
      </ul>
  </div>
</div>

