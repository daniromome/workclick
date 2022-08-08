import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'wo-root',
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

  async initApp() {
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      this.zone.run(() => {
        const route = event.url.split('.me').pop();
        if (!route) return
        this.router.navigateByUrl(route, { skipLocationChange: true });
      })
    })
    GoogleAuth.initialize()
    try {
      await App.getInfo()
      this.router.navigate(['mobile'], { replaceUrl: true })
    } catch (error) {}
  }

  title = 'workclick';
}
