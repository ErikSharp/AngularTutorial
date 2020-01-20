import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroSearchComponent } from "./hero-search/hero-search.component";

@NgModule({
    declarations: [
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
            dataEncapsulation: false
        })
    ]
})
export class TohModule {}
