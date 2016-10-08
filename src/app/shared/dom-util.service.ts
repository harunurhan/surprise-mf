import { Injectable } from '@angular/core';

@Injectable()
export class DomUtilService {
  
  addClass(el: HTMLElement, className: string) {
    if (el.className && (el.className === className || el.className.indexOf(className) >= 0)) {
      return;
    }
    
    if (!el.className || el.className === '') {
      el.className = className;
    } else {
      el.className += ' ' + className;
    }
  }

  removeClass(el: HTMLElement, className: string) {
    el.className = el.className.replace(new RegExp(` ?\\b${className}\\b`),'');
  }
}