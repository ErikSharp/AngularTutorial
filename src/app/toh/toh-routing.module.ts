import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const heroesRoutes: Routes = [
    { path: "toh/heroes", component: HeroesComponent },
    { path: "toh/detail/:id", component: HeroDetailComponent },
    { path: "toh/dashboard", component: DashboardComponent }
];

@NgModule({
    //Only call RouterModule.forRoot() in the root AppRoutingModule (or the AppModule if that's where you register top level application routes). In any other module, you must call the RouterModule.forChild method to register additional routes
    imports: [RouterModule.forChild(heroesRoutes)],
    exports: [RouterModule]
})
export class TohRoutingModule {}
