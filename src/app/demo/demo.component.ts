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
  constructor() { }

  ngOnInit(): void {
  }

  generateImage() {
    this.imageUrl =  faker.image.avatar();
  }
}
