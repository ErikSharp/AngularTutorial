import { Component, OnInit } from "@angular/core";

import { Observable, Subject } from "rxjs";

import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
    selector: "app-hero-search",
    templateUrl: "./hero-search.component.html",
    styleUrls: ["./hero-search.component.scss"]
})
export class HeroSearchComponent implements OnInit {
    heroes$: Observable<Hero[]>;

    // A Subject is both a source of observable values and an Observable itself. You can subscribe to a Subject as you would any Observable.
    //You can also push values into that Observable by calling its next(value) method
    private searchTerms = new Subject<string>();

    constructor(private heroService: HeroService) {}

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heroes$ = this.searchTerms.pipe(
            // wait 300ms after each keystroke before considering the term
            debounceTime(300),

            // ignore new term if same as previous term
            distinctUntilChanged(),

            // switch to new search observable each time the term changes
            //It cancels and discards previous search observables, returning only the latest search service observable
            //switchMap() preserves the original request order while returning only the observable from the most recent HTTP method call. Results from prior calls are canceled and discarded
            //Note that canceling a previous searchHeroes() Observable doesn't actually abort a pending HTTP request. Unwanted results are simply discarded before they reach your application code
            switchMap((term: string) => this.heroService.searchHeroes(term))
        );
    }
}
