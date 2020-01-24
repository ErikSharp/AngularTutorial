import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TohComponent } from "./toh.component";

const heroesRoutes: Routes = [
    {
        path: "toh",
        component: TohComponent,
        children: [
            { path: "", component: DashboardComponent },
            { path: "heroes", component: HeroesComponent },
            { path: "detail/:id", component: HeroDetailComponent }
        ]
    }
];

@NgModule({
    //Only call RouterModule.forRoot() in the root AppRoutingModule (or the AppModule if that's where you register top level application routes). In any other module, you must call the RouterModule.forChild method to register additional routes
    imports: [RouterModule.forChild(heroesRoutes)],
    exports: [RouterModule]
})
export class TohRoutingModule {}
