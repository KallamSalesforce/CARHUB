({
	gm : function(component, event, helper) {
		component.set("v.msg1","Hi  GOod Morning");
        helper.Myhelper(component);
        
	},
    gn : function(component, event, helper) {
		component.set("v.msg1","Hi Good evening ");
          helper.Myhelper(component);
	}
})