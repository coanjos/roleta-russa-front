import { Component, OnInit } from '@angular/core';
import { StarService } from '../../_services/star.service';
import { Star } from '../../domain/interfaces/star';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-roulette-home',
  templateUrl: './roulette-home.component.html',
  styleUrls: ['./roulette-home.component.css']
})
export class RouletteHomeComponent implements OnInit {
  star: Star;
  starApiUrl = environment.StarApiUrl;

  constructor(private starService: StarService) { }

  ngOnInit() {
  }

  onClick() {
    this.starService.getRandomStar().subscribe((value) => this.star = value);    
  }

}
