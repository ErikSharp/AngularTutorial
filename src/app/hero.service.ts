import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

//When you provide the service at the root level, Angular creates a single, shared instance
@Injectable({
    providedIn: "root" //registers a provider with the root injector for your service
})
export class HeroService {
    constructor(private messageService: MessageService) {}

    getHeroes(): Observable<Hero[]> {
        this.messageService.add("HeroService: fetched heroes");

        //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes
        return of(HEROES);
    }
}
