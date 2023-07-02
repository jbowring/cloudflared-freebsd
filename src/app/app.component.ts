import { Component } from '@angular/core';
import {Release} from "./release";
import releases from "../release-info.json"

@Component({
  selector: 'app-root',
  template: `
    <h1 class="text-4xl font-bold text-center text-gray-200 pb-4">Unofficial FreeBSD cloudflared builds</h1>
    <p class="text-lg pb-8 text-center italic">Cloudflare's Tunnel client (formerly Argo Tunnel)
      <a href="https://github.com/cloudflare/cloudflared" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">
        <p class="inline pr-2">GitHub</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
          <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
        </svg>
      </a>
    </p>
    <div class="flex justify-center">
      <div class="pb-20 text-center">
        <div class="pb-4 flex align-middle items-center">
          <h2 class="text-3xl font-bold text-gray-200 mr-3" >Latest release: {{releases[0].version}}</h2>
          <div class="bg-green-600 rounded-full px-2 h-6">
            latest
          </div>
        </div>
        <p class="text-xl font-bold text-gray-200 pb-3">
          Download: 
          <a href="{{releases[0].binary7zipPath}}" class="text-blue-500 underline">
            <p class="inline">{{releases[0].binary7zipPath.split('/').pop()}}</p>
            <svg class="w-6 h-6 inline pb-0.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
            </svg>
          </a>
        </p>
        <p>
          Or use the <a class="underline" href="/binaries/cloudflared-freebsd-latest.7z">latest archive link</a>
        </p>
      </div>
    </div>
    
    <div class="relative flex justify-center flex-row">
      <div>
        <p class="text-lg self-center m-3 font-bold">All releases ▼</p>
        <div class="flex-col">
          <div class="mb-7" *ngFor="let release of releases">
            <app-release
              [release]="release"
            />
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  releases: Release[] = Object.entries(releases).map(([version, release]) => {
    return {
      binary7zipPath: release.binary7zipPath,
      binarySHA1Path: release.binarySHA1Path,
      buildDate: new Date(release.buildDate),
      platform: release.platform,
      releaseDate: new Date(release.releaseDate),
      version: version,
    }
}).sort((a, b) => new Date(b.releaseDate).valueOf() - new Date(a.releaseDate).valueOf());
}
