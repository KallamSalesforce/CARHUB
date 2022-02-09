public with sharing class GetContacts {
    
    @AuraEnabled(Cacheable = true)
    public static list<Contact> getContactsInfo(){

       return  [SELECT Id,FirstName,LastName,Phone,Email from Contact];
    }
}