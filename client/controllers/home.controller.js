(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('HomeController', HomeController);
 
    HomeController.$inject = ['$location', 'AuthenticationService', '$http'];
    function HomeController($location, AuthenticationService, $http) {
        var vm = this;
 
        vm.send = send;
        vm.topicClick = topicClick;
 
        (function initController() {
            updateView();
        })();
        
        function send() {
            var url = 'https://pilvi-forum-projekti-culinarist.c9users.io/topics'
            
            var data = {
        				name : vm.topic.title,
        				description : vm.topic.msg
        		    };
        		    
            var header = { headers: { 'Content-Type': 'application/json' } }
            
            $http.post(url, data, header)
            .then(function mySuccess(response) {
                updateView();
            }, function myError(response) {
                console.log("Error");
            });
            
            vm.topic.title = "";
        	vm.topic.msg = "";
        };
        
        function updateView() {
            var myUrl = 'https://pilvi-forum-projekti-culinarist.c9users.io/topics';
            $http.get(myUrl)
            .then(function (response) {
                vm.topics = response.data;
            }, function myError(response) {
                console.log("Error");
            });
        }
        
        function topicClick() {
            console.log("Topic Clicked");
            alert("Topic Clicked");
        }
    }
 
})();