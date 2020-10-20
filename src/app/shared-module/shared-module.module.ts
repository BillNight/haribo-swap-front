import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MODULES
import { MenuModule } from '../core/menu/menu.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MenuModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MenuModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
