@RestResource(urlmapping='/v1/Accounts/*')
global with sharing class MultipleRecords {

    
    @HttpGet
    global static list<Account> CreateContacts(){
         
        RestRequest accRequest = RestContext.request;
        map<String,String> accReqParams = accRequest.Params;

        string rating = accReqParams.get('Rating');

        list<Account> listAcc = [Select id,Name,Rating from Account where Rating =: rating];
        return listAcc;


    }
        
}