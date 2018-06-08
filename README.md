[![CircleCI](https://circleci.com/gh/RentDynamics/ng-compiler.svg?style=shield)](https://circleci.com/gh/rentdynamics/ng-compiler)
[![David](https://img.shields.io/david/rentdynamics/ng-compiler.svg)](https://github.com/rentdynamics/ng-compiler)

## @rd/compiler

(https://alligator.io/angular/angular-6/)[https://alligator.io/angular/angular-6/]

Chase-Gibbons-MacBook-Pro:ng-compiler chasegibbons$ ng update
    We analyzed your package.json, there are some packages to update:

      Name                               Version                  Command to update
     --------------------------------------------------------------------------------
      @angular/core                      5.2.9 -> 6.0.4           ng update @angular/core
      rxjs                               5.5.5 -> 6.2.0           ng update rxjs


    There might be additional packages that are outdated.
    Or run ng update --all to try to update all at the same time.

Chase-Gibbons-MacBook-Pro:ng-compiler chasegibbons$ ng update @angular/core

    Updating package.json with dependency zone.js @ "0.8.26" (was "0.8.18")...
    Updating package.json with dependency rxjs @ "6.2.0" (was "5.5.5")...
    Updating package.json with dependency @angular/common @ "6.0.4" (was "5.2.9")...
    Updating package.json with dependency @angular/platform-browser-dynamic @ "6.0.4" (was "5.2.9")...
    Updating package.json with dependency typescript @ "2.7.2" (was "2.4.2")...
    Updating package.json with dependency @angular/core @ "6.0.4" (was "5.2.9")...
    Updating package.json with dependency @angular/compiler-cli @ "6.0.4" (was "5.2.9")...
    Updating package.json with dependency @angular/http @ "6.0.4" (was "5.2.9")...
    Updating package.json with dependency @angular/forms @ "6.0.4" (was "5.2.9")...
    Updating package.json with dependency @angular/platform-browser @ "6.0.4" (was "5.2.9")...
    Updating package.json with dependency @angular/compiler @ "6.0.4" (was "5.2.9")...
UPDATE package.json (2768 bytes)
npm WARN deprecated gulp-util@3.0.8: gulp-util is deprecated - replace it, following the guidelines at https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
npm WARN deprecated graceful-fs@3.0.11: please upgrade to graceful-fs 4 for compatibility with current and futureversions of Node.js
npm WARN deprecated istanbul-lib-hook@1.2.1: 1.2.0 should have been a major version bump
npm WARN deprecated gulp-util@3.0.7: gulp-util is deprecated - replace it, following the guidelines at https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js

> husky@0.14.3 uninstall /Users/chasegibbons/Repos/ng-compiler/node_modules/husky
> node ./bin/uninstall.js

husky
uninstalling Git hooks
done

npm WARN gentlyRm not removing /Users/chasegibbons/Repos/ng-compiler/node_modules/.bin/remap-istanbul as it wasn't installed by /Users/chasegibbons/Repos/ng-compiler/node_modules/remap-istanbul
npm WARN gentlyRm not removing /Users/chasegibbons/Repos/ng-compiler/node_modules/.bin/semver as it wasn't installed by /Users/chasegibbons/Repos/ng-compiler/node_modules/semver
npm WARN gentlyRm not removing /Users/chasegibbons/Repos/ng-compiler/node_modules/.bin/nopt as it wasn't installed by /Users/chasegibbons/Repos/ng-compiler/node_modules/nopt
npm WARN gentlyRm not removing /Users/chasegibbons/Repos/ng-compiler/node_modules/.bin/mkdirp as it wasn't installed by /Users/chasegibbons/Repos/ng-compiler/node_modules/mkdirp
npm WARN gentlyRm not removing /Users/chasegibbons/Repos/ng-compiler/node_modules/.bin/mime as it wasn't installed by /Users/chasegibbons/Repos/ng-compiler/node_modules/mime
npm WARN gentlyRm not removing /Users/chasegibbons/Repos/ng-compiler/node_modules/gulp/node_modules/.bin/semver as it wasn't installed by /Users/chasegibbons/Repos/ng-compiler/node_modules/gulp/node_modules/semver
npm WARN gentlyRm not removing /Users/chasegibbons/Repos/ng-compiler/node_modules/fsevents/node_modules/.bin/node-pre-gyp as it wasn't installed by /Users/chasegibbons/Repos/ng-compiler/node_modules/fsevents/node_modules/node-pre-gyp

> fsevents@1.2.4 install /Users/chasegibbons/Repos/ng-compiler/node_modules/fsevents
> node install

[fsevents] Success: "/Users/chasegibbons/Repos/ng-compiler/node_modules/fsevents/lib/binding/Release/node-v59-darwin-x64/fse.node" is installed via remote

> phantomjs-prebuilt@2.1.16 install /Users/chasegibbons/Repos/ng-compiler/node_modules/phantomjs-prebuilt
> node install.js

PhantomJS not found on PATH
Download already available at /var/folders/y_/5sps54kx7gs7gzwns3cp4tn00000gp/T/phantomjs/phantomjs-2.1.1-macosx.zip
Verified checksum of previously downloaded file
Extracting zip contents
Removing /Users/chasegibbons/Repos/ng-compiler/node_modules/phantomjs-prebuilt/lib/phantom
Copying extracted folder /var/folders/y_/5sps54kx7gs7gzwns3cp4tn00000gp/T/phantomjs/phantomjs-2.1.1-macosx.zip-extract-1528500643999/phantomjs-2.1.1-macosx -> /Users/chasegibbons/Repos/ng-compiler/node_modules/phantomjs-prebuilt/lib/phantom
Writing location.js file
Done. Phantomjs binary available at /Users/chasegibbons/Repos/ng-compiler/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs

> husky@0.14.3 install /Users/chasegibbons/Repos/ng-compiler/node_modules/husky
> node ./bin/install.js

husky
setting up Git hooks
done


> spawn-sync@1.0.15 postinstall /Users/chasegibbons/Repos/ng-compiler/node_modules/spawn-sync
> node postinstall


> parse-domain@2.1.1 postinstall /Users/chasegibbons/Repos/ng-compiler/node_modules/parse-domain
> node scripts/build-tries.js

Downloading public suffix list from https://publicsuffix.org/list/public_suffix_list.dat... ok
Writing /Users/chasegibbons/Repos/ng-compiler/node_modules/parse-domain/build/tries/current/icann.complete.json... ok
Writing /Users/chasegibbons/Repos/ng-compiler/node_modules/parse-domain/build/tries/current/icann.light.json... ok
Writing /Users/chasegibbons/Repos/ng-compiler/node_modules/parse-domain/build/tries/current/private.complete.json... ok
Running sanity check... ok
npm WARN bootstrap@4.1.1 requires a peer of popper.js@^1.14.3 but none is installed. You must install peer dependencies yourself.

added 218 packages, removed 206 packages and updated 862 packages in 28.88s
Cannot find module '@angular-devkit/schematics'
Chase-Gibbons-MacBook-Pro:ng-compiler chasegibbons$ npm i --save-dev @angular-devkit/schematics
npm WARN bootstrap@4.1.1 requires a peer of popper.js@^1.14.3 but none is installed. You must install peer dependencies yourself.

+ @angular-devkit/schematics@0.6.8
added 40 packages and removed 8 packages in 6.543s

Chase-Gibbons-MacBook-Pro:ng-compiler chasegibbons$ rxjs-5-to-6-migrate -p tsconfig-spec.upgrade.json

Running the automatic migrations. Please, be patient and wait until the execution completes.
Found and fixed the following deprecations:

Fixed 3 error(s) in /Users/chasegibbons/Repos/ng-compiler/src/lib/template-compiler.ts

WARNING: /Users/chasegibbons/Repos/ng-compiler/src/lib/template-compiler.ts[4, 1]: duplicate RxJS import

Chase-Gibbons-MacBook-Pro:ng-compiler chasegibbons$ rxjs-5-to-6-migrate -p tsconfig-spec.upgrade.json


Running the automatic migrations. Please, be patient and wait until the execution completes.
Cannot find any possible migrations

Chase-Gibbons-MacBook-Pro:ng-compiler chasegibbons$ rxjs-5-to-6-migrate -p tsconfig.upgrade.json


Running the automatic migrations. Please, be patient and wait until the execution completes.
Cannot find any possible migrations

Chase-Gibbons-MacBook-Pro:ng-compiler chasegibbons$ ./build.sh
/Users/chasegibbons/Repos/ng-compiler


[17:34:28] Using gulpfile ~/Repos/ng-compiler/.gulpfile.js
[17:34:28] Starting 'inline-templates'...
[17:34:28] Finished 'inline-templates' after 155 ms

dist/public_api.js → dist/bundles/compiler.umd.js...
created dist/bundles/compiler.umd.js in 61ms

dist/public_api.js → dist/bundles/compiler.umd.min.js...
created dist/bundles/compiler.umd.min.js in 182ms
Chase-Gibbons-MacBook-Pro:ng-compiler chasegibbons$ ./test.sh
[17:34:41] Using gulpfile ~/Repos/ng-compiler/.gulpfile.js
[17:34:41] Starting 'inline-templates'...
[17:34:42] Finished 'inline-templates' after 136 ms
08 06 2018 17:34:45.973:WARN [watcher]: Pattern "/Users/chasegibbons/Repos/ng-compiler/node_modules/ckeditor/**/*" does not match any file.
08 06 2018 17:34:46.263:WARN [watcher]: Pattern "/Users/chasegibbons/Repos/ng-compiler/node_modules/@rd/**/*" does not match any file.
08 06 2018 17:34:47.892:WARN [karma]: No captured browser, open http://localhost:9876/
08 06 2018 17:34:47.936:INFO [karma]: Karma v1.7.1 server started at http://0.0.0.0:9876/
08 06 2018 17:34:47.936:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
08 06 2018 17:34:47.953:INFO [launcher]: Starting browser PhantomJS
08 06 2018 17:34:49.084:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket LaUbOT3rPjAZW3XDAAAA with id27683485
PhantomJS 2.1.1 (Mac OS X 0.0.0) ERROR
  {
    "stack": "(SystemJS) XHR error loading http://localhost:9876/node_modules/rxjs/operators.js\n\tError loading http://localhost:9876/node_modules/rxjs/operators.js as \"rxjs/operators\" from http://localhost:9876/node_modules/@angular/core/bundles/core.umd.js",
    "originalErr": {},
    "line": 791,
    "sourceURL": "node_modules/systemjs/dist/system.src.js"
  }



^CChase-Gibbons-MacBook-Pro:ng-compiler chasegibbons$ ./test.sh


[17:35:40] Using gulpfile ~/Repos/ng-compiler/.gulpfile.js
[17:35:40] Starting 'inline-templates'...
[17:35:40] Finished 'inline-templates' after 142 ms
08 06 2018 17:35:44.064:WARN [watcher]: Pattern "/Users/chasegibbons/Repos/ng-compiler/node_modules/ckeditor/**/*" does not match any file.
08 06 2018 17:35:44.351:WARN [watcher]: Pattern "/Users/chasegibbons/Repos/ng-compiler/node_modules/@rd/**/*" does not match any file.
08 06 2018 17:35:45.701:WARN [karma]: No captured browser, open http://localhost:9876/
08 06 2018 17:35:45.745:INFO [karma]: Karma v1.7.1 server started at http://0.0.0.0:9876/
08 06 2018 17:35:45.745:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
08 06 2018 17:35:45.767:INFO [launcher]: Starting browser PhantomJS
08 06 2018 17:35:46.858:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket x2W4AFQsxMfsmf3xAAAA with id60183364
LOG: '@rd/compiler.compiledResult', <dynamic-component><div id="name"><!--bindings={
  "ng-reflect-ng-if": "chase"
}--><span>chase</span><!--bindings={
  "ng-reflect-ng-if": "gibbs"
}--><span>&nbsp;gibbs</span></div><h1> hello world!!
</h1><button class="btn btn-default">btn</button></dynamic-component>
PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 2 of 2 SUCCESS (0.145 secs / 0.122 secs)
^CChase-Gibbons-MacBook-Pro:ng-compiler chasegibbons$ git checkout -b angular-v6