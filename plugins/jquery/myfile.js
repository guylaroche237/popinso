$(document).ready(function () {
    var nb = function(elm){
        var obj = {};
        console.log(elm.val());
        console.log(elm.val().length);
        if (elm.val().length <3){
            obj.id=1;
            obj.sms="votre message doit avoir plus de 3 caracteres";

        }else if (elm.val.length > 9) {
            obj.id = 2;
            obj.sms = "votre message ne peut pas avoir plus de 9 caracteres";
        }else {
            obj.id = 3;
            obj.sms ="votre champ ne peut pas etre vide";
        }
        return obj;
    };
    $("#nom").focus(function () {
       $(this).next("span").html("vous etes entrain d'ecrivez votre nom");
    });
    $("#prenom").focus(function () {
        $(this).next("span").html("vous etes entrain d' ecrivez votre prenom");
    });

    $("#nom").blur(function () {


      $(this).next("span").html("element quitter");
      $(this).next("span").css("color","red");
    });

    $("#prenom").blur(function () {

        $(this).next("span").html("element quitter");
        $(this).next("span").css("color","red");
    });
    $("#sho").click(function () {
        $("#cible").show(4000);
    });
    $("#hid").click(function () {
        $("#cible").hide(4000);
    });
    $("#sld").click(function () {
        $("#cible").slideDown(4000);
    });
    $("#slp").click(function () {
        $("#cible").slideUp(4000);
    });
    
    $("#fd").click(function () {
        $("#cible").fadeIn(4000);
    });

    $("#fo").click(function () {
        $("#cible").fadeOut(4000);
    });

    $("#zebre").draggable();
});
