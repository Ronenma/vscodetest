sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/core/Fragment",
	"sap/ui/model/Sorter"
], function (
	Controller,
	ResourceModel,
	Fragment,
	Sorter) {
	"use strict";
	return Controller.extend("ronen.test.controller.App", {
		/**
		 * @override
		 */

		onInit: function () {
			// set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "ronen.test.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},



		onShowHello: function () {
			var oView = this.getView();
			alert("blabla");

		},
		onSortConfirm: function (oEvent) {

			/*jshint -W087 */
			debugger;
			var oSortItem = oEvent.getParameter("sortItem");
			var sColumnPath = "Eblen";
			var bDescending = oEvent.getParameter("sortDescending");
			var aSorters = [];
			if (oSortItem) {
				sColumnPath = oSortItem.getKey();
			}
			 aSorters.push(new Sorter (sColumnPath,bDescending));

			var aList = this.byId("kkk");
			var oBinding = aList.getBinding("items");
			oBinding.sort(aSorters);


		},


		onShowDialog: function () {

			// var oView = this.getView();

			// // create dialog lazily
			// if (!this.pDialog) {
			// 	this.pDialog = Fragment.load({
			// 		// id: oView.getId(),
			// 		id:"helloDialog",
			// 		name: "ronen.test.view.Hello",
			// 		controller : this
			// 	}).then(function (oDialog) {
			// 		// connect dialog to the root view of this component (models, lifecycle)
			// 		oView.addDependent(oDialog);
			// 		return oDialog;
			// 	});
			// } 
			// this.pDialog.then(function(oDialog) {
			// 	oDialog.open();

			// });



			// if(!this.showFragment) {
			// 	this.showFragment = sap.ui.xmlfragment("ronen.test.view.Sort", this);
			// 	this.showFragment.open();
			// }


			var oView = this.getView();
			if (!this.byId("sortDialog")) {


				Fragment.load({
					id: oView.getId(),
					name: "ronen.test.view.Sort",
					controller: this
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					oDialog.open();

				});
			} else {
				this.byId("sortDialog").open();
			}
			// if(!this.showFragment) {
			// 	this.showFragment = sap.ui.xmlfragment("ronen.test.view.Hello", this);
			// 	this.showFragment.open();
			// }
		},
		onCloseDialog: function () {
			// note: We don't need to chain to the pDialog promise, since this event-handler
			// is only called from within the loaded dialog itself.
			// this.byId("helloDialog").close();
			// alert("yyy");
			// this.showFragment.close();
		},

	});


});