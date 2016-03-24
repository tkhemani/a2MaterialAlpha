import {bootstrap} from 'angular2/platform/browser';
import {Hello} from './hello-app/hello-app';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(Hello, [
  ROUTER_PROVIDERS
]);
