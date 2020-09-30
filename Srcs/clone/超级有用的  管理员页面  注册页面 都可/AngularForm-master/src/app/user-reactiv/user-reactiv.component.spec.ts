import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReactivComponent } from './user-reactiv.component';

describe('UserReactivComponent', () => {
  let component: UserReactivComponent;
  let fixture: ComponentFixture<UserReactivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReactivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReactivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
