public with sharing class getAccountsName {

    @AuraEnabled(cacheable = true)
    public static list<Account> getAccounts(){

        list<Account> acclist = [SELECT Id,Name,Rating,AnnualRevenue from Account limit 10];
        return acclist;
    }
}