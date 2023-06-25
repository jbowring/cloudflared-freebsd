import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Release} from "../release";

@Component({
  selector: 'app-release',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      Release {{JSON.stringify(release)}}
    </p>
  `,
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent {
  @Input() release!: Release;
  protected readonly JSON = JSON;
}
