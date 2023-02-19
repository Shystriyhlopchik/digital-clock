import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GenerateService } from './services/generate.service';
import { NUMBERS } from './helper/helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('digitalClock', { static: true })
  digitalClock?: ElementRef;

  buttonStatus = true;

  constructor(private generateService: GenerateService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let sec = false;
    this.generateService.generator.subscribe((value) => {
      sec = !sec;
      let minute = this.getMinutes(value);
      let second = this.getSeconds(value);

      this.digitalClock!.nativeElement.output =
        '0b' +
        `${Number(sec)}` +
        this.getMinutesVal(minute) +
        this.getSecondsVal(second);
    });
  }

  ngOnDestroy(): void {
    this.generateService.generator.unsubscribe();
  }

  start(): void {
    this.buttonStatus = false;
    this.generateService.startGenerate();
  }

  pause(): void {
    this.buttonStatus = true;
    this.generateService.pauseGenerate();
  }

  stop(): void {
    this.buttonStatus = true;
    this.generateService.stopGenerate();
  }

  getMinutes(value: number): number {
    return Math.floor(value / 60);
  }

  getSeconds(value: number) {
    return value - this.getMinutes(value) * 60;
  }

  getSecondsVal(second: number): string {
    const secondsArr: string[] = [];
    if (second > 9) {
      secondsArr.push(NUMBERS[+String(second).charAt(0)]);
      secondsArr.push(NUMBERS[+String(second).charAt(1)]);
    } else {
      secondsArr.push('1110111');
      secondsArr.push(NUMBERS[second]);
    }
    return secondsArr.join('');
  }

  getMinutesVal(minute: number): string {
    const secondsArr: string[] = [];
    if (minute > 9) {
      secondsArr.push(NUMBERS[+String(minute).charAt(0)]);
      secondsArr.push(NUMBERS[+String(minute).charAt(1)]);
    } else {
      secondsArr.push('1110111');
      secondsArr.push(NUMBERS[minute]);
    }
    return secondsArr.join('');
  }
}
