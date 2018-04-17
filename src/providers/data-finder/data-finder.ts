import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the DataFinderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataFinderProvider {


  constructor(public http: HttpClient) {
    console.log('Hello DataFinderProvider Provider');
  }

  public getJSONDataAsync(filePath: string) : Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(filePath)
        .subscribe(
          res => {
            //if (!res.ok) {
              //reject("Failed with status: " + res.status + "\nTrying to find file at " + filePath);
            //}

            resolve(res);
          }
        );
    }).catch((reason) => this.handleError(reason));
  }

  /* Takes an error, logs it to the console, and throws it */
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
  }

}
