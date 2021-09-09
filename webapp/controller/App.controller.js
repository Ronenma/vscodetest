sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/resource/ResourceModel"
], function (
	Controller, ResourceModel
) {
	"use strict";
	return Controller.extend("ronen.test.controller.App", {
		/**
		 * @override
		 */
		onInit: function(){
				// set i18n model on view
				var i18nModel = new ResourceModel({
					bundleName: "ronen.test.i18n.i18n"
				});
				this.getView().setModel(i18nModel, "i18n");
		},
		
		
		
		onShowHello: function () {
			var oView = this.getView();
			alert("blabla");
			
		}
	
	});
	
	
});