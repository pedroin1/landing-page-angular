import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';

type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'button-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss'
})
export class ButtonPrimaryComponent {
  @Input("btnText") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary"
  @Output("submit") onSubmit =  new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
}
