import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosJogosComponent } from './todos-jogos.component';

describe('TodosJogosComponent', () => {
  let component: TodosJogosComponent;
  let fixture: ComponentFixture<TodosJogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosJogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
