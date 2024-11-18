import casino_dingo from "../assets/casino_dingo.webp";
import border_wars from "../assets/border-wars.webp";
import logo from "../assets/logo.svg";
import beats_into_shapes from "../assets/beats_into_shapes.webp";
import hexing from "../assets/hexing.webp";
import solipr from "../assets/solipr.webp";

export function fetchProjects() {
  const projects = [
    {
      title: "Solipr",
      description: "WIP: A rust-based version control system.",
      link: "https://github.com/solipr",
      link_img: solipr,
    },
    {
      title: "Hexing",
      description: "A basic Rust library to manipulate hexagonal grids.",
      link: "https://crates.io/crates/hexing",
      link_img: hexing,
    },
    {
      title: "Beats into shapes",
      description:
        "A rhythm game where you forge items from the very beginning of the process.",
      link: "https://github.com/CoCoSol007/beats-into-shapes",
      link_img: beats_into_shapes,
    },
    {
      title: "Border Wars",
      description:
        "Border Wars is a turn-based online strategy game made with rust and bevy.",
      link: "https://github.com/CoCoSol007/border-wars",
      link_img: border_wars,
    },
    {
      title: "Casino Dingo",
      description:
        "Casino Dingo is a 2D game developed using the Godot engine. ",
      link: "https://github.com/CoCoSol007/casino-dingo",
      link_img: casino_dingo,
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

export async function fetchArticles() {
  const articles = [
    {
      title: "Understanding 3D Rendering",
      subtitle: "An Overview of the Three Main Stages of Rendering",
      description:
        "Explore how a 3D renderer processes and generates images in three key steps.",
      date: "2024-10-29",
      path: "3d-rendering-overview",
      tags: ["3D Rendering", "Computer Graphics", "Tutorial"],
    },
    {
      title: "Hexing Library v0.3.0 Released",
      subtitle: "New Layout Features and Enhancements",
      description:
        "Discover the new features in Hexing v0.3.0, including advanced hexagonal grid management.",
      date: "2024-08-22",
      path: "hexing-v0-3-0",
      tags: ["Hexagonal Grids", "Rust", "Library Updates"],
    },
    {
      title: "Building Your Own 3D Renderer",
      subtitle: "A Mathematical Approach to 3D Rendering",
      description:
        "Learn how to create a 3D renderer from scratch using mathematical concepts.",
      date: "2024-08-14",
      path: "build-3d-renderer",
      tags: ["3D Rendering", "Math", "Programming", "Tutorial"],
    },
    {
      title: "Introduction to Hexing",
      subtitle: "A Rust Library for Hexagonal Grid Manipulation",
      description:
        "Learn about Hexing, a basic Rust library for working with hexagonal grids.",
      date: "2024-08-05",
      path: "hexing-introduction",
      tags: ["Hexagonal Grids", "Rust", "Open Source", "Library"],
    },
    {
      title: "Beats into Shapes: A New Game Project",
      subtitle: "A Rhythm Game with a Unique Forging Mechanic",
      description:
        "Introducing Beats into Shapes, a rhythm game where you forge items from raw materials.",
      date: "2024-04-22",
      path: "beats-into-shapes",
      tags: ["Game Development", "Rhythm Game", "Creative Projects"],
    },
    {
      title: "Introducing CoCoSol",
      subtitle: "A Passionate Young Developer",
      description:
        "Get to know CoCoSol, developer with a creative approach to coding.",
      date: "2024-04-19",
      path: "introduction",
      tags: ["Introduction", "Personal Blog"],
    },
  ];

  return articles;
}
