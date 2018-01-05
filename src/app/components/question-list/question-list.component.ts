import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Question[];

  constructor() {
    this.questions = [
      {text : 'Whats ur name ?', answer : 'my name is adil', hidden: true},
      {text : 'Whats ur age ?', answer : 'i am 27',  hidden: true}
    ];
  }

  ngOnInit() {
  }

  addQuestion(question: Question) {
    this.questions.unshift(question);
  }

}

export class Question {
  text: string;
  answer: string;
  hidden: boolean;
}
