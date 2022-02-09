({
	callme : function(component, event, helper) {
		var amt = component.get("v.pri");
        var ti = component.get("v.time");
        var rat = component.get("v.rate");
        var total = (amt*ti*rat)/100;
        
        
        if(total>10){
            component.set("v.flag",true);
                    }
        else{
            component.set("v.flag",false);
        }
        component.set("v.Res",total);
        
	}
})