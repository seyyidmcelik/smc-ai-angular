import { Component } from '@angular/core';
import { HuggingFaceService } from 'src/app/services/hugging-face.service';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.css']
})
export class ImagePageComponent {
  text: string = ''
  imgSrc: string = ''
  isLoading: boolean = false;

  constructor(private huggingFaceService: HuggingFaceService) { }

  create() {
    if(!this.text) return
    this.isLoading = true;
    this.huggingFaceService.createImage(this.text).subscribe({
      next: (data) => {
        this.imgSrc = URL.createObjectURL(data)
      },
      error: () => {
        this.imgSrc = ''
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }
}
