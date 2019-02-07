import { Component } from '@angular/core';
import {  DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent {
  private readonly docsResourceUrl = '../../docs/index.html';

  constructor(private sanitizer: DomSanitizer) {
    this.safeDocsResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.docsResourceUrl);
  }

  safeDocsResourceUrl: SafeResourceUrl;

}
