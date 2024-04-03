import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { NewsFormComponent } from '../news-form/news-form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ButtonPrimaryComponent, NewsFormComponent, FooterComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
