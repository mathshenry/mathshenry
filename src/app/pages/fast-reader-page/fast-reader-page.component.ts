import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-fast-reader-page',
  templateUrl: './fast-reader-page.component.html',
  styleUrls: ['./fast-reader-page.component.scss'],
})
export class FastReaderPageComponent {
  word = '';
  wordsPerMinute = 100;
  speed;
  text = '';
  textArray = [];
  millisInMinute = 60 * 1000;
  arrayIndex = 0;
  step = 25;
  intervalId;

  constructor() {}

  updateIntervalWordChange() {
    this.calculateSpeed();
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      if (this.arrayIndex < this.textArray.length) {
        this.word = this.textArray[this.arrayIndex++];
      } else {
        clearInterval(this.intervalId);
      }
    }, this.speed);
  }

  changeWordsPerMinute(positive) {
    if (!positive) {
      if (this.speed > this.step) {
        this.wordsPerMinute -= this.step;
      }
    } else {
      this.wordsPerMinute += this.step;
    }
    this.updateIntervalWordChange();
  }

  calculateSpeed() {
    this.speed = this.millisInMinute / this.wordsPerMinute;
  }

  changeText($event) {
    this.textArray = $event.target.value.split(' ');
    this.replay();
  }
  replay() {
    this.arrayIndex = 0;
    this.updateIntervalWordChange();
  }

  playPause(play) {
    if (play) {
      this.updateIntervalWordChange();
    } else {
      clearInterval(this.intervalId);
    }
  }
}
