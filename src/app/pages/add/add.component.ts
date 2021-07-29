import { Component, OnInit } from '@angular/core';
import { PruebasService } from '../../services/pruebas.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public pruebasService:PruebasService) { }

  ngOnInit(): void {
  }

}
