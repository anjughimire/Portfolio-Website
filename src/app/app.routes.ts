import { Routes } from '@angular/router';
import { HomeComponent } from './portfolio-website/home/home.component';
import { AboutComponent } from './portfolio-website/about/about.component';
import { SkillComponent } from './portfolio-website/skill/skill.component';
import { ContactComponent } from './portfolio-website/contact/contact.component';
import { FooterComponent } from './portfolio-website/footer/footer.component';
import { HeaderComponent } from './portfolio-website/header/header.component';
import { ProjectComponent } from './portfolio-website/project/project.component';

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'home',
        redirectTo : 'home',
        pathMatch : 'full'
    },
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : 'header',
        component : HeaderComponent
    },
    {
        path : 'about',
        component : AboutComponent
    },
    {
        path : 'skill',
        component : SkillComponent
    },
    {
        path : 'project',
        component : ProjectComponent
    },
    {
        path : 'contact',
        component : ContactComponent
    },
    {
        path : 'footer',
        component : FooterComponent
    }
];
