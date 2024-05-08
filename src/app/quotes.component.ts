import { Input, Component } from '@angular/core';

@Component({
    selector: 'quotes-comp',
    templateUrl: './quotes.component.html',
    styleUrls: ['./app.component.css']
})

export class QuotesComponent {
    @Input() quotes = [];
    
}