import {
    Component,
    ChangeDetectionStrategy,
    EventEmitter,
    Input,
    OnInit,
    ElementRef,
    AfterViewInit
} from "@angular/core";

export interface Day {
    dayOfWeek: string;
    date: string;
}

export const translateX = (element: HTMLElement, value: number) => {
    element.style["transform"] = `translateX(${value}px)`;
}

@Component({
    template: require("./day-picker.component.html"),
    styles: [require("./day-picker.component.scss")],
    selector: "day-picker"
})
export class DayPickerComponent implements AfterViewInit { 
    constructor(private _elementRef: ElementRef) {}
    
    @Input()
    public days: Array<Day> = [];

    private _index: number;
    private delta: number;
    ngAfterViewInit() {
        this.delta = (((this.days.length * 75) - this.width) / 2) * -1;
        translateX(this._elementRef.nativeElement.firstElementChild.firstElementChild, this.delta);
        setTimeout(() => {
            this._elementRef.nativeElement.firstElementChild.firstElementChild.style["transition"] = "all 1s";
        }, 0)
        
    }

    onClick(index: number) {      
        this._index = index;    
        translateX(this._elementRef.nativeElement.firstElementChild.firstElementChild, ((index - 8) * -75) - this.delta);
    }

    onResize($event) {
        
    }

    get width() { return this._elementRef.nativeElement.getBoundingClientRect()["width"]; }
}
