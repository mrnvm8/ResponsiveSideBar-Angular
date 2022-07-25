import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 //this is to get the mat references.
@ViewChild(MatSidenav) sidenav!: MatSidenav;

//Include the breakpoint observer service
constructor(private observer: BreakpointObserver){}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode ='over';
        this.sidenav.close();
      }else{
        this.sidenav.mode ='side';
        this.sidenav.open();
      }
    });
  }
}
