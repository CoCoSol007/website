import acrcade from "../assets/arcade.png";
import simple3d from "../assets/renderer.png";
import casino_dingo from "../assets/casino_dingo.png";
import border_wars from "../assets/border-wars.png";
import planka from "../assets/planka.png";
import logo from "../assets/logo.svg";
import upkuma from "../assets/upkuma.svg";

export function fetchProjects() {
  const projects = [
    {
      title: "Border Wars",
      description:
        "Border Wars is a turn-based online strategy game made with rust and bevy.",
      link: "https://github.com/CoCoSol007/border-wars",
      link_img: border_wars,
    },
    {
      title: "Beats into shapes",
      description:
        "A rhythm game where you forge items from the very beginning of the process.",
      link: "https://edmondada.itch.io/beats-into-shapes",
      link_img: "beats_into_shapes.png",
    },
    {
      title: "Casino Dingo",
      description:
        "Casino Dingo is a 2D game developed using the Godot engine. ",
      link: "https://github.com/CoCoSol007/casino-dingo",
      link_img: casino_dingo,
    },
    {
      title: "Arcade Game",
      description:
        "Arcade is a litle retro game made with python and pygame. We made this game in 2021",
      link: "https://github.com/CoCoSol007/arcade",
      link_img: acrcade,
    },
    {
      title: "Simple 3D renderer",
      description:
        "It's a simple 3d rederer made in python with pygame and math",
      link: "https://github.com/CoCoSol007/simple-3D-renderer",
      link_img: simple3d,
    },
    {
      title: "My Website",
      description: "This is the code of the website you a curently looking",
      link: "https://github.com/CoCoSol007/my-website",
      link_img: logo,
    },
  ];
  return projects;
}

export function fetchServices() {
  const projects = [
    {
      title: "Uptime Kuma",
      description:
        "It is a self-hosted server monitoring tool. It can be configured to send alerts.",
      link: "https://up.cocosol.fr",
      link_img: upkuma,
    },
    {
      title: "Planka",
      description:
        "The realtime kanban board for workgroups built with React and Redux.",
      link: "https://todo.cocosol.fr",
      link_img: planka,
    },
  ];
  return projects;
}

export async function fetchArticles() {
  const articles = [
    {
      title: "New game project: Beats into shape",
      description:
        "A rhythm game where you forge items from the very beginning of the process.",
      date: "04/22/2024",
      content: `
      <div class="text-left">
          <h1 class="text-3xl font-bold mb-4 text-white">Welcome to our submission for Godot Wild Jam #68</h1>
          <p class="text-lg mb-6 text-white">This month's theme was Forge, inspiring us to create a rhythmic adventure where you craft items from start to finish. You can play our game <a href="https://edmondada.itch.io/beats-into-shapes" class="text-blue-500 hover:underline">here</a>.</p>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 justify-start">
          <h2 class="text-2xl font-bold col-span-full mb-4 text-white">Meet Our Team</h2>
          <div class="text-white">
              <h3 class="text-lg font-bold mb-1">Tipragot</h3>
              <p class="text-gray-300">Programmer</p>
          </div>
          <div class="text-white">
              <h3 class="text-lg font-bold mb-1">CoCo_sol</h3>
              <p class="text-gray-300">Programmer - Art</p>
          </div>
          <div class="text-white">
              <h3 class="text-lg font-bold mb-1">Edmond</h3>
              <p class="text-gray-300">Art</p>
          </div>
      </div>
  `,
      id: "1",
    },
    {
      title: "Introducing CoCoSol",
      description: "Get to know CoCoSol, a passionate young developer.",
      date: "04/19/2024",
      content: `
    <div class="mt-4 text-left">
        <h1 class="text-3xl font-bold mb-2 text-white">Hello World!</h1>
        <p class="text-lg mb-4 text-white">I'm CoCoSol, a 17-year-old French coder eager to learn. Passionate about development and math, I'm a student at Caousou in France, always up for new challenges.</p>
        <p class="text-lg text-white">To contact me or ask questions, email me at <a href="mailto:contact@cocosol.fr" class="text-blue-500 hover:underline">contact@cocosol.fr</a>.</p>
    </div>
`,
      id: "0",
    },
  ];

  return articles;
}
