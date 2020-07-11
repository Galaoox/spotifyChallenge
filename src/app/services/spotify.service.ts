import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor(private httpClient: HttpClient) { }

    getToken() {
        const credentials = {
            grant_type: 'client_credentials',
            client_id: 'f53fe62793324902ac1fccc18f728ce8',
            client_secret: '5e9f638ddadb40b6acd10f6c46545363'
        };

        const url = 'https://accounts.spotify.com/api/token';


        const headers = new HttpHeaders({
            Authorization: `Basic ${btoa(credentials.client_id + ':' + credentials.client_secret)}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        const params = new HttpParams().set('grant_type', 'client_credentials'); // create params object
        this.httpClient.post('https://accounts.spotify.com/api/token', { headers, params }).subscribe(
            (res) => {
                console.log(res);
            }, (error) => {
                console.log(error);
            }
        );

    }


    get(endPoint: string): Observable<any> {
        const headers = new HttpHeaders({
            Authorization: 'Bearer BQAuF1DjphvSLI-zt4Lc88fOWLmvmCihzpuhUSzPScMcsoL9DPfikfdWGL4tDY86-mRQoVbMr85RH-wjCV8'
        });
        return this.httpClient.get(endPoint, { headers });
    }



    obtenerLanzamientos(endPoint = null) {
        const url = endPoint ? endPoint : 'https://api.spotify.com/v1/browse/new-releases?limit=12';
        return this.get(url).pipe(
            map(datos => datos.albums)
        );
    }


    obtenerCanciones(termino: string, endPoint = null) {
        const url = endPoint ? endPoint : `https://api.spotify.com/v1/search?q=${termino}&type=track&limit=8`;
        return this.get(url).pipe(
            map(data => data.tracks)
        );
    }


}
