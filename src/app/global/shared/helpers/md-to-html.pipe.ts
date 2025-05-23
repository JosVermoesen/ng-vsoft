import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { marked } from 'marked';

@Pipe({
    name: 'mdToHtml',
    standalone: true,
})
export class MdToHtmlPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    const markdownString = marked(value) as string;
    return this.sanitizer.bypassSecurityTrustHtml(markdownString);
    // return marked(value);
  }
}
