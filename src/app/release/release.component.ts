import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Release} from "../release";

@Component({
  selector: 'app-release',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Release {{release.version}}</h2>
    <p>Release date: {{release.releaseDate}}</p>
    <p>Download: <a href="{{release.binaryPath}}">{{release.binaryPath.split('/').pop()}}</a></p>
    <p>Build date: {{release.buildDate}}</p>
    <p>Platform: {{release.platform}}</p>
  `,
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent {
  @Input() release!: Release;
  protected readonly JSON = JSON;
}
