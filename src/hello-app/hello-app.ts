import { Component, OnInit } from 'angular2/core';
import {MdButton, MdAnchor} from '../components/button/button';

@Component({
    selector: 'hello',
    templateUrl: 'hello-app/hello-app.html',
    directives: [MdButton, MdAnchor]
})
export class Hello implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}