import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { App, URLOpenListenerEvent } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private zone: NgZone
  ) {
    this.initApp()
  }

  initApp() {
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      this.zone.run(() => {
        const route = event.url.split('.me').pop();
        if (!route) return
        this.router.navigateByUrl(route);
      })
    })
  }

  title = 'workclick';
}
