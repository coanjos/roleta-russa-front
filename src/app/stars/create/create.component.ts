import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StarService } from '../../_services/star.service';
import { Router } from '@angular/router';

import { Star } from '../../domain/interfaces/star';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  starForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    paisDeOrigem: new FormControl('', [Validators.required]),
    imagem: new FormControl('', [Validators.required])
  })

  constructor(private starService: StarService, private router: Router) { }
  selectedFile: File = null

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0]
  }

  ngOnInit() {
  }

  onSubmit() {
    if(this.starForm.invalid) {
      return;
    }        
    
    this.starService.createStar(this.starForm.value).subscribe({
      next: response => {
        const fd = new FormData()
        fd.append('imagem', this.selectedFile, this.selectedFile.name)

        this.starService.createStarImage(response._id, fd).subscribe(() => {
          this.router.navigateByUrl('/stars')
        })
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
