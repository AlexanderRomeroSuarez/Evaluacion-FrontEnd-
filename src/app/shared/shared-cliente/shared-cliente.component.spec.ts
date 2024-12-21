import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedClienteComponent } from './shared-cliente.component';

describe('SharedClienteComponent', () => {
  let component: SharedClienteComponent;
  let fixture: ComponentFixture<SharedClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
