import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "./effects/app/app.effects";
import * as fromNews from "./reducers/news.reducer";
import { NewsEffects } from "./effects/news/news.effects";
import { NewsComponent } from "./news/news.component";
import { NewsService } from "./services/news.service";
import { HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
  declarations: [AppComponent, NewsComponent, SidebarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forFeature("news", reducers),
    EffectsModule.forFeature([NewsEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
