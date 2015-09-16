/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    
    selector: 'my-app'
})


@View({
    
    template: '<h1>Hello {{name}}</h1>' 
})

class mainComponent {
    name: string;
    constructor() {
        this.name = 'This works Roo!';
    }
}

bootstrap(mainComponent);