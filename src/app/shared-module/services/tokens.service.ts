import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TokensService {

    constructor(private http: HttpClient) {}

}
