({
	AddFun : function(component, event, helper) {
		var a= component.get("v.firstNum");
        var b= component.get("v.SecondNum");
        var c= parseInt(a)+parseInt(b);
        component.set("v.Result",c);
	},
    SubFun : function(component, event, helper) {
		var a= component.get("v.firstNum");
        var b= component.get("v.SecondNum");
        var c= a-b;
        component.set("v.Result",c);
	},
    MULFun : function(component, event, helper) {
		var a= component.get("v.firstNum");
        var b= component.get("v.SecondNum");
        var c= a*b;
        component.set("v.Result",c);
	}
})