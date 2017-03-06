(function() {

  "use strict";

  angular
    .module('electedofficials')
    .controller('newElectedofficialsController', function( $state, $scope, $mdSidenav, $mdDialog, $timeout, electedofficialsFactory) {


      var vm = this;

      vm.closeSidebar = closeSidebar;
      vm.saveElectedofficial = saveElectedofficial;

      vm.sidebarName = 'Add an Elected Official';



      // We need a watcher to trigger the sidenav
      // opening and closing
      $scope.$watch('sidenavOpen', function(sidenavOpen) {
        if(sidenavOpen === false) {
          $mdSidenav('left')
            .close()
            .then(function() {
              $state.go('electedofficials');
          });
        }
      });

      $timeout(function() {
        $mdSidenav('left').open();
      });


      function closeSidebar() {
        vm.electedofficial = {};
        $scope.sidenavOpen = false;
      }

      function saveElectedofficial(electedofficial) {
        if(electedofficial) {

          electedofficial.contact = {
            name: "Donald J Trump",
            website: "https://www.donaldjtrump.com",
            phone: "(555) 555-5555",
            email: "the donald@gmail.com"
          }


          $scope.$emit('newElectedofficial', electedofficial)
          $scope.sidenavOpen = false;
        }
      }
      
     
//      var eostates = angular.module('electedofficials', []);
//        (function(eostates){
//            'use strict';
//
//        eostates.controller( 'eostateCtrl', function($scope){
//            $scope.states = [
//                "United States",
//                "Alabama", 
//                "Alaska", 
//                "Arizona",
//                "California",
//                "Colorado",
//                "Connecticut", 
//                "Delaware", 
//                "Florida", 
//                "Georgia", 
//                "Hawaii", 
//                "Idaho", 
//                "Illinois", 
//                "Indiana", 
//                "Iowa", 
//                "Kansas", 
//                "Kentucky", 
//                "Louisiana", 
//                "Maine", 
//                "Maryland", 
//                "Massachusetts", 
//                "Michigan", 
//                "Minnesota", 
//                "Mississippi", 
//                "Missouri", 
//                "Montana", 
//                "Nebraska", 
//                "Nevada", 
//                "New Hampshire", 
//                "New Jersey", 
//                "New Mexico", 
//                "New York", 
//                "North Carolina", 
//                "North Dakota", 
//                "Ohio", 
//                "Oklahoma", 
//                "Oregon", 
//                "Pennsylvania", 
//                "Rhode Island", 
//                "South Carolina", 
//                "South Dakota", 
//                "Tennessee", 
//                "Texas", 
//                "Utah", 
//                "Vermont", 
//                "Virginia", 
//                "Washington", 
//                "West Virginia", 
//                "Wisconsin", 
//                "Wyoming"
//
//            ];
//            $scope.selectedStates = 'United States';
//            });
//       });
    });

})();
