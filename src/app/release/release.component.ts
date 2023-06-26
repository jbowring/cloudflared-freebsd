import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Release} from "../release";

@Component({
  selector: 'app-release',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rounded-xl bg-gray-900 border-2 border-gray-500 p-6">
      <h2 class="text-3xl text-gray-200 font-bold pb-4">Release {{release.version}}</h2>
      <hr class="border-gray-600 pb-4">
      <div class="text-l flex-col text-gray-200">
        <div class="text-lg font-bold pb-2">
          Download: <a class="text-blue-500 underline" href="{{release.binaryPath}}">{{release.binaryPath.split('/').pop()}}</a>
        </div>
        <div>Release date: {{release.releaseDate.toISOString().split('T')[0]}}</div>
        <div>Build date: {{release.buildDate.toISOString().split('T')[0]}}</div>
        <div>Platform: {{release.platform}}</div>
      </div>
    </div>
  `,
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent {
  @Input() release!: Release;
}
