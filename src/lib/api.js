import simple3d from "../assets/renderer.webp";
import casino_dingo from "../assets/casino_dingo.webp";
import border_wars from "../assets/border-wars.webp";
import planka from "../assets/planka.webp";
import logo from "../assets/logo.svg";
import upkuma from "../assets/upkuma.svg";
import beats_into_shapes from "../assets/beats_into_shapes.webp";

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
      title: "Casino Dingo",
      description:
        "Casino Dingo is a 2D game developed using the Godot engine. ",
      link: "https://github.com/CoCoSol007/casino-dingo",
      link_img: casino_dingo,
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
      title: "Future projects",
      description: "A non-exhaustive list of my future projects.",
      date: "04/28/2024",
      path: "future-projects",
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
