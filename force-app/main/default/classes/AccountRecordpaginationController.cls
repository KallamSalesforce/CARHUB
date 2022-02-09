public class AccountRecordpaginationController {

 public apexPages.Standardsetcontroller setController{
 
 get{
      if(setController == null){
          setController = new ApexPages.Standardsetcontroller(database.getQueryLocator([select id,name,annualrevenue,phone,fax,rating from Account order by name]));
          
      }
      return setController;
      
     }
       set;
   }
   
   public List<Account> getAccounts(){
   
      setController.setPageSize(4);
      return (List<Account>) setController.GetRecords();
   }
   
}