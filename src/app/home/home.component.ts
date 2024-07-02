import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import {NgxTypedJsModule} from 'ngx-typed-js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,HeaderComponent,NgxTypedJsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  projects = [
    {
        id:1,
        image: "assets/images/KickVault.png",
        name:"KickVault",
    },
    {
        id:2,
        image: "assets/images/portfolio.png",
        name:"Personal Portfolio",
    },
    {
        id:3,
        image: "assets/images/crud-app.png",
        name:"Crud-App",
    }
]

}
