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
export class DayPickerComponent implements AfterViewInit, OnInit { 
    constructor(private _elementRef: ElementRef) {}
    
    @Input()
    public days: Array<Day> = [];

    private _index: number;
    
    get cellWidth() { return 85; }

    get cellsWidth() { return this.cellWidth * this.days.length; }

    get width() { return this._elementRef.nativeElement.getBoundingClientRect()["width"]; }
    
    public onDayPicked: EventEmitter<any> = new EventEmitter();

    ngOnInit() { this._index = Math.floor(this.days.length / 2); }

    ngAfterViewInit() {                
        this.changeIndex(this._index);
        setTimeout(() => {
            this._elementRef.nativeElement.firstElementChild.firstElementChild.style["transition"] = "all 500ms";
        }, 0)
        
    }

    public get endPosition() { return (this.width - (this.days.length * this.cellWidth)); }

    onClick(index: number) {      
        this.changeIndex(index); 
        this.onDayPicked.emit({
            index: index,
            day: this.days[index]
        });
    }

    public changeIndex(index: number) {
        this._index = index;
        var cellIndex = (index * this.cellWidth) + (this.cellWidth / 2);
        var delta = (cellIndex - (this.width / 2)) * -1;

        if (delta > 0)
            delta = 0;

        if (delta < this.endPosition)
            delta = this.endPosition;

        translateX(this._elementRef.nativeElement.firstElementChild.firstElementChild, delta); 
    }

    onResize($event) { this.changeIndex(this._index); }
    
}
