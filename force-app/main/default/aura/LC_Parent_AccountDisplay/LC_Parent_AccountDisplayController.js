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
        var ac =event.getParam("acc");
        var accounts = component.get("v.accounts"); //To retain existing data -- Pull the existing data from Cmp
        accounts.push(ac);                          // To Retain existing data--- Push the data recived from event attribute 
        component.set("v.accounts",accounts);
	}
})