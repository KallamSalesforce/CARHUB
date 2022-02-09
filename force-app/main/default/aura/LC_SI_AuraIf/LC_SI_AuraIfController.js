({
	callme : function(component, event, helper) {
		var amt = component.get("v.Principle");
        var time = component.get("v.Time");
        var rate = component.get("v.Rate");
        var res = (amt*time*rate)/100;
        component.set("v.Interest",res);
	}
})