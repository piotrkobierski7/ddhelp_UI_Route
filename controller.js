var ceny={
            cena_pochodnia:75,
            cena_jedzenie:75,
            cena_lopata:250,
            cena_woda_swiecona:150,
            cena_wytrych:200,
            cena_ziola_medyczne:200,
            cena_odrutka:150,
            cena_bandaz:150
};

function licz_koszt(poch,jedz,lop,wod,wyt,zio,odt,ban) {
    return  ceny.cena_pochodnia*poch + ceny.cena_jedzenie*jedz + ceny.cena_lopata*lop + ceny.cena_woda_swiecona*wod + 
            ceny.cena_wytrych*wyt + ceny.cena_ziola_medyczne*zio + ceny.cena_odrutka*odt + ceny.cena_bandaz*ban;           
}
var app = angular.module("myApp", ["ui.router"]);
app.config( function($stateProvider, $urlRouterProvider) {
    
    $stateProvider

    .state("START", {
        url:'/',            
        templateUrl : "START/START.htm"
    })

        //ruiny
    .state("Ruiny_Krotka_Standardowy", {
        templateUrl : "Ruiny_Krotka_Standardowy/Ruiny_Krotka_Standardowy.htm",
        controller  : "r_k_s"
    })

    .state("Ruiny_Krotka_Niebezpieczny", {
        templateUrl : "Ruiny_Krotka_Niebezpieczny/Ruiny_Krotka_Niebezpieczny.htm",
        controller  : "r_k_n"
    })

    .state("Ruiny_Srednia_Standardowy", {
        templateUrl : "Ruiny_Srednia_Standardowy/Ruiny_Srednia_Standardowy.htm",
        controller  : "r_s_s"
    })
    .state("Ruiny_Srednia_Niebezpieczny", {
        templateUrl : "Ruiny_Srednia_Niebezpieczny/Ruiny_Srednia_Niebezpieczny.htm",
        controller  : "r_s_n"
    })
    .state("Ruiny_Dluga_Standardowy", {
        templateUrl : "Ruiny_Srednia_Standardowy/Ruiny_Srednia_Standardowy.htm",
        controller  : "r_d_s"
    })
    .state("Ruiny_Dluga_Niebezpieczny", {
        templateUrl : "Ruiny_Srednia_Niebezpieczny/Ruiny_Srednia_Niebezpieczny.htm",
        controller  : "r_d_n"
    })

//norowisko
    .state("Norowisko_Krotka_Standardowy", {
        templateUrl : "Norowisko_Krotka_Standardowy/Norowisko_Krotka_Standardowy.htm",
        controller  : "n_k_s"
    })
    .state("Norowisko_Krotka_Niebezpieczny", {
        templateUrl : "Norowisko_Krotka_Niebezpieczny/Norowisko_Krotka_Niebezpieczny.htm",
        controller  : "n_k_n"
    })

    .state("Norowisko_Srednia_Standardowy", {
        templateUrl : "Norowisko_Srednia_Standardowy/Norowisko_Srednia_Standardowy.htm",
        controller  : "n_s_s"
    })
    .state("Norowisko_Srednia_Niebezpieczny", {
        templateUrl : "Norowisko_Srednia_Niebezpieczny/Norowisko_Srednia_Niebezpieczny.htm",
        controller  : "n_s_n"
    })

    .state("Norowisko_Dluga_Standardowy", {
        templateUrl : "Norowisko_Dluga_Standardowy/Norowisko_Dluga_Standardowy.htm",
        controller  : "n_d_s"
    })
    .state("Norowisko_Dluga_Niebezpieczny", {
        templateUrl : "Norowisko_Dluga_Niebezpieczny/Norowisko_Dluga_Niebezpieczny.htm",
        controller  : "n_d_n"
    })


    //knieja
    .state("Knieja_Krotka_Standardowy", {
        templateUrl : "Knieja_Krotka_Standardowy/Knieja_Krotka_Standardowy.htm",
        controller  : "k_k_s"
    })
    .state("Knieja_Krotka_Niebezpieczny", {
        templateUrl : "Knieja_Krotka_Niebezpieczny/Knieja_Krotka_Niebezpieczny.htm",
        controller  : "k_k_n"
    })

    .state("Knieja_Srednia_Standardowy", {
        templateUrl : "Knieja_Srednia_Standardowy/Knieja_Srednia_Standardowy.htm",
        controller  : "k_s_s"
    })
    .state("Knieja_Srednia_Niebezpieczny", {
        templateUrl : "Knieja_Srednia_Niebezpieczny/Knieja_Srednia_Niebezpieczny.htm",
        controller  : "k_s_n"
    })

    .state("Knieja_Dluga_Standardowy", {
        templateUrl : "Knieja_Dluga_Standardowy/Knieja_Dluga_Standardowy.htm",
        controller  : "k_d_s"
    })
    .state("Knieja_Dluga_Niebezpieczny", {
        templateUrl : "Knieja_Dluga_Niebezpieczny/Knieja_Dluga_Niebezpieczny.htm",
        controller  : "k_d_n"
    })
    

    //zatoka
    .state("Zatoka_Krotka_Standardowy", {
        templateUrl : "Zatoka_Krotka_Standardowy/Zatoka_Krotka_Standardowy.htm",
        controller  : "z_k_s"
    })
    .state("Zatoka_Krotka_Niebezpieczny", {
        templateUrl : "Zatoka_Krotka_Niebezpieczny/Zatoka_Krotka_Niebezpieczny.htm",
        controller  : "z_k_n"

    })

    .state("Zatoka_Srednia_Standardowy", {
        templateUrl : "Zatoka_Srednia_Standardowy/Zatoka_Srednia_Standardowy.htm",
        controller  : "z_s_s"
    })
    .state("Zatoka_Srednia_Niebezpieczny", {
        templateUrl : "Zatoka_Srednia_Niebezpieczny/Zatoka_Srednia_Niebezpieczny.htm",
        controller  : "z_s_n"
    })

    .state("Zatoka_Dluga_Standardowy", {
        templateUrl : "Zatoka_Dluga_Standardowy/Zatoka_Dluga_Standardowy.htm",
        controller  : "z_d_s"
    })
    .state("Zatoka_Dluga_Niebezpieczny", {
        templateUrl : "Zatoka_Dluga_Niebezpieczny/Zatoka_Dluga_Niebezpieczny.htm",
        controller  : "z_d_n"
    })


    $urlRouterProvider.otherwise("/", {
    });

});

//ruiny controllers
    app.controller("r_k_s", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=8;
                var b=$scope.ekw_jedzenie=12;
                var c=$scope.ekw_lopata=2;
                var d=$scope.ekw_woda_swiecona=2;
                var e=$scope.ekw_wytrych=1;
                var f=$scope.ekw_ziola_medyczne=1;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=1;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("r_k_n", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=0;
                var b=$scope.ekw_jedzenie=16;
                var c=$scope.ekw_lopata=2;
                var d=$scope.ekw_woda_swiecona=2;
                var e=$scope.ekw_wytrych=2;
                var f=$scope.ekw_ziola_medyczne=0;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=0;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("r_s_s", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=13;
                var b=$scope.ekw_jedzenie=18;
                var c=$scope.ekw_lopata=3;
                var d=$scope.ekw_woda_swiecona=3;
                var e=$scope.ekw_wytrych=2;
                var f=$scope.ekw_ziola_medyczne=2;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=2;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("r_s_n", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=0;
                var b=$scope.ekw_jedzenie=22;
                var c=$scope.ekw_lopata=3;
                var d=$scope.ekw_woda_swiecona=3;
                var e=$scope.ekw_wytrych=2;
                var f=$scope.ekw_ziola_medyczne=0;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=0;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("r_d_s", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=16;
                var b=$scope.ekw_jedzenie=20;
                var c=$scope.ekw_lopata=4;
                var d=$scope.ekw_woda_swiecona=4;
                var e=$scope.ekw_wytrych=3;
                var f=$scope.ekw_ziola_medyczne=3;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=3;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("r_d_n", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=0;
                var b=$scope.ekw_jedzenie=24;
                var c=$scope.ekw_lopata=4;
                var d=$scope.ekw_woda_swiecona=4;
                var e=$scope.ekw_wytrych=3;
                var f=$scope.ekw_ziola_medyczne=0;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=0;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });



//norowisko controllers
    app.controller("n_k_s", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=10;
                var b=$scope.ekw_jedzenie=12;
                var c=$scope.ekw_lopata=2;
                var d=$scope.ekw_woda_swiecona=2;
                var e=$scope.ekw_wytrych=2;
                var f=$scope.ekw_ziola_medyczne=3;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=1;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("n_k_n", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=0;
                var b=$scope.ekw_jedzenie=16;
                var c=$scope.ekw_lopata=2;
                var d=$scope.ekw_woda_swiecona=2;
                var e=$scope.ekw_wytrych=2;
                var f=$scope.ekw_ziola_medyczne=3;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=0;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("n_s_s", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=16;
                var b=$scope.ekw_jedzenie=18;
                var c=$scope.ekw_lopata=3;
                var d=$scope.ekw_woda_swiecona=3;
                var e=$scope.ekw_wytrych=3;
                var f=$scope.ekw_ziola_medyczne=4;
                var g=$scope.ekw_odrutka=1;
                var h=$scope.ekw_bandaz=2;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("n_s_n", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=0;
                var b=$scope.ekw_jedzenie=22;
                var c=$scope.ekw_lopata=3;
                var d=$scope.ekw_woda_swiecona=3;
                var e=$scope.ekw_wytrych=3;
                var f=$scope.ekw_ziola_medyczne=4;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=0;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("n_d_s", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=20;
                var b=$scope.ekw_jedzenie=20;
                var c=$scope.ekw_lopata=4;
                var d=$scope.ekw_woda_swiecona=4;
                var e=$scope.ekw_wytrych=3;
                var f=$scope.ekw_ziola_medyczne=5;
                var g=$scope.ekw_odrutka=1;
                var h=$scope.ekw_bandaz=3;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("n_d_n", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=0;
                var b=$scope.ekw_jedzenie=24;
                var c=$scope.ekw_lopata=4;
                var d=$scope.ekw_woda_swiecona=4;
                var e=$scope.ekw_wytrych=3;
                var f=$scope.ekw_ziola_medyczne=4;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=0;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });


//knieja controllers
    app.controller("k_k_s", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=8;
                var b=$scope.ekw_jedzenie=12;
                var c=$scope.ekw_lopata=3;
                var d=$scope.ekw_woda_swiecona=1;
                var e=$scope.ekw_wytrych=1;
                var f=$scope.ekw_ziola_medyczne=1;
                var g=$scope.ekw_odrutka=2;
                var h=$scope.ekw_bandaz=2;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("k_k_n", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=0;
                var b=$scope.ekw_jedzenie=16;
                var c=$scope.ekw_lopata=3;
                var d=$scope.ekw_woda_swiecona=2;
                var e=$scope.ekw_wytrych=2;
                var f=$scope.ekw_ziola_medyczne=0;
                var g=$scope.ekw_odrutka=2;
                var h=$scope.ekw_bandaz=1;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("k_s_s", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=13;
                var b=$scope.ekw_jedzenie=18;
                var c=$scope.ekw_lopata=5;
                var d=$scope.ekw_woda_swiecona=2;
                var e=$scope.ekw_wytrych=2;
                var f=$scope.ekw_ziola_medyczne=2;
                var g=$scope.ekw_odrutka=3;
                var h=$scope.ekw_bandaz=3;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("k_s_n", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=0;
                var b=$scope.ekw_jedzenie=22;
                var c=$scope.ekw_lopata=5;
                var d=$scope.ekw_woda_swiecona=3;
                var e=$scope.ekw_wytrych=2;
                var f=$scope.ekw_ziola_medyczne=0;
                var g=$scope.ekw_odrutka=3;
                var h=$scope.ekw_bandaz=1;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("k_d_s", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=16;
                var b=$scope.ekw_jedzenie=20;
                var c=$scope.ekw_lopata=6;
                var d=$scope.ekw_woda_swiecona=3;
                var e=$scope.ekw_wytrych=2;
                var f=$scope.ekw_ziola_medyczne=2;
                var g=$scope.ekw_odrutka=4;
                var h=$scope.ekw_bandaz=4;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("k_d_n", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=0;
                var b=$scope.ekw_jedzenie=24;
                var c=$scope.ekw_lopata=6;
                var d=$scope.ekw_woda_swiecona=3;
                var e=$scope.ekw_wytrych=2;
                var f=$scope.ekw_ziola_medyczne=1;
                var g=$scope.ekw_odrutka=4;
                var h=$scope.ekw_bandaz=0;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

//zatoka controllers
    app.controller("z_k_s", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=8;
                var b=$scope.ekw_jedzenie=12;
                var c=$scope.ekw_lopata=3;
                var d=$scope.ekw_woda_swiecona=0;
                var e=$scope.ekw_wytrych=1;
                var f=$scope.ekw_ziola_medyczne=2;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=2;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("z_k_n", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=0;
                var b=$scope.ekw_jedzenie=16;
                var c=$scope.ekw_lopata=3;
                var d=$scope.ekw_woda_swiecona=1;
                var e=$scope.ekw_wytrych=1;
                var f=$scope.ekw_ziola_medyczne=2;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=0;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("z_s_s", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=13;
                var b=$scope.ekw_jedzenie=18;
                var c=$scope.ekw_lopata=5;
                var d=$scope.ekw_woda_swiecona=2;
                var e=$scope.ekw_wytrych=2;
                var f=$scope.ekw_ziola_medyczne=3;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=4;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("z_s_n", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=0;
                var b=$scope.ekw_jedzenie=24;
                var c=$scope.ekw_lopata=5;
                var d=$scope.ekw_woda_swiecona=2;
                var e=$scope.ekw_wytrych=2;
                var f=$scope.ekw_ziola_medyczne=3;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=0;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("z_d_s", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=16;
                var b=$scope.ekw_jedzenie=20;
                var c=$scope.ekw_lopata=6;
                var d=$scope.ekw_woda_swiecona=1;
                var e=$scope.ekw_wytrych=3;
                var f=$scope.ekw_ziola_medyczne=4;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=6;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });

    app.controller("z_d_n", function($scope, $stateParams){
                var a=$scope.ekw_pochodnia=0;
                var b=$scope.ekw_jedzenie=24;
                var c=$scope.ekw_lopata=6;
                var d=$scope.ekw_woda_swiecona=2;
                var e=$scope.ekw_wytrych=3;
                var f=$scope.ekw_ziola_medyczne=4;
                var g=$scope.ekw_odrutka=0;
                var h=$scope.ekw_bandaz=0;
                $scope.ceny=ceny;
                $scope.cena_calosc=licz_koszt(a,b,c,d,e,f,g,h);
            });
            