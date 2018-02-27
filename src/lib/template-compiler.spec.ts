/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AfterViewInit, Component, ViewChild, DebugElement, ViewContainerRef } from '@angular/core';

import { RdAngularCompilerModule } from './compiler.module';
import { CompiledResultModel } from './compiled-result.model';
import { TemplateCompiler } from './template-compiler';

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

  beforeEach(() => {
    // toggleBtn = fixture.debugElement.query(By.directive(SelectToggleBtnDirective));
    // options = fixture.debugElement.queryAll(By.directive(OptionDirective));
  });

  it('should create an instance', inject([TemplateCompiler], (templateCompiler: TemplateCompiler) => {
    expect(component).toBeTruthy();
  }));

  it('should compile template ', inject([TemplateCompiler], (templateCompiler: TemplateCompiler) => {
    templateCompiler.compile('/base/dist/assets/auto-email-template.html', { id: 291, firstName: 'chase', lastName: 'gibbs' }, component.divViewContainerRef, []).subscribe((result: CompiledResultModel) => {
      console.log('@rd/compiler.compiledResult', result);
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
