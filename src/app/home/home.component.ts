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
        image: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZi2CkDdwIZi7w_9awU9TrSqfXgo9cREpkZrTTVYT0YLv5EQ0wGFe-qoq6HhVpgM3Wj5PoP20t9sEeQioY0UuBTts2cbV6o80s=w1920-h937-rw-v1",
        name:"Ecommerce Project",
    },
    {
        id:2,
        image: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaGW_hO11bjexR8mUyQs8Ou_sziHZPFXeITbOeZVI23QXMSRvYTOpV3IEAqSZa3OoqNAQ0CxMhq3IYH0jNBILGaOK8nfTV8iQ=w1920-h937-rw-v1",
        name:"Personal Portfolio",
    },
    {
        id:3,
        image: "https://lh3.googleusercontent.com/fife/ALs6j_FIqFJFKVA3yL7_it98y86IPQP0_A6PM5RpLd3PGaTlD-9jz91GTZvn0gaewA4JtHrVYPw08irnKJmOgv23nWM7QRfNPO1tnW1mWHuyEWAVMBTsts451rOW8U8Tb4-SZpQaqIdcQkFqWZFPFPMcAMtOMNCEyvQOy4DLeyCUkkUSJ9_vqzNpbLAEQ2EABJdGrVJEXjybsXgmY-cHcaPQgnSQn3E-F9H1j32l0cs5mV8tnuSxIGU4kPt39Te8LhurEhu-WjNssbcCDO7-73UPZ4MA1QMVMYbQNZ2vFi8UDV1wiKv8xsnQvm1PjFImHyOpAIbD6LoV66j6ImUVclziOI-a4q45FwRMpC_CAvmt5JcDiVfKKNkTuz5FRDQS5ViPCXYo2hTkPb78a41IbYo3EIAB5QgC9X5RG_BEoerP91Qx53coQbL3J61nLwQ4teqh3K68DuDeHLpK7AAZOQG92s5xldT75a8WemrcbAgMbAYP4De1zmuv578yn7Re0NDnr6AD98kZucKk8xtonO6VwjfT7bshvpQmJwtJQmdUwjW0iQ8cVoLJ6KCz31DkFAA7Aq2uYpwUrTcxC8fJGkvVlrACene0vnh8cyHAt2okeP_hrDuHcrSALnO-C7mm1h8SueaCaOYdbTdNMeRtnxQZ11GcE06s-SvHAhLUDkoEk94Fw_GnVvCMEi4G-NWsFBGDPwJ39rducf0daHlQUBqG0ekoZgy44PQeiUBczfcySHtVnvbLBG-xdFzoQ_Ti-sCtdNXVv70rEnwWtBtnekJuV69RJn7zkK2i1NjG6-HcbXWpZo8X9uG6D98Hi2evkKVoWFilYpHsWxq-ECtlnGZezwaYFkN5XF6TWfx0H0WLnne4w3F5gSPvtu8Pp2BcokSwqCk7XebSqY3MWmK6jGDnvHzaPRXyYUzanXhFqfs_uczP6EUMtReDlnP3RBpgq7jmjVCRaF5s=w1920-h937-rw-v1",
        name:"To-Do List",
    },
    {
        id:4,
        image: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbvOvI0hHPWHgCdmZwZIiGubnhUm7gsSVyD_0uqRFQLp-DgQC87gtmk8b4Mnyv9my4wxEaP9609U1JtMVEooApP0Mn3uVe4Vak=w1920-h937-rw-v1",
        name:"Tic Tac Toe!",
    },
]

}
