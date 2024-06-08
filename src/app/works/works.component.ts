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

}
