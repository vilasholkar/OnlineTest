import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import {ResponseData} from '../../shared/response-data';
import {HostName} from '../../shared/app-setting'
import {APIUrl} from  '../../shared/API-end-points'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class TestTypeService {
  private headers:Headers;
  private options:RequestOptions;
  constructor(private http: Http) {
    // Creates header for post requests.  
    this.headers = new Headers({ 'Content-Type': 'application/json' });        
    this.options = new RequestOptions({ headers: this.headers });
}
// getTestTypes() :Observable<ResponseData>{
//     return this.http.get<ResponseData>(HostName.API_StartPoint+APIUrl.GET_TestTypes);
//   }

  getTestTypes(): Observable<any> {
    return this.http.get(HostName.API_StartPoint+APIUrl.GET_TestTypes)
        .map((response: Response) =>{
            let data=response;
            //let s=responce.status;
            return data;
        })
        .catch((error:any)=>{
            return Observable.throw(error);
        })
}
}
