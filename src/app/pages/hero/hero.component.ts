import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('typedText') typedTextElement!: ElementRef;

  ngAfterViewInit() {
    const typedText = this.typedTextElement.nativeElement;
    const text = 'Welcome to our website. Discover amazing things with us.';
    let charIndex = 0;

    function type() {
      if (charIndex < text.length) {
        typedText.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust the typing speed as needed
      }
    }

    type();
  }
}
