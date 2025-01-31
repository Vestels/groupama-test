import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appEnterPress]',
  standalone: false
})
export class EnterPressDirective {

  constructor() { }

  @HostListener('keydown.enter', ['$event'])
  onEnterPress(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;

    target.click();
    event.preventDefault();
  }
}
