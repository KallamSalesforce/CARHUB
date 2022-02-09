public with sharing class AccountRelatedContacts {
    
    @AuraEnabled(Cacheable = true)
    public static List<WrapperDemo> fetchAccAndCons() {
        List<WrapperDemo> lstWrapper = new List<WrapperDemo>();
        list<Account> listAcc = [ SELECT Id, Name, (Select Id, Name From Contacts) FROM Account limit 10];

        for(Account ac : listAcc ) {
            WrapperDemo  wrapper = new WrapperDemo();
            wrapper.objAcc = ac;
            wrapper.lstCons = ac.contacts;
            wrapper.conSize = ac.Contacts.size();
            lstWrapper.add(wrapper);
        }

        return lstWrapper;
        
    }
 
 // Wrapper Class
 public class WrapperDemo {
        @AuraEnabled public Account objAcc {get;set;}
        @AuraEnabled public list<Contact> lstCons {get;set;}
        @AuraEnabled public Integer  conSize {get;set;}
        
    }

    @AuraEnabled(cacheable = true)
    public static list<contact> getContactsByAccountName(string text){
        
    list<Contact> listCon = [SELECT Id,FirstName,LastName,Email,Account.Name from Contact where Account.Name=: text];

    return listCon;
    }
}