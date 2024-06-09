import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'skills',component:SkillsComponent},
    {path:'exp',component:ExperienceComponent},
    {path:'contact',component:ContactComponent},
    {path:'works',component:WorksComponent}
]
