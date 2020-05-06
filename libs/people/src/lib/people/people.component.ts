import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../models/person';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'se-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public people: Observable<Person[]>;
  constructor(private peopleService: PeopleService<Person>) { }

  ngOnInit(): void {
    this.people = this.peopleService.getItems().pipe(tap(r => console.log(r), shareReplay(1)));
  }

}
