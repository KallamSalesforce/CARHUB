public with sharing class ContactManager {
    
    @AuraEnabled(cacheable = true)
    public static list<Contact> getContacts(){

      List<Contact> conList =   [SELECT ID,Name,Title,Email from Contact ORDER By Name LIMIT 20 ];

      return conList;
    }
}