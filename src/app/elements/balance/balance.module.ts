import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppUiStoreModule } from 'src/app/state/theme/ui.module';
import { getWindow, WINDOW } from 'src/app/utils';

import { AppMaterialModule } from '../../modules/material/custom-material.module';
import {
  AppBalanceConfigComponent,
  AppBalanceIndexComponent,
  AppBalanceWidgetComponent,
} from './index';

/**
 * Balance module
 */
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppMaterialModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule,
    NgxsFormPluginModule,
    AppUiStoreModule,
  ],
  declarations: [AppBalanceWidgetComponent, AppBalanceConfigComponent, AppBalanceIndexComponent],
  providers: [{ provide: WINDOW, useFactory: getWindow }],
  exports: [AppBalanceWidgetComponent, AppBalanceConfigComponent, AppBalanceIndexComponent],
  entryComponents: [AppBalanceWidgetComponent, AppBalanceConfigComponent, AppBalanceIndexComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppBalanceModule {}
