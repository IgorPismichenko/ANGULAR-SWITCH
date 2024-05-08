import { Input, Component } from '@angular/core';

@Component({
    selector: 'ref-comp',
    templateUrl: './ref.component.html',
    styleUrls: ['./app.component.css']
})

export class RefComponent {
    @Input() refs = [];
}