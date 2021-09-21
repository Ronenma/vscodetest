sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("ronen.test.controller.Test", {

    	onPress : function () {
			// var oView = this.getView();
			alert("bibi is the king");
        }
			   
	});
});