/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GallareyComponent } from './gallarey.component';

describe('GallareyComponent', () => {
  let component: GallareyComponent;
  let fixture: ComponentFixture<GallareyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallareyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallareyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
