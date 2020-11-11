import { Component, OnInit } from '@angular/core';

class Persona {
  name: string;
  surname: string;
  age: number;
}
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  public name: string;
  public surname: string;
  public age: number;
  constructor() {}

  ngOnInit(): void {}

  setDataToPerson() {
    const newPerson: Persona = new Persona();
    newPerson.name = this.name;
    newPerson.surname = this.surname;
    newPerson.age = this.age;
    console.log('NewPerson', newPerson);
  }
}
