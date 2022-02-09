public class DynamicAccNameSearchController {
    
    public string searchText{get;set;}
    
    public List<account> ListAcc{get;set;}

    public void searchAccountRecords(){
         ListAcc = new List<Account>();
    
    if(searchText!=null && searchText!=''){
    
       searchText+='%';
       
           ListAcc =   [Select id,name,annualrevenue,rating,type,industry,website from account where name like :searchText];
       
    }
    else{
    ApexPages.AddMessage(new ApexPages.Message(ApexPages.severity.Error,'Please Enter the valid Value to search for records'));
    }
    
    
              
    }
}