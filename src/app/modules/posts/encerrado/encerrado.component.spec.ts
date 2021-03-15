import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncerradoComponent } from './encerrado.component';

describe('EncerradoComponent', () => {
  let component: EncerradoComponent;
  let fixture: ComponentFixture<EncerradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncerradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncerradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
