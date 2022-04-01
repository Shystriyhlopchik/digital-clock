import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('digitalClock', { static: true })
  digitalClock: ElementRef | undefined;

  title = 'digital-clock';

  ngOnInit() {}

  ngAfterViewInit() {
    this.digitalClock!.nativeElement.output = '0b0000001';
  }
}
