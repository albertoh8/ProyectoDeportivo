import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucesosComponent } from './sucesos.component';

describe('SucesosComponent', () => {
  let component: SucesosComponent;
  let fixture: ComponentFixture<SucesosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucesosComponent]
    });
    fixture = TestBed.createComponent(SucesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
