import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballersListComponent } from './footballers-list.component';

describe('FootballersListComponent', () => {
  let component: FootballersListComponent;
  let fixture: ComponentFixture<FootballersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootballersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootballersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
