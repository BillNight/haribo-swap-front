import { NgModule } from '@angular/core';

// MODULES
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared-module/shared-module.module';

// COMPONENTS
import { HomeComponent } from './home.component';
import { TokensListComponent } from './components/tokens-list/tokens-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    TokensListComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
