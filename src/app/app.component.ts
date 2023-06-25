import { Component } from '@angular/core';
import {Release} from "./release";
import releases from "../../release-info.json"

@Component({
  selector: 'app-root',
  template: `
    <h1>cloudflared binaries</h1>
    <app-release
      *ngFor="let release of releases"
      [release]="release">

    </app-release>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cloudflared';
  releases: Release[] = releases.sort((a, b) => new Date(b.releaseDate).valueOf() - new Date(a.releaseDate).valueOf());
}
