// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase: {
    apiKey: 'AIzaSyA6fKrhz9U-b6T-RtUCo3JxA3PsrMG24DI',
    authDomain: 'genericviewer-aeee9.firebaseapp.com',
    databaseURL: 'https://genericviewer-aeee9.firebaseio.com',
    projectId: 'genericviewer-aeee9',
    storageBucket: 'genericviewer-aeee9.appspot.com',
    messagingSenderId: '69297115546'
  }
};
