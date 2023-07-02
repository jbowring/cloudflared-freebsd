import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Release} from "../release";

@Component({
  selector: 'app-release',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rounded-xl bg-gray-900 border-2 border-gray-500 p-6">
      <h2 class="text-2xl text-gray-200 font-bold pb-4">Release {{release.version}}</h2>
      <hr class="border-gray-600 pb-4">
      <div class="flex-col text-gray-200">
        <div class="font-bold pb-2">
          Download: <a class="text-blue-500" href="{{release.binary7zipPath}}">{{release.binary7zipPath.split('/').pop()}}</a>
        </div>
        <div class="text-sm">Release date: {{release.releaseDate.toISOString().split('T')[0]}}</div>
        <div class="text-sm">Build date: {{release.buildDate.toISOString().split('T')[0]}}</div>
        <div class="text-sm">Platform: {{release.platform}}</div>
      </div>
    </div>
  `,
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent {
  @Input() release!: Release;
}
