import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ElseComponent } from "./else/else.component";
import { NotFoundComponent } from "./not-found/not-found.component";

//ng generate module app-routing --module app --flat

//Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar
const routes: Routes = [
    //put the routes in order from most specific to least
    { path: "else", component: ElseComponent },
    //empty path that redirects
    //the router should select the route to the TohComponent only when the entire URL matches '', so set the pathMatch value to 'full'
    //Technically, pathMatch = 'full' results in a route hit when the remaining, unmatched segments of the URL match ''. In this example, the redirect is in a top level route so the remaining URL and the entire URL are the same thing.
    //The other possible pathMatch value is 'prefix' which tells the router to match the redirect route when the remaining URL begins with the redirect route's prefix path.
    { path: "", redirectTo: "/toh", pathMatch: "full" },
    //catch-all route should be last
    { path: "**", component: NotFoundComponent }
];

//Adding the configured RouterModule to the AppModule is sufficient for simple route configurations. As the application grows, you'll want to refactor the routing configuration into a separate file and create a Routing Module, a special type of Service Module dedicated to the purpose of routing in feature modules.
@NgModule({
    //The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step
    //If you need to see what events are happening during the navigation lifecycle, there is the enableTracing option as part of the router's default configuration. This outputs each router event that took place during each navigation lifecycle to the browser console. This should only be used for debugging purposes.
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],

    //By re-exporting the RouterModule here the components declared in AppModule will have access to router directives such as RouterLink and RouterOutlet
    exports: [RouterModule]
})
export class AppRoutingModule {}
