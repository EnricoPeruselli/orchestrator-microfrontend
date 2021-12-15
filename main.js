import {
  start,
  registerApplication
} from 'single-spa';

const apps = [
  {
    name: 'calendar',
    app: () => System.import('calendar'),
    activeWhen: location => location.pathname.startsWith('/')
  },
  {
    name: 'card',
    app: () => System.import('card'),
    activeWhen: location => location.pathname.startsWith('/')
  }
]

Promise.all([
  System.import('pubsub-js'),
  System.import('snackbar')
]).then(() => {
  apps.forEach(app =>  registerApplication(app) );
  start();
});