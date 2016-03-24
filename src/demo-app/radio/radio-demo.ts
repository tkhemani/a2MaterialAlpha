import {Component} from 'angular2/core';
import {MdRadioButton, MdRadioGroup} from '../../components/radio/radio_button';
import {MdRadioDispatcher} from '../../components/radio/radio_dispatcher';

@Component({
  selector: 'radio-demo',
  templateUrl: 'demo-app/radio/radio-demo.html',
  styleUrls: ['demo-app/radio/radio-demo.css'],
  providers: [MdRadioDispatcher],
  directives: [MdRadioButton, MdRadioGroup]
})
export class RadioDemo {
  isDisabled: boolean = false;
}
