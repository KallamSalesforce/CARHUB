public class ShowAllAccountRecordsController {
          
      public List<Account> LstAcc{get;set;}    

      public ShowAllAccountRecordsController(){
               
               LstAcc = new List<Account>();
       
                 LstAcc  =    [select id,name,rating,industry,fax,type,phone,annualrevenue from Account order by Name];
       
      }
}