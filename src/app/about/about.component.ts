import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  openResume() {
    const pdfUrl = 'assets/Resume.pdf';
    window.open(pdfUrl, '_blank');
  }
}
