import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { SkillComponent } from '../skill/skill.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonComponent, 
    HeaderComponent, 
    AboutComponent,
    SkillComponent,
    ProjectComponent, 
    ContactComponent, 
    FooterComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
