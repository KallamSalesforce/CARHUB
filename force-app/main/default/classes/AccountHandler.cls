public with sharing class AccountHandler {
    //Master branch changes 1
    @AuraEnabled(cacheable = true)
    public static list<Account> accDdetails(){
       
      return  [SELECT Id,Name,Type,Industry from Account LIMIT  5];
    }

    @AuraEnabled(cacheable = true)
    public static list<Account> filterAccDdetails(String type){
       
      return  [SELECT Id,Name,Type,Industry from Account where Type =: type LIMIT  5];
    }

    @AuraEnabled
    public static  list<Account> getAccDetails(string searchText){
      string text = '%'+searchText+'%' ;
      return  [SELECT Id,Name,Type,Industry from Account WHERE name LIKE :text LIMIT 5 ];
    }

    @AuraEnabled(cacheable=true)
    public static  list<contact> getrelatedContactDetails(Id id){
             
         list<Contact> listCon = [SELECT Id,FirstName,LastName,Email,Account.Id FROM COntact where Account.Id  =: id];
         return listCon;
    }

}
