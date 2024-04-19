import acrcade from "../assets/arcade.png"
import simple3d from "../assets/renderer.png"
import casino_dingo from "../assets/casino_dingo.png"
import border_wars from "../assets/border-wars.png"
import planka from "../assets/planka.png"
import logo from "../assets/logo.svg"
import upkuma from "../assets/upkuma.svg"

export function fetchProjects() {
    const projects = [

        {
            "title": "Border Wars",
            "description": "Border Wars is a turn-based online strategy game made with rust and bevy.",
            "link": "https://github.com/CoCoSol007/border-wars",
            "link_img": border_wars
        },
        {
            "title": "Casino Dingo",
            "description": "Casino Dingo is a 2D game developed using the Godot engine. ",
            "link": "https://github.com/CoCoSol007/casino-dingo",
            "link_img": casino_dingo
        },
        {
            "title": "Arcade Game",
            "description": "Arcade is a litle retro game made with python and pygame. We made this game in 2021",
            "link": "https://github.com/CoCoSol007/arcade",
            "link_img": acrcade
        },
        {
            "title": "Simple 3D renderer",
            "description": "It's a simple 3d rederer made in python with pygame and math",
            "link": "https://github.com/CoCoSol007/simple-3D-renderer",
            "link_img": simple3d
        },
        {
            "title": "My Website",
            "description": "This is the code of the website you a curently looking",
            "link": "https://github.com/CoCoSol007/my-website",
            "link_img": logo
        },

    ]
    return projects
}

export function fetchServices() {
    const projects = [

        {
            "title": "Uptime Kuma",
            "description": "It is a self-hosted server monitoring tool. It can be configured to send alerts.",
            "link": "https://up.cocosol.fr",
            "link_img": upkuma
        },
        {
            "title": "Planka",
            "description": "The realtime kanban board for workgroups built with React and Redux.",
            "link": "https://todo.cocosol.fr",
            "link_img": planka
        }

    ]
    return projects
}

export async function fetchArticles() {
    const articles = [
        {
            title: "Introducing CoCoSol",
            description: "Get to know CoCoSol, a passionate young developer.",
            date: "04/19/2024",
            content: "Hello World !\n\nMy name is CoCoSol and I am a 17-year-old French coder with a strong desire to learn. Although I do not have much experience, I am passionate about development and math. Currently, I am a student at Caousou in France and I am always seeking new challenges.\n\nTo contact me or ask any questions, please email me at contact@cocosol.fr.\n\nPS: I love rust and I hate python and javascript.",
            isActive: true // By default, the article is not expanded
        }
        
    ];

    return articles;
}