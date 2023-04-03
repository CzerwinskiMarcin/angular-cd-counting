import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeDetectionListenerDirective } from './directive/change-detection-listener.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelFormComponent } from './components/model-form/model-form.component';
import { DefaultPrimitiveComponent } from './components/default-primitive/default-primitive.component';
import { DefaultObjectComponent } from './components/default-object/default-object.component';
import { DefaultArrayComponent } from './components/default-array/default-array.component';
import { DefaultNestedObjectComponent } from './components/default-nested-object/default-nested-object.component';
import { OnPushArrayComponent } from './components/on-push-array/on-push-array.component';
import { OnPushObjectComponent } from './components/on-push-object/on-push-object.component';
import { OnPushPrimitiveComponent } from './components/on-push-primitive/on-push-primitive.component';
import { OnPushNestedObjectComponent } from './components/on-push-nested-object/on-push-nested-object.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionListenerDirective,
    ModelFormComponent,
    DefaultPrimitiveComponent,
    DefaultObjectComponent,
    DefaultArrayComponent,
    DefaultNestedObjectComponent,
    OnPushArrayComponent,
    OnPushObjectComponent,
    OnPushPrimitiveComponent,
    OnPushNestedObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
