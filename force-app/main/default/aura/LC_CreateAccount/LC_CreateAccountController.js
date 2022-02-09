({
	callMe : function(component, event, helper) {
        
        var name = component.get("v.name");
        var phone = component.get("v.phone");
        var rating = component.get("v.rating");
        var industry = component.get("v.industry");
        
        //Step 1: Call/Get Server Side Controller Method
		var action = component.get("c.createAccount");
        
        //Step 2: Pass parameteres
        action.setParams({"name":name,"phone":phone,"rating":rating,"industry":industry});
        
        //Step3: Invoke SSC Method
        action.setCallback(this,function(response){
             var r =  response.getState();
            if(r=='SUCCESS'){
                var res = response.getReturnValue();
                component.set("v.result",res);
                component.set("v.flag",true);
            }
            else if(r=='ERROR'){
                component.set("v.result",res);
                component.set("v.flag",false);
            }
            
        });
        
        //Step4:Enqueue/ Pipeline Method
        $A.enqueueAction(action);
        
	}
})