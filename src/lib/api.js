import casino_dingo from "../assets/casino_dingo.webp";
import border_wars from "../assets/border-wars.webp";
import beats_into_shapes from "../assets/beats_into_shapes.webp";
import hexing from "../assets/hexing.webp";
import solipr from "../assets/solipr.webp";
import hyper from "../assets/hyper.svg";

export function fetchProjects() {
  const projects = [
    {
      title: "Hyper",
      description: "A Non-Euclidean Rendering Engine",
      link: "https://github.com/cocosol007/hyper",
      link_img: hyper,
    },
    {
      title: "Solipr",
      description: "Project left: A rust-based version control system.",
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
  ];

  return projects;
}

export async function fetchArticles() {
  const articles = [
    {
      title: "Greater than infinity?",
      tags: [
        "Math", "Set theory", "Infinity"
      ],
      subtitle: "Exploring Infinite Sets and Their Paradoxes",
      description: "An in-depth exploration of infinity through bijections, Hilbert’s Hotel, and Cantor’s diagonal argument, revealing the counter-intuitive nature of infinite sets.",
      path: "greater-than-infinity",
      date: "2025-04-01"
    },
    {
      title: "Structured and intuitive introduction to Zermelo-Fraenkel set theory.",
      tags: [
        "Zermelo-Fraenkel", "set theory", "mathematics", "axioms"
      ],
      subtitle: "A Deep Dive into the Axioms That Reshape Modern Mathematics",
      description: "Explore the key axioms of Zermelo-Fraenkel set theory (ZF) and how they form the foundation of modern mathematics, addressing paradoxes and reshaping mathematical logic.",
      path: "understanding-zermelo-fraenkel-set-theory-intuitive-approach",
      date: "2025-02-02"
    },
    {
      title: "The Algorithms That Shape Our Lives",
      tags: [
        "Recommendation Algorithms",
        "Artificial Intelligence",
        "Algorithmic Radicalization"
      ],
      subtitle: "How algorithms shape our preferences, relationships, and beliefs",
      description: "This article explains how recommendation algorithms work, the technologies behind them, and their limitations.",
      path: "recommendation-algorithms",
      date: "2024-12-14"      
    },
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
