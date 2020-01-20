import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TohComponent } from "./toh/toh.component";
import { ElseComponent } from "./else/else.component";
import { NotFoundComponent } from "./not-found/not-found.component";

//Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar
const routes: Routes = [
    { path: "toh", component: TohComponent },
    { path: "else", component: ElseComponent },
    //catch-all route
    { path: "**", component: NotFoundComponent }
    //This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'
    // { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    // { path: "heroes", component: HeroesComponent },
    // { path: "detail/:id", component: HeroDetailComponent },
    // { path: "dashboard", component: DashboardComponent }
];

@NgModule({
    //The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
