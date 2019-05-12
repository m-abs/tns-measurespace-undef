import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/ui/core/view/view";

@Component({
    selector: "ns-sub1",
    templateUrl: "./sub1.component.html",
    styleUrls: ["./sub1.component.scss"],
    moduleId: module.id
})
export class Sub1Component implements OnInit {
    constructor() {}

    ngOnInit() {}

    public onTap(event: EventData) {
        console.log(`Sub1Component.onTap(${event.object})`);
    }
}
