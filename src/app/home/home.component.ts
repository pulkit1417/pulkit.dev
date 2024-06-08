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

}
