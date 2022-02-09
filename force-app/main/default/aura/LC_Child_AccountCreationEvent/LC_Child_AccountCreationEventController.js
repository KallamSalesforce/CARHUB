({
	callMe : function(component, event, helper) {
		var newacc =component.get("v.newAccount");
        var evt = component.getEvent("rupom");
        evt.setParams({"acc":newacc});
        evt.fire();
        
	}
})