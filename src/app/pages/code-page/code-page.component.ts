import { AiService } from 'src/app/services/ai.service';
import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.html',
  styleUrls: ['./code-page.component.css']
})
export class CodePageComponent {
  isLoading: boolean = false;
  data: string[] = [];

  userInput = '';
  chatResponse = '';

  @ViewChild('content', { static: false }) content!: ElementRef;
  @ViewChild('inputField') inputField!: ElementRef; // Add this line

  constructor(private chatService: AiService) { }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  async sendMessage() {
    if(!this.userInput) return
    this.isLoading = true;
    let temp_text = this.userInput;
    this.userInput = ''
    this.data.push(temp_text)
    try {
      this.chatResponse = await this.chatService.sendMessage(temp_text);
      this.isLoading = false;
      this.data.push(this.chatResponse);
      setTimeout(() => {
        this.focusInput();
      });
    } catch (error) {
      this.isLoading = false;
      this.data.push("Something went wrong, please try again");
    }
  }

  scrollToBottom() {
    if (this.content) {
      this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
    }
  }

  focusInput() {
    if (this.inputField) {
      this.inputField.nativeElement.focus();
    }
  }
}
