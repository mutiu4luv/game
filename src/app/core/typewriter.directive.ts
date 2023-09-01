// repeating typewriter

// import { Directive, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';

// @Directive({
//   selector: '[appTypewriter]',
// })
// export class TypewriterDirective implements AfterViewInit, OnDestroy {
//   private intervalId: any;
//   private originalText: string = '';
//   constructor(private el: ElementRef) {}

//   ngAfterViewInit(): void {
//     this.originalText = this.el.nativeElement.textContent;
//     this.el.nativeElement.textContent = '';

//     this.startTyping();
//   }

//   startTyping() {
//     let index = 0;

//     this.intervalId = setInterval(() => {
//       if (index < this.originalText.length) {
//         this.el.nativeElement.textContent += this.originalText[index];
//         index++;
//       } else {
//         this.el.nativeElement.textContent = '';
//         index = 0;
//       }
//     }, 100);
//   }

//   ngOnDestroy(): void {
//     clearInterval(this.intervalId);
//   }
// }

///   if you want the typewriter to write once and stop

import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appTypewriter]',
})
export class TypewriterDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const text = this.el.nativeElement.textContent;
    this.el.nativeElement.textContent = '';

    this.typeText(text);
  }

  typeText(text: string) {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        this.el.nativeElement.textContent += text[index];
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
  }
}
