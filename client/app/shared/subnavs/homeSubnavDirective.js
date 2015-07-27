(function() {
  'use strict';
  angular.module('homeSubnavDirective', [])
  .directive('homeSubnav', function() {
      return {
        restrict: 'A',
        controller: function ($scope, $rootScope) {
          /* By default, recent posts are shown.  When user clicks top posts, $scope.recent is set to false.  This variable is used to determine which category list (Recent vs. Top Posts) should be underscored */
          $scope.category = 'recent';

          $scope.updateHomePosts = function(list) {
            if ($scope.category !== list) {
              $scope.category = list;
              $rootScope.$emit('changeHomePostList', list);
            }
          };
        }
      };
    });
})();
