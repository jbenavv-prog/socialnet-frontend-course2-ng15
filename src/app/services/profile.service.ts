import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';

const apiURL = GlobalConstants.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  uploadPhotoProfile(photoProfile: any) {
    return this.http.post(
      `${apiURL}/profile/updatePhotoProfile`,
      photoProfile
    );
  }

  getProfile() {
    return this.http.get(`${apiURL}/profile/getProfile`);
  }
}
