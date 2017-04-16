import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { LandingComponent } from "./pages/landing/landing.component";
import { MainComponent } from "./pages/main/main.component";
import { HeartrateCheckerComponent } from './pages/heartrate-checker/heartrate-checker.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        LandingComponent,
        MainComponent,
        HeartrateCheckerComponent
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
