public class SearchResultPageController {
      
   public list<Lead> liLead{get;set;} 
   
   public pageReference getSearcgRecordPage(){
   
     PageReference pr = new pageReference('/apex/SexrchRecordPage');
     return pr.setRedirect(true);
   }    

   public SearchResultPageController(){
   
      liLead = new List<Lead>();
     
     String SearchText = ApexPages.CurrentPage().Getparameters().get('sText');
     
     if(SearchText!= null && SearchText!=' '){
     
         liLead = [select id,firstname,lastname,annualrevenue,company from lead where firstname like:SearchText+'%'];
     }
   }
}