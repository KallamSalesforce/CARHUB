({
	callMe : function(component, event, helper) {
		var nmmm = component.get("v.nm");
        var evt = component.getEvent("second");
        evt.setParams({"empname":nmmm});
        evt.fire();
	}
})