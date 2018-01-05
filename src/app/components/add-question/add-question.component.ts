import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../question-list/question-list.component';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  @Output() questionAdded: EventEmitter<Question> = new EventEmitter<Question>();
  question: Question;
  text: string;
  answer: string;
  constructor() { }

  ngOnInit() {
    this.question = new Question();
  }

  onSubmit() {
    this.question.text = this.text;
    this.question.answer = this.answer;
    this.question.hidden = true;
    this.questionAdded.emit(this.question);
    this.text = '';
    this.answer = '';
  }
}
