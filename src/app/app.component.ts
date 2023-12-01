import { Component } from '@angular/core';
import { defer } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<button (click)="showComment=true">show comment</button>
  @defer(when showComment){
    <app-comment></app-commentt>
   }
   @loading{
     component yükleme esnasında burası çalışıyor
   }
   @placeholder{
     şart sağlanmıyorsa burası gözükürss
   }
   @error{
     hata varsa burası gözükür
   }`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dv';
  showComment: boolean = false;
}
