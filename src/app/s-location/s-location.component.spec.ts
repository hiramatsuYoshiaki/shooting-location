/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SLocationComponent } from './s-location.component';

describe('SLocationComponent', () => {
  let component: SLocationComponent;
  let fixture: ComponentFixture<SLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
