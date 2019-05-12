import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { Sub1Component } from "./home/sub1/sub1.component";
import { Sub2Component } from "./home/sub1/sub2/sub2.component";

@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, AppRoutingModule],
    declarations: [AppComponent, HomeComponent, Sub1Component, Sub2Component],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
