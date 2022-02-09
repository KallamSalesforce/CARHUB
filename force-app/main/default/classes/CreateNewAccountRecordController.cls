public class CreateNewAccountRecordController {

    public String recordResults { get; set; }

 
 
 public static void CreateAcc(){
    
    Account acc = new Account();
    acc.Name = 'Kallam Sriram2';
    acc.rating = 'Hot';
    acc.industry = 'Banking';
    acc.phone = '4567 8932';
    acc.fax = '456 8907';
    acc.website = 'www.tcs.com';
    
    insert acc; 
    if(acc.id!=null){
   system.debug('Record is succesfully inserted.....'+acc.id);
  }
  else{
   system.debug('Record is not succesfully inserted.....'+acc.id);
    }
 }
  
}