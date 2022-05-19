import { Component, Input, OnInit } from '@angular/core';
import { Banda } from '../Banda';

@Component({
  selector: 'app-Banda-detail',
  templateUrl: './Banda-detail.component.html',
  styleUrls: ['./Banda-detail.component.css']
})
export class BandaDetailComponent implements OnInit {
  @Input() banda!: Banda;
  constructor() { }

  ngOnInit() {
  }

}
