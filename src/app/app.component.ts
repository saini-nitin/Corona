import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        //localStorage.clear();
    }
    // @HostListener("window:onbeforeunload",["$event"])
    // clearLocalStorage(event){
    //     localStorage.clear();
    // }
}
