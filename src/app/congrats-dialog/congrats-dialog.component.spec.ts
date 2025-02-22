import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratsDialogComponent } from './congrats-dialog.component';

describe('CongratsDialogComponent', () => {
  let component: CongratsDialogComponent;
  let fixture: ComponentFixture<CongratsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CongratsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongratsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
