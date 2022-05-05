import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadjsonComponent } from './loadjson.component';

describe('LoadjsonComponent', () => {
  let component: LoadjsonComponent;
  let fixture: ComponentFixture<LoadjsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadjsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
