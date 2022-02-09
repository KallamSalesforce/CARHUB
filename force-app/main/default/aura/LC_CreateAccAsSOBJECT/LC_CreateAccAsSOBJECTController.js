({
	callMe : function(component, event, helper) {
		
           var  accnt =  component.get("v.acc");
           var action = component.get("c.callaccount");
           action.setParams({"acc":accnt});
        
        action.setCallback(this,function(responsce){
            var state = responsce.getState();
            if(state=='SUCCESS')
            {
                var res = responsce.getReturnValue();
                console.log(res);
            }
        });
        $A.enqueueAction(action);
	}
})