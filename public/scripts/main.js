/*jshint unused: vars */
require.config({
  paths: {
    angular: '../../bower_components/angular/angular',
    'angular-animate': '../../bower_components/angular-animate/angular-animate',
    'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
    'angular-route': '../../bower_components/angular-route/angular-route',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    angular_sanitize:[
      'angular'
    ],
    'angular-route': [
      'angular',
    ],
    'scroll_glue':[
      'angular'
    ],
    'angular-cookies': [
      'angular'
    ],
    'angular-animate': [
      'angular'
    ],
    'angular-mocks': {
      deps: [
        'angular'
      ],
      exports: 'angular.mock'
    }
  },
  priority: [
    'angular'
  ],
  packages: [

  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'angular-route',
  'angular-cookies',
  'angular-animate'
], function(angular, app, ngRoutes, ngCookies, ngAnimate) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
