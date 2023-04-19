import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LicencePlateService {
    private readonly httpClient = inject(HttpClient);
    private readonly token: string = 'eed80244f0201f19b9d8a653562c1187965424580ab7bac15a9d51076ffe9d95';
    getLicencePlateDetails(licencePlate: string) {
        // create http params object
        const params = {
            ['ovio-api-key']: this.token
        }
        return this.httpClient.get(`https://api.overheid.io/voertuiggegevens/${licencePlate}`, { params });
    }


}
