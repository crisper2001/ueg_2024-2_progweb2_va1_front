import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballersFormComponent } from './footballers-form.component';

describe('FootballersFormComponent', () => {
  let component: FootballersFormComponent;
  let fixture: ComponentFixture<FootballersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootballersFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootballersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
