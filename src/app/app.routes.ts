import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PartnersComponent } from './partners/partners.component';
import { GoalsComponent } from './goals/goals.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'skills',component:SkillsComponent},
    {path:'partners',component:PartnersComponent},
    {path:'goals',component:GoalsComponent},
    {path:'contact',component:ContactComponent},
    {path:'works',component:WorksComponent}
]
