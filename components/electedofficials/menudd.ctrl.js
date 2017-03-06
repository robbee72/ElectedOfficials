var eooffices = angular
                .module('electedofficials', []);
        (function(electedofficials){
            'use strict';

        eooffices.controller( 'eoofficesCtrl', function($scope){
            $scope.offices = [
                "President",
                "Vice President", 
                "U.S. Senator", 
                "U.S. House of Represetative",
                "Governor",
                "State Senator",
                "State House of Representative", 
                "Mayor" 
                

            ];
        });

    })();


