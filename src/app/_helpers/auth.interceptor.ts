import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {TokenStorageService} from "../_services/token-storage.service";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorageService) {
  }

  intercept(request: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest = request;
    const token = this.tokenStorage.getToken();
    // console.log(token);
    if (token == null) {
      // console.log("TOKEN IS NULL");
    }
    if (token != null) {
      // console.log("TOKEN NOT NULL");
      authRequest = request.clone(
        {headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)});
    }
    // console.log("Authorization header: " + request.headers.get("Authorization"));
    return next.handle(authRequest);
  }
}

  export const authInterceptorProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ];
