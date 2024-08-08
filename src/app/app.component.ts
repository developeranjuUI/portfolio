import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personal-portfolio';

  constructor(private router:Router, private viewportScroller:ViewportScroller){}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.smoothScrollToTop();
      }
    })
  }

  smoothScrollToTop() {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 10000); // Adjust 50 for smoother or faster scrolling
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 25); // Adjust 16 for timing (higher value = slower scroll)
  }
}
