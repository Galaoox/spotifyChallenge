import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {
    private credenciales = {
        grant_type: 'client_credentials',
        client_id: '4bd849ad70c2427fa3490d80254a0dba',
        client_secret: '6b857fb86a8a4eeebd666066b9cadc3c'
    };
    urlBase = 'https://api.spotify.com/v1/';

    constructor(private httpClient: HttpClient) {
        this.getToken();
    }

    getToken(): Observable<any> {
        const params = ('grant_type=client_credentials');
        const encoded = btoa(this.credenciales.client_id + ':' + this.credenciales.client_secret);
        const headers = new HttpHeaders({
            Authorization: 'Basic ' + encoded,
            'Content-Type': 'application/x-www-form-urlencoded;',
            skip: 'true'
        });
        return this.httpClient.post('https://accounts.spotify.com/api/token', params, { headers });
    }

    obtenerToken() {
        return localStorage.getItem('token');
    }

    get(endPoint: string): Observable<any> {
        const token = this.obtenerToken();
        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        return this.httpClient.get(endPoint, { headers });
    }

    obtenerLanzamientos(endPoint = null) {
        const url = endPoint ? endPoint : this.urlBase + 'browse/new-releases?limit=12';
        return this.get(url).pipe(
            map(datos => datos.albums)
        );
    }

    obtenerCanciones(termino: string, endPoint = null) {
        const url = endPoint ? endPoint : this.urlBase + `search?q=${termino}&type=track&limit=8`;
        return this.get(url).pipe(
            map(data => data.tracks)
        );
    }

    obtenerArtistas(termino: string, endPoint = null) {
        const url = endPoint ? endPoint : this.urlBase + `search?q=${termino}&type=artist&limit=12`;
        return this.get(url).pipe(
            map(data => data.artists)
        );
    }


    obtenerInfoArtista(id: string) {
        const url = this.urlBase + 'artists/' + id;
        return this.get(url);
    }

    obtenerTopCanciones(id: string) {
        const url = this.urlBase + `artists/${id}/top-tracks?country=CO`;
        return this.get(url).pipe(
            map(data => data.tracks),
            map((data) => data.slice(0, 5))
        );
    }




}
