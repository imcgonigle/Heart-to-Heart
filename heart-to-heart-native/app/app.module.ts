import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { TitleComponent } from "./pages/title/title.component";
import { HomeComponent } from "./pages/home/home.component";
import { EmotionComponent } from './pages/emotion/emotion.component';
import { HeartrateCheckerComponent } from './pages/heartrate-checker/heartrate-checker.component';
import { ResourceListComponent } from './pages/resource/resource-list/resource-list.component';
import { ResourceDetailComponent } from './pages/resource/resource-detail/resource-detail.component';
import { EmojiGameComponent } from './pages/emoji-game/emoji-game.component';

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
        TitleComponent,
        HomeComponent,
        EmotionComponent,
        HeartrateCheckerComponent,
        ResourceDetailComponent,
        ResourceListComponent,
        EmojiGameComponent
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
