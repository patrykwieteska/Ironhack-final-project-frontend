import { TokenService } from './token.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

const AUTHORIZATION_HEADER = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private accessToken: TokenService) {}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req;

        const accessToken = this.accessToken.getToken();
        if(accessToken!=null) {
            request = req.clone({headers: req.headers.set(AUTHORIZATION_HEADER, 'Bearer '+accessToken)})
        }
        return next.handle(request);
    } 


    
}

export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true
    }
]