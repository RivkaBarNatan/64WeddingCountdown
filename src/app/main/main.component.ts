import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BrochesComponent } from '../broches/broches.component';

interface chess {
  number: number;
  color: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  bsModalRef: BsModalRef = new BsModalRef;
  array: Array<number> = new Array<number>(4);
  // yourDate = new Date("2021/6/22 17:30:00");
  yourDate = new Date("2021/6/22 17:30:00");
  days: number = 0;
  weeks: string = '';
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  firstArray: Array<chess> = new Array<chess>();
  secondArray: Array<chess>=new Array<chess>();

  constructor(private modalService: BsModalService) {
    for (let i = 1, j = 1; i <= 8; i++) {
      this.firstArray.push(
        {
          number: i,
          color: (j%2? (i%2? 'white': 'black'): (i%2? 'black': 'white'))
        });
      
      this.secondArray.push(
        {
          number: i+8,
          color: (j%2? (i%2? 'black': 'white'): (i%2? 'white': 'black'))
        }
      )
      if(!(i%8))
        j++;
    }


    this.array[1] = 1;
    this.array[2] = 2;
    this.array[1] = 3;
    this.array[2] = 4;
    setInterval(() => {
      var currentTime = new Date();
      var diff = this.yourDate.getTime() - currentTime.getTime();
      this.days = Math.floor(diff / (60 * 60 * 24 * 1000));
      this.weeks = (this.days / 7).toLocaleString(undefined, { maximumSignificantDigits: 3 });
      this.hours = (Math.floor(diff / (60 * 60 * 1000)) - (this.days * 24));
      this.minutes = Math.floor(diff / (60 * 1000)) - ((this.days * 24 * 60) + (this.hours * 60));
      this.seconds = Math.floor(diff / 1000) - ((this.days * 24 * 60 * 60) + (this.hours * 60 * 60) + (this.minutes * 60));
    }, 1);
  }

  ngOnInit(): void {
  }


  open() {
    const initialState = {
      title: this.days
    };
    this.bsModalRef = this.modalService.show(BrochesComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
