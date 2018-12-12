var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    var users = [{
            userName: 'jerin',
            password: '123'
        },
        {
            userName: 'geethu',
            password: '124'
        },
        {
            userName: 'admin',
            password: 'admin'
        }
    ]
    $scope.person = {
        userName: "",
        password: ""
    };
    $scope.LoginBtn = function(){
            
        console.log(users.length);
        for(let i=0;i<=users.length;i++){
        
            if(this.person.userName == users[i].userName && this.person.password == users[i].password)
            {
                alert("login successfully");
            }
        }
    }
})