import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { LandingComponent } from "./pages/landing/landing.component";

import { MainComponent } from "./pages/main/main.component";

import { HeartrateCheckerComponent } from "./pages/heartrate-checker/heartrate-checker.component";

const routes: Routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "landing", component: LandingComponent },
    { path: "main", component: MainComponent },
    { path: "heartrate-checker", component: HeartrateCheckerComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }