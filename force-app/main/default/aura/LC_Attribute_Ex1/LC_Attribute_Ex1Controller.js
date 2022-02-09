({
	callme : function(component, event, helper) {
        alert('Hi this is my first button');
		component.set("v.EmpName","kallam Sriram Reddy");
        component.set("v.Age",29);
        component.set("v.Salary",89000.67);
	},
    clearAll : function(component, event, helper) {
        component.set("v.EmpName","");
        component.set("v.Age","");
        component.set("v.Salary");
		
	}
})