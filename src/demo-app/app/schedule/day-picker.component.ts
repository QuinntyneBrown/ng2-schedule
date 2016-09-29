import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

export interface Day {
    dayOfWeek: string;
    date: string;
}

@Component({
    template: require("./day-picker.component.html"),
    styles: [require("./day-picker.component.scss")],
    selector: "day-picker",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DayPickerComponent implements OnInit { 
    ngOnInit() {

    }

    @Input()
    public days: Array<Day> = [];
}
