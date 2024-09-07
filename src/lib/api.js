import simple3d from "../assets/renderer.webp";
import casino_dingo from "../assets/casino_dingo.webp";
import border_wars from "../assets/border-wars.webp";
import logo from "../assets/logo.svg";
import beats_into_shapes from "../assets/beats_into_shapes.webp";
import hexing from "../assets/hexing.webp";

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
      link: "https://github.com/CoCoSol007/beats-into-shapes",
      link_img: beats_into_shapes,
    },
    {
      title: "Hexing",
      description:
        "A basic Rust library to manipulate hexagonal grids.",
      link: "https://crates.io/crates/hexing",
      link_img: hexing,
    },
    {
      title: "Casino Dingo",
      description:
        "Casino Dingo is a 2D game developed using the Godot engine. ",
      link: "https://github.com/CoCoSol007/casino-dingo",
      link_img: casino_dingo,
    },
    {
      title: "3DViewPy",
      description:
        "It's a simple 3D rederer made in python with pygame and math",
      link: "https://github.com/CoCoSol007/3DViewPy",
      link_img: simple3d,
    },
    {
      title: "My Website",
      description: "This is the code of the website you a curently looking",
      link: "https://github.com/CoCoSol007/my-website",
      link_img: logo,
    },
  ];

  // Shuffle projects
  return projects.sort(() => Math.random() - 0.5);
}

export async function fetchArticles() {
  const articles = [
    {
      title: "Hexing Release v0.3.0 - Layout Feature & More",
      description: "Announcing the release of Hexing Library v0.3.0 with advanced hexagonal grid management features.",
      date: "22/08/2024",
      path: "hexing_v0_3_0",
    },
    {
      title: "My own 3D renderer",
      description: "How to make your own 3D renderer just with math?",
      date: "14/08/2024",
      path: "renderer",
    },
    {
      title: "Hexing",
      description: "A basic Rust library to manipulate hexagonal grids.",
      date: "05/08/2024",
      path: "hexing",
    },
    {
      title: "To-Do List",
      description: "A non-exhaustive To-Do List.",
      date: "22/07/2024",
      path: "to-do-list",
    },
    {
      title: "New game project: Beats into shape",
      description:
        "A rhythm game where you forge items from the very beginning of the process.",
      date: "04/22/2024",
      path: "beats-into-shapes",
    },
    {
      title: "Introducing CoCoSol",
      description: "Get to know CoCoSol, a passionate young developer.",
      date: "04/19/2024",
      path: "introduction",
    },
  ];

  return articles;
}
