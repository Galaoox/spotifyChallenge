import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { SpotifyService } from '../../services/spotify.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

    private refrescando = false;
    private tokenRefrescado: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private spotifyService: SpotifyService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const omitirPeticion = req.headers.has('skip');

        if (omitirPeticion) {
            req = req.clone({
                headers: req.headers.delete('skip')
            });
            return next.handle(req);
        }
        // Capturo si se presenta un error
        return next.handle(req).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
                return this.handle401Error(req, next);
            } else {
                return throwError(error);
            }
        }));
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.refrescando) {
            this.refrescando = true;
            this.tokenRefrescado.next(null);

            return this.spotifyService.getToken().pipe(
                switchMap((token: any) => {
                    this.refrescando = false;
                    localStorage.setItem('token', token.access_token);
                    this.tokenRefrescado.next(token.access_token);
                    return next.handle(this.anadirToken(request, token.access_token));
                }));

        } else {
            return this.tokenRefrescado.pipe(
                filter(token => token != null),
                take(1),
                switchMap(jwt => {
                    return next.handle(this.anadirToken(request, jwt));
                }));
        }
    }

    private anadirToken(request: HttpRequest<any>, token: string) {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }

}
