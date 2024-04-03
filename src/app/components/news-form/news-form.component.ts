import { Component, signal } from '@angular/core';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'news-form',
  standalone: true,
  imports: [ButtonPrimaryComponent, ReactiveFormsModule],
  providers: [NewsletterService],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss'
})
export class NewsFormComponent {

  //criando formulario com a lib de ReactiveForms
  // Grupo de formulario é um junção de diversos inputs do formulario
  // consigo controlar cada input utilizando o formControl
  newsLetterForm: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService){
    //defininado qual serao os campos(inputs) do meu formulario
    //utilizando o validators para validar os campos
    this.newsLetterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmitForm(){
    this.loading.set(true);

    if(this.newsLetterForm.valid){
      this.service.sendData(
        this.newsLetterForm.value.name,
        this.newsLetterForm.value.email,
      ).subscribe({
        next: () => {
          this.newsLetterForm.reset(),
          this.loading.set(false)
        }
      })
    }
  }
}
