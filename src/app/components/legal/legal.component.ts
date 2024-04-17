import { Component } from '@angular/core';
import {MarkdownComponent} from "ngx-markdown";

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [
    MarkdownComponent
  ],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss'
})
export class LegalComponent {

}
