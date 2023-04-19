import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencePlateComponent } from './licence-plate.component';
import { signal } from "@angular/core";
import {LicencePlatePipe} from "./licence-plate.pipe";

describe('LicencePlateComponent', () => {
  let component: LicencePlateComponent;
  let fixture: ComponentFixture<LicencePlateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LicencePlateComponent, LicencePlatePipe]
    });
    fixture = TestBed.createComponent(LicencePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
