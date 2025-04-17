import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GptBackdropComponent } from './gpt-backdrop.component';

describe('GptBackdropComponent', () => {
  let component: GptBackdropComponent;
  let fixture: ComponentFixture<GptBackdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GptBackdropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GptBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
