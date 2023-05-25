import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGet1Component } from './api-get1.component';

describe('ApiGet1Component', () => {
  let component: ApiGet1Component;
  let fixture: ComponentFixture<ApiGet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiGet1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiGet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
