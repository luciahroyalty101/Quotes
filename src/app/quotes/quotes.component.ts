import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Seymour Cray','The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.','Lucy Karimi',new Date ),
    new Quote(2,'Edward V Berard','Walking on water and developing software from a specification are easy if both are frozen. ','Ben Deenambo',new Date ),
    new Quote(3,'Doug Linder',' A good programmer is someone who always looks both ways before crossing a one-way street.','Walter Ruto',new Date),
  ];
  constructor() { }
  
  ngOnInit(): void {
  }

}
