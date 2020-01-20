import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TohModule } from "./toh/toh.module";
import { TohComponent } from "./toh/toh.component";
import { ElseComponent } from './else/else.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [AppComponent, TohComponent, ElseComponent, NotFoundComponent],
    imports: [BrowserModule, AppRoutingModule, TohModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
