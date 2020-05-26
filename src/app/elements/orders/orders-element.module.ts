import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsModule } from '@ngxs/store';
import { UiStoreModule } from 'src/app/state/theme/ui.module';

import { OrdersWidgetElementRootComponent } from './orders-widget-element-root/orders-widget-element-root.component';
import { OrdersModule } from './orders.module';

/**
 * Orders element module
 */
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
    UiStoreModule.forRoot(),
    OrdersModule,
  ],
  exports: [OrdersModule],
  declarations: [OrdersWidgetElementRootComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OrdersElementModule {
  constructor(private readonly injector: Injector) {}

  public ngDoBootstrap() {
    const ordersWidget = createCustomElement(OrdersWidgetElementRootComponent, {
      injector: this.injector,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as any;
    customElements.define('app-orders-widget', ordersWidget);
  }
}
