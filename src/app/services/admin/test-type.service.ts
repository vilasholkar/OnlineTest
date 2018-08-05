import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {HostName} from '../../shared/app-setting'
import {APIUrl} from  '../../shared/API-end-points'
@Injectable()
export class TestTypeService {
  private headers:Headers;
  private options:RequestOptions;
  constructor(private http: Http) {
    // Creates header for post requests.  
    this.headers = new Headers({ 'Content-Type': 'application/json' });        
    this.options = new RequestOptions({ headers: this.headers });
}
getTestTypes() :Observable<Response>{
    return this.http.get<Response>(HostName.API_StartPoint+APIUrl.GET_TestTypes);
  }

// getTestTypes(): Observable<any> {
//   return this.http.get(HostName.API_StartPoint+APIUrl.GET_TestTypes)
//       .map((responce: Response) =>{
//           let data=responce;
//           return data;
//       })
//       .catch((error:any)=>{
//           return Observable.throw(error);
//       })
// }

// public createQuotation(model:any):Observable<any>{        
//   let body :string =JSON.stringify(model);
//   let URL:string =HostName.API_StartPoint+APIUrl.GET_TestTypes;
//   return this.http.post(URL,body,this.options)
//   .map((res:Response)=>{
//       let data:any=res;
//       return data;
//   }).catch((error:any)=>{
//       return Observable.throw(error);
//   })
// }
}
