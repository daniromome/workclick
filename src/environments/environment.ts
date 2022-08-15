// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'workclick',
    appId: '1:414792500962:web:484eb4ebcee36439b540bb',
    storageBucket: 'workclick.appspot.com',
    apiKey: 'AIzaSyDVO6JPK20xpX-w-GJz8CxHI-j8uqNavpU',
    authDomain: 'workclick.firebaseapp.com',
    messagingSenderId: '414792500962',
  },
  defaultDataServiceConfig: {
    root: 'http://localhost:3000/api',
    timeout: 3000
  },
  typesense: '7lu0XbnQ6Ctesfa4G2QM6YGmDGL0YQZh',
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
