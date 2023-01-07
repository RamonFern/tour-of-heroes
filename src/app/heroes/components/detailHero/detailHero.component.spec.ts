/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailHeroComponent } from './detailHero.component';

describe('DetailHeroComponent', () => {
  let component: DetailHeroComponent;
  let fixture: ComponentFixture<DetailHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
