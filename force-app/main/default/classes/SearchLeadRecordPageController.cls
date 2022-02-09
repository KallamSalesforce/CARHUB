public class SearchLeadRecordPageController {

 public string FirstName{get;set;}
 public string SecondName{get;set;}
 
 public List<Lead> ListLead{get;set;}
 
 public void getFirstNameResults(){
       
       ListLead = new List<Lead>();
       FirstName +='%';
       SecondName +='%';
       
       
    if((FirstName!=null && FirstName!='')||(SecondName!=null && SecondName!='')){
    
     ListLead = [select id,firstname,lastname,industry,rating,annualrevenue,phone from Lead  where firstname like:FirstName or lastname like:SecondName]; 
      }
 }
 
 
}