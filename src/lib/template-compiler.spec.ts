/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AfterViewInit, Component, ViewChild, DebugElement, ViewContainerRef } from '@angular/core';

import { RdAngularCompilerModule } from './compiler.module';
import { CompiledResultModel } from './compiled-result.model';
import { TemplateCompiler } from './template-compiler';
import { Http } from '@angular/http';
import { of } from 'rxjs';

let component: MockWrapperComponent;
let fixture: ComponentFixture<MockWrapperComponent>;
let toggleBtn: DebugElement;
let options: DebugElement[];
let elem: HTMLElement;

describe('Service: TemplateCompiler', () => {
  let spy = {
      change: null,
      ngModelChange$: null,
      optionChange$: null,
      writeValue: null
    };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockWrapperComponent
      ],
      imports: [
        RdAngularCompilerModule
      ],
      // Provide a test-double instead
      providers: [
      ]
    });

    fixture = TestBed.createComponent(MockWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([Http], (http: Http) => {
    spyOn(http, 'get').and.callFake((url) => {
      if(url === '/src/assets/auto-email-template.html')
        return of({ text: () => { return getBaseTemplate() } })
      else if(url === '/src/assets/complex-style-tag.html')
        return of({ text: () => { return getComplexTemplate() } })
    })
    // toggleBtn = fixture.debugElement.query(By.directive(SelectToggleBtnDirective));
    // options = fixture.debugElement.queryAll(By.directive(OptionDirective));
  }));

  it('should create an instance', inject([TemplateCompiler], (templateCompiler: TemplateCompiler) => {
    expect(component).toBeTruthy();
  }));

  it('should compile template ', inject([TemplateCompiler], (templateCompiler: TemplateCompiler) => {
    templateCompiler.compile('/src/assets/auto-email-template.html', { id: 291, firstName: 'chase', lastName: 'gibbs' }, component.divViewContainerRef, []).subscribe((result: CompiledResultModel) => {
      expect(result.styles.substring(0, 20)).toBe(`<style id="styleId">`);   
    });
  }));

  it('should compile more complex template ', inject([TemplateCompiler], (templateCompiler: TemplateCompiler) => {
    templateCompiler.compile('/src/assets/complex-style-tag.html', { val: 'World' }, component.divViewContainerRef, []).subscribe((result: CompiledResultModel) => {
      expect(result.styles).toBeDefined();
      expect(result.styles.substring(0, 30)).toEqual('<style type="text/css" scoped>');
      expect(result.outerHTML).toBeDefined();
      expect(result.outerHTML.indexOf('style')).toEqual(-1);
    });
  }));

});

@Component({
  template:
    `<div #divViewContainerRef></div>`
})
export class MockWrapperComponent {
  @ViewChild('divViewContainerRef', { read: ViewContainerRef }) divViewContainerRef: ViewContainerRef;
  // @ViewChild('iframe', { read: ViewContainerRef }) iframeViewContainer: ViewContainerRef;

  constructor() { }

}

export function getBaseTemplate(){
  return `<style id="styleId">
	.className {
		height: 10px;
	}
</style>

<div id="name">
    <span *ngIf="model?.firstName">{{model.firstName}}</span>
    <span *ngIf="model?.lastName">&nbsp;{{model.lastName}}</span>
</div>

<h1>
    hello world!!
</h1>

<button class="btn btn-default">btn</button>`
} 

export function getComplexTemplate(){
  return `<!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <style type="text/css" scoped>
      p {
          margin: 10px 0;
          padding: 0;
      }
  
      .mcnPreviewText {
          display: none !important;
      }
  
      #outlook a {
          padding: 0;
      }
  
      a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
      }
  
      /*
    @tab Page
    @section Background Style
    @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
    */
      body, #bodyTable {
          /*@editable*/ background-color: #FAFAFA;
      }
  
      @media only screen and (min-width:768px) {
          .templateContainer {
              width: 600px !important;
          }
      }
  
      @media only screen and (max-width: 480px) {
          .mcnCartContainer, .mcnCaptionTopContent, .mcnRecContentContainer, .mcnCaptionBottomContent, .mcnTextContentContainer, .mcnBoxedTextContentContainer, .mcnImageGroupContentContainer, .mcnCaptionLeftTextContentContainer, .mcnCaptionRightTextContentContainer, .mcnCaptionLeftImageContentContainer, .mcnCaptionRightImageContentContainer, .mcnImageCardLeftTextContentContainer, .mcnImageCardRightTextContentContainer {
              max-width: 100% !important;
              width: 100% !important;
          }
      }
  
    </style>
  </head>
  <body>
    <h1>Hello {{model.val}}</h1>
  </body>
  </html>`
}