import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { StarService } from '../../_services/star.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patch',
  templateUrl: './patch.component.html',
  styleUrls: ['./patch.component.css']
})
export class PatchComponent implements OnInit {
  starId: string;  
  
  starForm = new FormGroup({
    nome: new FormControl(''),
    paisDeOrigem: new FormControl('')    
  })

  constructor(
    private starService: StarService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.starId = this.activatedRoute.snapshot.paramMap.get('id')
    this.starService.getStar(this.starId).subscribe(star => {
      this.starForm.setValue({ nome: star.nome, paisDeOrigem: star.paisDeOrigem });
    })    
  }

  onSubmit() {
    if(this.starForm.invalid) {
      return;
    }        
    
    this.starService.patchStar(this.starId, this.starForm.value).subscribe({
      next: response => {
        this.router.navigateByUrl('/stars')
      },
      error: err => {
        if (!err.status) {
          this.starForm.setErrors({ noConnection: true });
        } else {
          this.starForm.setErrors({ unknownError: true });
        }
      }
    })    
  }

}
