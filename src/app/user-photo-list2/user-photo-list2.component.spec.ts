/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserPhotoList2Component } from './user-photo-list2.component';

describe('UserPhotoList2Component', () => {
  let component: UserPhotoList2Component;
  let fixture: ComponentFixture<UserPhotoList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPhotoList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPhotoList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
