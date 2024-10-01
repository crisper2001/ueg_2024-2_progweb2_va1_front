import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router} from "@angular/router";
import {FootballerService} from "./footballer.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FootballerResolve implements Resolve<any> {
  constructor(
    private router: Router,
    private service: FootballerService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    return new Observable(observer => {
      this.service.getAll().subscribe(
        {
          next: data => {
            observer.next(data);
            observer.complete();
          },
          error: error => {
            observer.error(error);
            this.router.navigate(['']);
          }
        });
    });
  }
}
