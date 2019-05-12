import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/ui/core/view/view";

@Component({
    selector: "ns-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    moduleId: module.id
})
export class HomeComponent {
    public activeBtn = 0;

    public onTap(event: EventData, btnNo: number) {
        this.activeBtn = btnNo;
    }
}
