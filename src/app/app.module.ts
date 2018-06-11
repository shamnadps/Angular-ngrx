import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "./effects/app/app.effects";
import { NewsEffects } from "./effects/news/news.effects";
import { NewsComponent } from "./components/news/news.component";
import { NewsService } from "./services/news.service";
import { HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NewsDetailsComponent } from "./components/news-details/news-details.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AddNewsComponent } from "./components/add-news/add-news.component";

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SidebarComponent,
    NewsDetailsComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forFeature("news", reducers),
    StoreModule.forFeature("news-details", reducers),
    EffectsModule.forFeature([NewsEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
