import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'se-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  fromCmp = 'wow?';
  constructor() { }

  ngOnInit(): void {
  }

}
