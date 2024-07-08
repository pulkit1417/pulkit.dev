import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-works',
    standalone: true,
    templateUrl: './works.component.html',
    styleUrl: './works.component.css',
    imports: [HeaderComponent]
})
export class WorksComponent {
    projects = [
        {
            id:1,
            image: "assets/images/KickVault.png",
            name:"KickVault",
            description: "KickVault is a user-friendly e-commerce platform built with Angular 17, offering high performance, scalability, and a responsive design for both desktop and mobile devices.",
            link: "https://kick-vault.vercel.app/",
        },
        {
            id:2,
            image: "assets/images/portfolio.png",
            name:"Personal Portfolio",
            description: "Portfolio website made with Angular - showcases web development journey, technical mastery blended with creative expression through HTML, CSS.",
            link: "https://my-portfolio-omega-black-99.vercel.app/",
        },{
            id:3,
            image: "assets/images/calculator.png",
            name: "Caculator",
            description:"This is a simple web-based calculator built using HTML, CSS, and JavaScript. It provides basic arithmetic operations like addition, subtraction, multiplication, and division. ",
            link:"https://calculator-seven-beige-68.vercel.app/",

        },
        {
            id:4,
            image: "assets/images/choose-color.png",
            name: "Choose-Color",
            description:"A simple, interactive web application built with Angular that allows users to dynamically change the background color of the page using a color picker",
            link:"https://choose-color.vercel.app/",
        },
        {
            id:5,
            image: "assets/images/todo.png",
            name:"To-Do List",
            description: "A minimalistic Todo List app built with HTML, CSS, and JavaScript, featuring task addition, completion marking, and deletion capabilities.",
            link: "https://to-do-nu-tan.vercel.app/",
        },
        {
            id:6,
            image: "assets/images/tic-tac-toe.png",
            name:"Tic Tac Toe!",
            description: "Tic Tac Toe game - HTML, CSS, JavaScript. Simple yet interactive, delightful web experience.",
            link: "https://pulkit1417.github.io/Tic-Tac-Toe/",
        },
    ]
}
