import { Component, Input } from "@angular/core";

@Component({
    template: require("./scheduled-items.component.html"),
    styles: [require("./scheduled-items.component.scss")],
    selector: "scheduled-items"
})
export class ScheduledItemsComponent { 
    private _scheduledItems: Array<any>;
    private _currentIndex: number;
    //scheduledItems
    @Input('scheduledItems') public set scheduledItems(value) {
        this._scheduledItems = value;
    }

    public get scheduledItems() {
        return this._scheduledItems.filter((item, idx) => {


            return item.date == this.days[this._currentIndex].date;
        }); 

        //return this._scheduledItems;
    }

    @Input() days: Array<any> = [];
    @Input("currentIndex") public set currentIndex(value) { this._currentIndex = value; }
}
