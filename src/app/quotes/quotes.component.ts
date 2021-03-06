import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})


export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Seymour Cray', 'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.', 'Lucy Karimi', new Date),
    new Quote(2, 'Edward V Berard', 'Walking on water and developing software from a specification are easy if both are frozen. ', 'Ben Deenambo', new Date),
    new Quote(3, 'Doug Linder', ' A good programmer is someone who always looks both ways before crossing a one-way street.', 'Walter Ruto', new Date),
  ];

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  upVotes(index) {
    this.quotes[index].upvotes++;
  }
  downVotes(index) {
    this.quotes[index].downvotes++;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].state}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
