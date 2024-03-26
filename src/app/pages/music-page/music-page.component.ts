import { Component } from '@angular/core';
import { HuggingFaceService } from 'src/app/services/hugging-face.service';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.css']
})
export class MusicPageComponent {
  prompt: string = ''
  audioSrc: string = ''
  isLoading: boolean = false;

  constructor(private huggingFaceService: HuggingFaceService) { }

  create() {
    if(!this.prompt) return
    this.isLoading = true;
    this.audioSrc = ''
    this.huggingFaceService.createMusic(this.prompt).subscribe({
      next: (res) => {
        this.audioSrc = URL.createObjectURL(res)
      },
      error: () => {
        this.audioSrc = ''
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }
}
