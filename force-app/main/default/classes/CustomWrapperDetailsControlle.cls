public class CustomWrapperDetailsControlle {
      
      public List<Custom_Wrapper>  lstWrapper{get;set;}
      
      public void getRecords(){
      
               lstWrapper = new List<Custom_Wrapper>();
      
          //Get the records from Objects and store them in collections
          
               List<Account> lstAcc = [Select id,name,rating,annualrevenue,industry,phone,fax from Account order by name limit 10];
                 
                 //Pass each Account  record to Custom Wrapper class, then it will prepare the custom record
                 
                 for(Account acc: lstAcc){
                     
                     Custom_Wrapper cWrapper = new Custom_Wrapper(acc);
                     lstWrapper.add(cWrapper);
                 }
               
               List<Contact> lstCon = [select id,firstname,lastname,phone,fax from contact order by lastname limit 10];
               
               //Pass each Contact record to Custom Wrapper class, then it will prepare the custom record
                 
                 for(Contact Con: lstCon){
                     
                     Custom_Wrapper cWrapper = new Custom_Wrapper(Con);
                     lstWrapper.add(cWrapper);
                 }
               
               List<Lead> lstLead  = [select id,firstname,lastname,title,phone,fax,rating,annualrevenue from Lead order by lastname limit 10];
               
              // Pass each Contact record to Custom Wrapper class, then it will prepare the custom record
                 
                 for(Lead lead: lstLead){
                     
                     Custom_Wrapper cWrapper = new Custom_Wrapper(lead);
                     lstWrapper.add(cWrapper);
                 }
      
      }
}