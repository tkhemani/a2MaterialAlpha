import {Component} from 'angular2/core';
import {PortalHostDirective} from '../../core/portal/portal-directives';
import {TemplatePortalDirective} from '../../core/portal/portal-directives';
import {Portal} from '../../core/portal/portal';
import {ViewChildren} from 'angular2/core';
import {QueryList} from 'angular2/core';
import {ComponentPortal} from '../../core/portal/portal';

@Component({
  selector: 'portal-demo',
  templateUrl: 'demo-app/portal/portal-demo.html',
  styleUrls: ['demo-app/portal/portal-demo.css'],
  directives: [TemplatePortalDirective, PortalHostDirective]
})
export class PortalDemo {
  @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;

  selectedPortal: Portal<any>;

  constructor() {
    console.log('~~ contructor ~~');
  }

  get programmingJoke() {
    return this.templatePortals.first;
  }

  get mathJoke() {
    return this.templatePortals.last;
  }

  get scienceJoke() {
    return new ComponentPortal(ScienceJoke);
  }
}


@Component({
  selector: 'science-joke',
  template: `<p> 100 kilopascals go into a bar. </p>`
})
class ScienceJoke { }
