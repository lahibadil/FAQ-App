import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question-list/question-list.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input('question') question: Question;

  constructor() { }

  ngOnInit() {
  }

}
