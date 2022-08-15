import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { App, BackButtonListenerEvent, URLOpenListenerEvent } from '@capacitor/app';
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
    App.addListener('backButton', () => {
      this.zone.run(async () => {
        if (this.router.url === '/mobile') await App.exitApp()
        else window.history.back()
      })
    })
    GoogleAuth.initialize({
      clientId: '414792500962-gerbmu2jo6kamtl5f26irohavcbka7ne.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
      grantOfflineAccess: true
    })
    try {
      await App.getInfo()
      this.router.navigate(['mobile'], { replaceUrl: true })
    } catch (error) {}
  }

  title = 'workclick';
}
