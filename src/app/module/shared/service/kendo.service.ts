import {BehaviorSubject, Observable} from "rxjs";
import {GridDataResult} from "@progress/kendo-angular-grid";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {Injectable, isDevMode} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class KendoService extends BehaviorSubject<GridDataResult> {
  public loading: boolean;

  private BASE_URL = 'http://localhost:8080/';

  constructor(
    private http: HttpClient,
    protected tableName: string
  ) {
    super(null);
  }

  public query(state: any): void {
    this.fetch(this.tableName, state)
      .subscribe(x => {
        super.next(x);
      }, (err) => {
        if (isDevMode()) {
          console.log(err);
        } else {
          window.location.href = window.location.origin;
        }
      });
  }

  public queryAll(st?: any): Observable<GridDataResult> {
    const state = Object.assign({}, st);
    delete state.skip;
    delete state.take;
    return this.fetch(this.tableName, state);
  }

  protected fetch(tableName: string, state: any): Observable<GridDataResult> {
    this.loading = true;
    return this.http
      .post(`${this.BASE_URL}${tableName}/get`, state)
      .pipe(
        map(response => (<GridDataResult>{
          data: response['data'],
          total: response['total'],
          aggregates: response['aggregates']
        })),
        tap(() => this.loading = false)
      );
  }
}
