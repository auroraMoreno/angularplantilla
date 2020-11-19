import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarsalarioComponent } from './modificarsalario.component';

describe('ModificarsalarioComponent', () => {
  let component: ModificarsalarioComponent;
  let fixture: ComponentFixture<ModificarsalarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarsalarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarsalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
