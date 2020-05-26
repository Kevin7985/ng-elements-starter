import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsModule } from '@ngxs/store';
import { UiStoreModule } from 'src/app/state/theme/ui.module';

import { BalanceWidgetElementRootComponent } from './balance-widget-element-root/balance-widget-element-root.component';
import { BalanceModule } from './balance.module';

/**
 * Balance element module
 */
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
    UiStoreModule.forRoot(),
    BalanceModule,
  ],
  exports: [BalanceModule],
  declarations: [BalanceWidgetElementRootComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BalanceElementModule {
  constructor(private readonly injector: Injector) {}

  public ngDoBootstrap() {
    const balanceWidget = createCustomElement(BalanceWidgetElementRootComponent, {
      injector: this.injector,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as any;
    customElements.define('app-balance-widget', balanceWidget);
  }
}
