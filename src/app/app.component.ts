// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

// Экспортируется класс компонента AppComponent, в котором определяется модель name.
export class AppComponent {
    newQuote:string;
	newRef:string;
    block:string = "0";
    Quotes = ["«Patience is a key element of success»", "«If you think your teacher is tough, wait till you get a boss»", "«Life is not fair — get used to it! »", "«Success is a lousy teacher. It seduces smart people into thinking they can’t lose»", "«Be nice to nerds. Chances are you’ll end up working for one»"];
    Refs = ["https://en.wikipedia.org/wiki/Bill_Gates", "https://www.gatesfoundation.org/", "https://www.gatesnotes.com/", "https://twitter.com/billgates"];
    addRef(r:string){
        this.Refs.push(r);
    }
    addQuote(q:string){
        this.Quotes.push(q);
    }
    bioClick(){
        this.block = "1";
    }
    quoteClick(){
        this.block = "2";
    }
    refClick(){
        this.block = "3";
    }
    mainClick(){
        this.block = "0";
    }
}