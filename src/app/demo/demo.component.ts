import { Component, OnInit } from '@angular/core';
import faker from '@faker-js/faker';
import { Image } from '@faker-js/faker/image';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  firstName: string = faker.name.firstName();
  lastName: string = faker.name.lastName();
  imageUrl: string = faker.image.avatar();

  output!: string;

  constructor() { }

  ngOnInit(): void {
  }

  generateImage() {
    this.imageUrl =  faker.image.avatar();
  }

  somefunction(event: Event) {
    console.log(event);
    let inputElement: EventTarget | null = event.target;

    this.output = (inputElement as HTMLInputElement).value;


  }
}
