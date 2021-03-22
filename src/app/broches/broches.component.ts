import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-broches',
  templateUrl: './broches.component.html',
  styleUrls: ['./broches.component.scss']
})
export class BrochesComponent implements OnInit {

  title: number = 0;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
}
