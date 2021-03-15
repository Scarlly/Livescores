import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AoVivoComponent } from './ao-vivo.component';

describe('AoVivoComponent', () => {
  let component: AoVivoComponent;
  let fixture: ComponentFixture<AoVivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AoVivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AoVivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
