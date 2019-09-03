import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: 'tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  usersData = [
    {
      name: 'Stefan',
      surname: 'Stefanovic',
      city: 'Novi Sad',
      phone: '063641374',
      training: 14
    },
    {
      name: 'Marko',
      surname: 'Markovic',
      city: 'Novi Sad',
      phone: '0632423454',
      training: 10
    },
    {
      name: 'Jelena',
      surname: 'Jelenovic',
      city: 'Novi Sad',
      phone: '063234534',
      training: 1
    }
  ];

  constructor() {}

  ngOnInit() {}

  edit() {
    console.log('eidt !');
  }

}
