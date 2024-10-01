import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballersListItemComponent } from './footballers-list-item.component';

describe('FootballersListItemComponent', () => {
  let component: FootballersListItemComponent;
  let fixture: ComponentFixture<FootballersListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootballersListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootballersListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
