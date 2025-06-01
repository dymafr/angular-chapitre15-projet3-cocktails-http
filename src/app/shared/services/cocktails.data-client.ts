import { Injectable, resource } from '@angular/core';
import { Cocktail } from '../interfaces';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CocktailsDataClient {
  BASE_URL = 'https://restapi.fr/api/acocktails';

  // cocktailsResource = resource({
  //   loader: async (): Promise<Cocktail[]> =>
  //     (await fetch(this.BASE_URL)).json(),
  // });

  // Refactorisation optionnelle avec Angular 20 httpResource
  cocktailsResource = httpResource<Cocktail[]>(() => this.BASE_URL);
}
