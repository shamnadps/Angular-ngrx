import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewsComponent } from "./components/news/news.component";
import { NewsDetailsComponent } from "./components/news-details/news-details.component";

const routes: Routes = [
  {
    path: "",
    component: NewsComponent
  },
  {
    path: "details/:id",
    component: NewsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
