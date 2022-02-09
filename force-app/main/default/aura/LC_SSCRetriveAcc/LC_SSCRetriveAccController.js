({
	showMe : function(component, event, helper) {
		
        //Step 1: Get/Call the method
        var acc = component.get("c.getData");
        
        //Step 2: pass the Parameters 
        
        //Step 3: Invoke/Call the function Method
        
        acc.setCallback(this,function(response){
                      
                      var sta = response.getState();        //Get the status of Invoke
                      console.log('>>>>>'+sta);
                      if(sta=='SUCCESS') 
                      {
                         var res = response.getReturnValue();   //Get the result/value/response from SSC
                          
                          component.set("v.acc",res);
                          console.log('>>>>>...Testing');
                      }
        
                      });
        
        //Step 4: Enqueue Action 
        $A.enqueueAction(acc);
	}
})