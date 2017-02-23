/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserPhotoListComponent } from './user-photo-list.component';

describe('UserPhotoListComponent', () => {
  let component: UserPhotoListComponent;
  let fixture: ComponentFixture<UserPhotoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPhotoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
