import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

//Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar
const routes: Routes = [
    //This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "heroes", component: HeroesComponent },
    { path: "dashboard", component: DashboardComponent }
];

@NgModule({
    //The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
