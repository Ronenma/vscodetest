sap.ui.define([
    // "sap/ui/base/ManagedObject",
    // "sap/m/MessageToast",
    // "sap/m/Text",
    // "sap/ui/core/mvc/XMLView"
    "sap/ui/core/ComponentContainer"

], function (
    ComponentContainer
) {
    "use strict";

    new ComponentContainer ({
        name : "ronen.test",
        settings : {
            id : "WalkthroUgh"
        },
        async : true
    }).placeAt("content");

    // XMLView.create({
    //     viewName : "ronen.test.view.App"
    // }).then(function(oView){
    //     oView.placeAt("content");
    // });
    // alert("helllllllo");
    // new Text({
    //     text: "purchase"
    // }).placeAt("content");

    // MessageToast.show("ronen maman");
    // return ManagedObject.extend("ronen.test.webapp.index", {

    // });

});