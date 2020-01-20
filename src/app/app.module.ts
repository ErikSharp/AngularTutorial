import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TohModule } from "./toh/toh.module";
import { TohComponent } from "./toh/toh.component";

@NgModule({
    declarations: [AppComponent, TohComponent],
    imports: [BrowserModule, AppRoutingModule, TohModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
