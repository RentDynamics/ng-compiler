
[![Circle CI Badge][circleci-badge]][circleci-link]
[![codecov][codecov-image]][codecov-link]
[![Dependency Status][dependency-image]][dependency-link]
[![Dev Dependency Status][dev-dependency-image]][dev-dependency-link]
[![Peer Dependency Status][peer-dependency-image]][peer-dependency-link]
[![NPM Downloads][npm-downloads-image]][npm-downloads-link]
[![NPM Version][npm-version-image]][npm-version-link]
[![MIT License][npm-license-image]][npm-license-link]

## @rd/compiler [![Public or Private Repo][public-true-image]][public-true-link]


#### This module contains a simple easy to use angular2+ template compiler
It is useful when you need to compile any angular2+ template file directly to html, passing in a view model as a parameter, similar to $ngCompiler in angular.js!!


## Installation
```
npm install @rd/compiler --save

```

## Example(s)

### TemplateCompiler

```TypeScript

@Component({
  template:
    `<div #divViewContainerRef></div>`
})
export class TemplateCompilerExampleComponent {
  @ViewChild('divViewContainerRef', { read: ViewContainerRef }) divViewContainerRef: ViewContainerRef;

  compiledHtml: string;

  constructor(public templateCompiler: TemplateCompiler) { }

  ngOnInit(){
    this.templateCompiler.compile('/src/assets/auto-email-template.html', { id: 291, firstName: 'chase', lastName: 'gibbs' }, this.divViewContainerRef, [SharedModule]).subscribe((compiledResult: CompiledResultModel) => {
        this.compiledHtml = compiledResult.styles + compiledResult.outerHTML;
    });
  }

}
```
### /src/assets/auto-email-template.html

```html
<style id="styleId">
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

<button class="btn btn-default">btn</button>
```

## Contributing

In order to contribute to this package, please make any changes on your own feature branch and create a pull-request for review (see below for more info)

In order to release this package automatically, you must format the commit message properly so that when it is merged into master, it will semantically release the new changes based on commit msg type and previously tagged version. (by running `npm run commit` instead of `git commit`, it will run a interactive command-line utility which will ultimately format the commit messages properly for you)

Don't forget to expose any new additions publicly, ensure everything which is public is accessible via the public_api.ts

[-> Code review guidelines for this project](CODE_REVIEWS.md)

[-> Coding standards for this project](CODING_STANDARDS.md)

[-> Contribution guidelines for this project](CONTRIBUTING.md)

_powered by:_
https://rentdynamics.com +
https://angular.io


[code-reviews-link]: /CODE_REVIEWS.md
[npm-icon]: https://nodei.co/npm/@rd/compiler.svg?downloads=true
[npm-icon-link]: https://npmjs.org/package/@rd/compiler
[circleci-badge]: https://circleci.com/gh/RentDynamics/ng-compiler.svg?style=shield
[circleci-link]: https://circleci.com/gh/rentdynamics/ng-compiler/tree/master
[codecov-image]: https://codecov.io/gh/RentDynamics/ng-compiler/branch/master/graph/badge.svg
[codecov-link]: https://codecov.io/gh/RentDynamics/ng-compiler
[nsp-image]: https://nodesecurity.io/orgs/rent-dynamics/projects/d770bb34-240f-4533-a8f2-6e2ae859f4b3/badge
[nsp-link]: https://nodesecurity.io/orgs/rent-dynamics/projects/d770bb34-240f-4533-a8f2-6e2ae859f4b3
[dependency-image]: https://david-dm.org/RentDynamics/ng-compiler/status.svg
[dependency-link]: https://david-dm.org/RentDynamics/ng-compiler
[dev-dependency-image]: https://david-dm.org/RentDynamics/ng-compiler/dev-status.svg
[dev-dependency-link]: https://david-dm.org/RentDynamics/ng-compiler?type=dev
[peer-dependency-image]: https://david-dm.org/RentDynamics/ng-compiler/peer-status.svg
[peer-dependency-link]: https://david-dm.org/RentDynamics/ng-compiler?type=peer
[public-true-image]: https://img.shields.io/badge/public-true-yellow.svg
[public-true-link]: https://img.shields.io/badge/public-true-yellow.svg
[private-true-image]: https://img.shields.io/badge/private-true-green.svg
[private-true-link]: https://img.shields.io/badge/private-true-green.svg
[npm-version-image]: https://img.shields.io/npm/v/@rd/compiler.svg
[npm-version-link]: https://www.npmjs.com/package/@rd/compiler
[npm-downloads-image]: https://img.shields.io/npm/dm/@rd/compiler.svg
[npm-downloads-link]: http://npm-stat.com/charts.html?package=@rd/compiler&from=2018-03-01
[npm-license-image]: https://img.shields.io/npm/l/@rd/compiler.svg
[npm-license-link]: LICENSE
[license-link]: http://opensource.org/licenses/MIT
