import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeaderComponent, NgxTypedJsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  projects = [
    {
      id: 1,
      image:
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZi2CkDdwIZi7w_9awU9TrSqfXgo9cREpkZrTTVYT0YLv5EQ0wGFe-qoq6HhVpgM3Wj5PoP20t9sEeQioY0UuBTts2cbV6o80s=w1920-h937-rw-v1',
      name: 'Ecommerce Project',
    },
    {
      id: 2,
      image:
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaGW_hO11bjexR8mUyQs8Ou_sziHZPFXeITbOeZVI23QXMSRvYTOpV3IEAqSZa3OoqNAQ0CxMhq3IYH0jNBILGaOK8nfTV8iQ=w1920-h937-rw-v1',
      name: 'Personal Portfolio',
    },
    {
      id: 5,
      image:
        'https://lh3.googleusercontent.com/fife/ALs6j_EXIO29G35KRkSJ_vZ7v6s5L5XHV5BWlsdUjABgknjNc7yjh3LMuqZy2_oclarQ2ArK1fU1DmWj0NF9Xaf_S678JV5D1Kv5Mgck41mIutzWPralzDRFg7lApASm9lT3imhznS9SrslNUE-oVKurVRSV166G00BTJ-ei2OzoRjF_SLYbs-Dn6JAgvont64ygrpt4D1QCu_VMZy-XxfDdDwCuZNtt8FjsNsJYfI-Uvc8GpQoP3urPpA_IPBwiGWE432rCbC5QZkpjJAGNyYmSCaZR_bo_JfyART0U_FvUk3sEA38QX_g9GeD-7Xbw_3cxoaPYzjkKlEgMDA-KgyBQZfSo3U6d9U3h0J2uwyNc_FXjd-ul4NRrmqnLu5d2apXwTczrCvr7OgoXqSwDbKeCIjLA0vUnNbzUB8iwNcS2ckoMflN1CSbWc6VZUhsKxvEOcdSm9KfXjlO9RFNIPiZbUE6Wja0axf_9x_5mtcd9fJSAU2fzRnJfg-NFOqDeuzBoht34Pk5HZQIlLNJ2AvMd1EYU9X_ghPYHDIwGFhHypfMKn83UOTSffvbSWqlchOWy8SJ-fXY_bvy2Qag8N4OjnqVr8BpzXvvLQ9ZEyibE7DwvJVddibp-vp1IPgz2OkPbEjHHazCzvQCdvWSesi-I8iE7NACDat6obUU7Fs5RHIDOwn1w3cfI8JuOVam7coBiu9i6WAA0Maff0lr-Dk11lwsxnJb_0pL_JjhjilMam1Hl88p5GN0P5uSDiHjT3GuSOkqdzwHjK5kZQDj94nrE67YbW-HslPOTAxiTebNEG2ayhs2JA9RsEeObT-p3egPMBnz-7d44lMXBG8bEni8pSFMwHelhk8YlYYkKDFpxKGRGWuVW0by5dOC3xBQ7z-Unjs0TXb9z-6erlrE4H0BaqkgcnTPARodBSaLmZsrh5HadJlBH23V5zmnvfKxQNAIRSM-sdv37=w1920-h937-rw-v1',
      name: 'To-Do List',
    },
    {
      id: 6,
      image:
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbvOvI0hHPWHgCdmZwZIiGubnhUm7gsSVyD_0uqRFQLp-DgQC87gtmk8b4Mnyv9my4wxEaP9609U1JtMVEooApP0Mn3uVe4Vak=w1920-h937-rw-v1',
      name: 'Tic Tac Toe!',
    },
  ];
}
