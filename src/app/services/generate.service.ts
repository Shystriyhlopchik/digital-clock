import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Status } from '../enums/enum';

@Injectable({
  providedIn: 'root',
})
export class GenerateService {
  generator: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private timerId?: number;
  private status = Status.Stop;

  startGenerate(): void {
    this.status = Status.Start;

    if (!this.timerId) {
      this.generatorFn();
    }
  }

  pauseGenerate(): void {
    this.status = Status.Pause;
  }

  stopGenerate(): void {
    this.status = Status.Stop;
    this.generatorFn();
  }

  private generatorFn(): void {
    const _g = generator();

    if (this.status === Status.Stop) {
      clearInterval(this.timerId);
      this.timerId = undefined;
    } else if (this.status === Status.Start) {
      this.timerId = setInterval(() => {
        if (this.status !== Status.Pause) {
          this.generator.next(_g.next().value);
        }
      }, 1000);
    }
  }
}

function* generator(): Generator<number> {
  let i = 1;
  while (true) {
    yield i;
    i++;
  }
}
