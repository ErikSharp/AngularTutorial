import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TohModule } from "./toh/toh.module";
import { ElseComponent } from "./else/else.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
    declarations: [AppComponent, ElseComponent, NotFoundComponent],
    //The order of route configuration matters. The router accepts the first route that matches a navigation request path.
    imports: [BrowserModule, TohModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
