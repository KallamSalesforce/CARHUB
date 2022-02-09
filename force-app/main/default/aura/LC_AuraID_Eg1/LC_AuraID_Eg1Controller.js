({
	callme : function(component, event, helper) {
		var name =component.find("EmpName").get("v.value");
        var age =component.find("EmpAge").get("v.value");
        var Salary =component.find("EmpSal").get("v.value");
        
        console.log('Name================'+name);
         console.log('Name================'+age);
          console.log('Name================'+Salary);
	}
})