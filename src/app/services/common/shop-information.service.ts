import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ShopInformation} from '../../interfaces/common/shop-information.interface';

const API_URL = environment.apiBaseLink + '/api/shop-information/';


@Injectable({
  providedIn: 'root'
})
export class ShopInformationService {

  // Inject
  private readonly httpClient = inject(HttpClient);

  /**
   * getShopInformation()
   * getAllShopInformations()
   */

  getShopInformation(select?: string) {
    let params = new HttpParams();
    if (select) {
      params = params.append('select', select);
    }
    return this.httpClient.get<{ data: ShopInformation, message: string, success: boolean }>(API_URL + 'get', {params});
  }

}
