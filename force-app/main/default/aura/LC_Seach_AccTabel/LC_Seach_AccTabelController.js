({
	loadMe : function(component, event, helper) {
        var clm = [
                   {label:"Account Name",fieldName:"Name",type:"Text"},
                   {label:"Account Phone",fieldName:"Phone",type:"Text"},
                   {label:"Account Industry",fieldName:"Industry",type:"Text"},
                    {label:"Account Rating",fieldName:"Rating",type:"Text"},
                  ];
            component.set("v.columns",clm)
	},
    searchMe : function(component, event, helper) {	
            var srctxt = component.get("v.st");
            
            var action = component.get("c.getAccounts");
            action.setParams({"searchtext":srctxt});
             action.setCallback(this,function(response){
               var state = response.getState();
            if(state=='SUCCESS'){
             var res = response.getReturnValue();
              component.set("v.acc",res);
            }
            });
            $A.enqueueAction(action);
            
	}
})