import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
    selector: "app-heroes",
    templateUrl: "./heroes.component.html",
    styleUrls: ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    heroName = "";

    //This will get injected with a singleton instance
    constructor(private heroService: HeroService) {}

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe(heroes => (this.heroes = heroes));
    }

    inputKeyUp(event): void {
        if (event.keyCode === 13) {
            this.add(this.heroName.trim());
            this.heroName = "";
        }
    }

    add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.addHero({ name } as Hero).subscribe(hero => {
            this.heroes.push(hero);
        });
    }

    delete(hero: Hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);

        //If you neglect to subscribe(), the service will not send the
        //delete request to the server.As a rule, an Observable does nothing until something subscribes
        this.heroService.deleteHero(hero).subscribe();
    }

    ngOnInit() {
        this.getHeroes();
    }
}
