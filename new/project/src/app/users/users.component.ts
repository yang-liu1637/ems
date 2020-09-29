import {Component, Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';
import {throttleTime} from 'rxjs/operators';
import {Subject, Subscription} from 'rxjs';

/*
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  res = false;
  touch(): void{
    this.res = true;
  }
    ngOnInit(): void {
    }

}*/

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[click.once]'
})
// tslint:disable-next-line:directive-class-suffix
export class UsersComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-output-rename
  @Output('click.once') clickCall: EventEmitter<MouseEvent> = new EventEmitter();
  @Input() duration = 2000; // 必须是数字，传入时要用绑定语法
  private $sub = new Subject<any>();
  private subscription: Subscription;

  constructor(
    private renderer: Renderer2, // Angular 2.x导入Renderer
    private element: ElementRef
  ) {
  }

  ngOnInit(): void {
    // 如此绑定事件亦可
    // this.renderer.listen(
    //   this.element.nativeElement, 'click', event => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     this.$sub.next(event);
    //   }
    // );
    this.subscription = this.$sub.pipe(
      throttleTime(this.duration)
    ).subscribe(e => {
      this.clickCall.emit(e);
    });
  }

  @HostListener('click', ['$event'])
  clickEvent(event: MouseEvent): void {
    event.preventDefault();   // 通常是不需要冒泡的
    event.stopPropagation();
    this.$sub.next(event);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
