import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WrapperComponent } from "./wrapper.component";
import { AppRoutingModule } from "../../app-routing.module";
import { LayoutModule } from "../../layout/layout.module";

import { SharedModule } from "../../shared/shared.module";
import { ErrorModalComponent } from "./components/error-modal/error-modal.component";
import { NotificationsModalComponent } from "./components/notifications-modal/notifications-modal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [
    WrapperComponent,
    ErrorModalComponent,
    NotificationsModalComponent
  ]
})
export class WrapperModule {}
