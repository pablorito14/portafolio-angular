import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio:number = new Date().getFullYear();
  email_contacto:string = 'pablorito14@gmail.com';

  constructor() { }

  ngOnInit(): void {
  }

}
