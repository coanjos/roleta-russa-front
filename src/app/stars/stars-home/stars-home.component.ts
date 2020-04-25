import { Component, OnInit } from '@angular/core';
import { StarService } from 'src/app/_services/star.service';
import { AuthService } from '../../_services/auth.service';
import { environment } from '../../../environments/environment';

import { Star } from '../../domain/interfaces/star';

@Component({
  selector: 'app-stars-home',
  templateUrl: './stars-home.component.html',
  styleUrls: ['./stars-home.component.css']
})
export class StarsHomeComponent implements OnInit {
  stars: Star[];
  signedin$ = this.authService.signedin$;
  starApiUrl = environment.StarApiUrl;
      

  constructor(private starService: StarService, private authService: AuthService) { }

  ngOnInit() {
    this.starService.getStars().subscribe(stars => this.stars = stars)
  }

  onRemove(id: string) {
    this.starService.removeStar(id).subscribe(star => this.stars = this.stars.filter(s => s._id !== star._id))
  }

}
