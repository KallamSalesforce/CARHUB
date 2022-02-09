public class ShowAllCaseRecordsController {
   public List<Case> li {get;set;}
   
 public void GetRecords(){
 
           li = new List<Case>();
           
                li =   [select id,CaseNumber,status,priority,type,origin,reason,CreatedDate,subject from Case order by Createddate desc];
 }
}