({
	CallMe : function(component, event, helper) {
        var col = [
            {label:'AccountName',fieldName:'Name',type:'text'},
            {label:'Account Phone',fieldName:'Phone',type:'text'},
            {label:'Account Rating',fieldName:'Rating',type:'text'},
                  ];
        component.set("v.acolumn",col);
	},
    showMe : function(component, event, helper) {
            
            var action = component.get("c.getData");
            
            //**** get the param from event and set param if you want to pass the AccountId  from the Event
            var acc= event.getParam('aid');
            action.setParams({"a":acc});
            action.setCallback(this,function(response){
             var state = response.getState();
            if(state=='SUCCESS'){
              var result = response.getReturnValue();
               component.set("v.accounts",result);
            }
            });
               
           $A.enqueueAction(action);            
            
        
            }
})