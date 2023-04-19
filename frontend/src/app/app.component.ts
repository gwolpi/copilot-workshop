import {Component, computed, inject, signal} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LicencePlateService} from "./licence-plate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  licencePlate = signal('');
  carDetails = signal<any>({});
  carDetailsProperties = computed(() => {
    return Object.keys(this.carDetails());
  })
  form = inject(FormBuilder).nonNullable.group({
    licencePlate: ['', Validators.required]
  })

  private readonly licencePlateService = inject(LicencePlateService);

  submit() {
    // update the signal with the value from the form
    const { licencePlate } = this.form.getRawValue();
    this.licencePlate.set(licencePlate);
    this.licencePlateService.getLicencePlateDetails(licencePlate).subscribe((data) => {
      this.carDetails.set(data);
    });
  }
}
