import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./scheduled-items.component.html"),
    styles: [require("./scheduled-items.component.scss")],
    selector: "scheduled-items",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduledItemsComponent implements OnInit { 
    ngOnInit() {

    }
}
