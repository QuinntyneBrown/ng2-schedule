import { Component, Input } from "@angular/core";

export interface Day {
    dayOfWeek: string,
    date:string
}

@Component({
    templateUrl: "./day-picker.component.html",
    styleUrls: ["./day-picker.component.css"],
    selector: "day-picker"
})
export class DayPickerComponent {
    //@Input()
    //public days: Array<Day> = [];
}
