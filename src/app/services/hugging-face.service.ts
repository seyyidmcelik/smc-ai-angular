import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HuggingFaceService {
  private readonly apiKey: string = environment.huggingFaceApiKey;
  /* https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5 */
  /* https://api-inference.huggingface.co/models/stabilityai/stable-cascade */
  /* https://api-inference.huggingface.co/models/prompthero/openjourney */

  constructor(private httpService: HttpClient) { }

  createImage(prompt: string): Observable<Blob> {
    return this.httpService.post<Blob>(
      "https://api-inference.huggingface.co/models/prompthero/openjourney",
      JSON.stringify(prompt),
      {
        headers: { Authorization: `Bearer ${this.apiKey}` },
        responseType: 'blob' as 'json'
      }
    );
  }

  createMusic(prompt: string): Observable<Blob> {
    return this.httpService.post<Blob>(
      'https://api-inference.huggingface.co/models/facebook/musicgen-small',
      JSON.stringify(prompt),
      {
        headers: { Authorization: `Bearer ${this.apiKey}`},
        responseType: 'blob' as 'json'
      }
    )
  }
}
