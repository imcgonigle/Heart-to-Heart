import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { TitleComponent } from "./pages/title/title.component";
import { HomeComponent } from "./pages/home/home.component";
import { HeartrateCheckerComponent } from "./pages/heartrate-checker/heartrate-checker.component";
import { EmojiGameComponent } from './pages/emoji-game/emoji-game.component';
import { EmotionComponent } from './pages/emotion/emotion.component';
import { ResourceListComponent } from './pages/resource/resource-list/resource-list.component';
import { ResourceDetailComponent } from './pages/resource/resource-detail/resource-detail.component';

const routes: Routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "landing", component: TitleComponent },
    { path: "main", component: HomeComponent },
    { path: "heartrate", component: HeartrateCheckerComponent },
    { path: "emotion/:name", component: EmotionComponent },
    { path: 'resources/:emotion/:section', component: ResourceListComponent },
    { path: 'resource/:id', component: ResourceDetailComponent},
    { path: 'emoji', component: EmojiGameComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }