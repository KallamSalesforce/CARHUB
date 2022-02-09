({
	showMe : function(component, event, helper) {
        var serchtxt = component.get("v.st");
        
        var action = component.get("c.getAccounts");
        
        action.setParams({"searchtext":serchtxt});
        
        action.setCallback(this,function(response){
            
            var state = response.getState();
            if(state=='SUCCESS'){
                var result = response.getReturnValue();
                component.set("v.acc",result);
            }
        });
		
        $A.enqueueAction(action);
	}
})