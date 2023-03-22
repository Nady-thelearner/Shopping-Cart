import { HttpClient } from '@angular/common/http';
// const axios = require("axios");
import axios from 'axios';
import { from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AxiosSFService {
  data : any

  constructor(private http: HttpClient) {}

  getDetails() {
    /*  const options = {
      method: 'GET',
      url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
      params: { ingr: 'kitkat' },
      headers: {
        'X-RapidAPI-Key': 'b28fcd628bmshd46137e6275c3e5p126803jsn32f06b438923',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
      },
    };

    const request$ = ajax(options).pipe(
      map((response) => response.response),
      catchError((error) => {
        console.error(error);
        return from([]);
      })
    );

    request$.subscribe((response) =>
      console.log(response.hints[0].food.nutrients, 'response')
    ); */

    const options = {
      params: { ingr: 'kitkat' },
      headers: {
        'X-RapidAPI-Key': 'b28fcd628bmshd46137e6275c3e5p126803jsn32f06b438923',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
      },
    };

    const url =
      'https://edamam-food-and-grocery-database.p.rapidapi.com/parser';

    return this.http.get(url, options)

  }

  // console.log(response.data.hints[9].food);
}

// function useState(arg0: undefined[]): [any, any] {
//   throw new Error('Function not implemented.');
// }
