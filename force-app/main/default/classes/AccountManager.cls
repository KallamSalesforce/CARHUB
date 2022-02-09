public with sharing class AccountManager {

    @AuraEnabled(cacheable = true)
    public static list<Account> getAccountRecords(){
         list<Account> listAcc = [SELECT Id,Name,Phone,Rating,Industry from Account LIMIT 10];

         return listAcc;
    }

    @AuraEnabled(cacheable = true)
    public static List<Opportunity> getOpps(String SearchKey) {
      
        String query = 'SELECT Id, Name,StageName,CloseDate FROM Opportunity';
       system.debug('query---'+query);
       if ( searchKey != null && searchKey != '' ) {
           String key = '%' + searchKey + '%';
           query += ' WHERE Name LIKE :key';
       }
    //    if ( sortBy != null && sortDirection != null ) {
    //        query += ' ORDER BY ' + sortBy + ' ' + sortDirection;
    //    }
       return Database.query( query );
       
    }


}