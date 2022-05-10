import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './components/starter/starter.component';

const routes: Routes = [{ path: '', component: StarterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
