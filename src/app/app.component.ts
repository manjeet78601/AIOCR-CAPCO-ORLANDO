import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'process-frontend';

  currentPath: String;

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  constructor(private idle: Idle, private keepalive: Keepalive, location: Location, router: Router) {

      // sets an idle timeout in seconds.
      idle.setIdle(590);

      // sets a timeout period of 590 seconds. after 10 seconds of inactivity, the user will be considered timed out.
      idle.setTimeout(10);

      // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
      idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

      idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');

      idle.onTimeout.subscribe(() => {
          this.idleState = 'Timed out!  Logging Out.';
          console.log(this.idleState);
          this.timedOut = true;
          router.navigate(['/']);
      });

      idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
      idle.onTimeoutWarning.subscribe((countdown) => {
        this.idleState = 'You will be auto logged out in ' + countdown + ' seconds!';
        console.log(this.idleState);
      });

      // Sets the ping interval to 15 seconds
      //keepalive.interval(15);

      //keepalive.onPing.subscribe(() => this.lastPing = new Date());

      // Lets check the path everytime the route changes, stop or start the idle check as appropriate.
      router.events.subscribe((val) => {
      
          this.currentPath = location.path();
          if(this.currentPath.search(/auth\/login/gi) == -1)
              idle.watch();
          else
              idle.stop();

      });
  }
  
}
