import { Component, Input } from "@angular/core";

@Component({
    templateUrl: "./schedule.component.html",
    styleUrls: ["./schedule.component.css"],
    selector: "schedule"
})
export class ScheduleComponent {
    constructor() { }

    @Input() public days: Array<{ dayOfTheWeek: string, date: string }> = [];

    @Input() public scheduledItems: Array<any> = [];
}
