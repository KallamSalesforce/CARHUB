({
	showMe : function(component, event, helper) {
		
        var ac = component.get("v.acc");
        var con = component.get("v.con");
        var pas = component.get("v.pas");
        
        console.log("Account Name is >>>>>"+ac.Name);
        console.log("Account Name is >>>>>"+ac.phone);
        console.log("Account Name is >>>>>"+ac.fax);
        
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        
        console.log("Contact Name is >>>>>"+con.LastName);
        console.log("Contact Name is >>>>>"+con.Firstname);
        
        console.log("passenger Name is >>>>>"+pas.Name);
        console.log("Passenger Nemail is >>>>>"+pas.Email_c);
        
        
     
        
	}
})