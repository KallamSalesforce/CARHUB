({
	callme : function(component, event, helper) {
		var ev = event.getSource();
        var Lid = ev.getLocalId();
        var a = component.find("fnum").get("v.value");
        var b = component.find("snum").get("v.value");
        var r;
        
        if(Lid=='add'){
            r=parseInt(a)+parseInt(b);
            component.find("res").set("v.value",r);
        }
        else if(Lid=='sub'){
            r=parseInt(a)-parseInt(b);
            component.find("res").set("v.value",r);
        }
            else{
                r=parseInt(a)*parseInt(b);
            component.find("res").set("v.value",r);
            }
	}
})