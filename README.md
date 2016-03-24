# Material Design for Angular 2

[![Build Status](https://travis-ci.org/angular/material2.svg?branch=master)](https://travis-ci.org/angular/material2)
[![Gitter](https://badges.gitter.im/angular/material2.svg)](https://gitter.im/angular/material2?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

This is the home for the Angular team's Material Design components built on top of Angular 2.

### Project status
The alpha has begun! See the [changelog](CHANGELOG.md) for more information.

Individual components can be installed with `npm`:
```bash
# The core module is required as a peerDependency for other components
npm install --save @angular2-material/core @angular2-material/checkbox
```

If you're using SystemJS as your module loader, your configuration for the angular-material
packages should look like:
```js
// The core package is required as a peerDependency for other components.
'@angular2-material/core': {
  format: 'cjs',
  defaultExtension: 'js',
  main: 'core.js'
},
'@angular2-material/checkbox': {
  format: 'cjs',
  defaultExtension: 'js',
  main: 'checkbox.js'
},
```

During alpha, breaking API and behavior changes will be occurring regularly.

Check out our [directory of design documents](https://github.com/angular/material2/wiki/Design-doc-directory) for more insight into our process.

We are still getting our CI infrastructure (tests, lint etc.) set up, as well as building out
the core library pieces that components will be built upon. If you'd like to contribute,
please look through the issues (which should be up-to-date on who is working on which features and
which pieces are blocked) and make a comment. 
Also see our [`Good for community contribution`](https://github.com/angular/material2/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+for+community+contribution%22) label.

#### Quick links
[Google group](https://groups.google.com/forum/#!forum/angular-material2),
[Contributing](https://github.com/angular/material2/blob/master/CONTRIBUTING.md)

## The goal of Angular Material
Our goal is to build a set of high-quality UI components built with Angular 2 and TypeScript, 
following the Material Design spec, that are consumable by both JavaScript and Dart. These 
components will serve as an example of how to write Angular code following best practices.

### What do we mean by "high-quality"?
* Internationalized and accessible so that all users can use them.
* Straightforward APIs that don't confuse developers.
* Behave as expected across a wide variety of use-cases without bugs.
* Behavior is well-tested with both unit and integration tests.
* Customizable within the bounds of the Material Design specification.
* Performance cost is minimized.
* Code is clean and well-documented to serve as an example for Angular devs.

## Browser and screen reader support
Angular Material supports the most recent two versions of all major browsers: 
Chrome (including Android), Firefox, Safari (including iOS), and IE11 / Edge

We also aim for great user experience with the following screen readers:
* NVDA and JAWS with IE / FF / Chrome (on Windows).
* VoiceOver with Safari on iOS and Safari / Chrome on OSX.
* TalkBack with Chrome on Android.
