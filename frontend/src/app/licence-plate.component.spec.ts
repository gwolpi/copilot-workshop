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

  it('should render the licence plate in the correct format when the input is aa12bb', () => {
    component.licencePlate = signal('aa12bb');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('span').textContent).toEqual('AA-12-BB');
  });

  it('should render the licence plate in the correct format when the input is a720bb', () => {
    component.licencePlate = signal('a720bb');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('span').textContent).toEqual('A-720-BB');
  });
});
