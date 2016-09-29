import { NgModule } from "@angular/core";

import { DayPickerComponent } from "./day-picker.component";
import { ScheduleComponent } from "./schedule.component";
import { ScheduledItemsComponent } from "./scheduled-items.component";

const declarations = [
    DayPickerComponent,
    ScheduleComponent,
    ScheduledItemsComponent
];

@NgModule({
    declarations: declarations,
    exports: declarations
})
export class ScheduleModule {}