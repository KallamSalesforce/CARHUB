@RestResource(urlmapping='/v1/DeleteMultipleAcc/*')
global with sharing class RestAPIDeleteMultipleRecords {
    

    global class ResponseWrapper{
        string success;
        string message;
    }

    @HTTPDelete
    global static list<ResponseWrapper> deleteMultipleAcc(){

        List<ResponseWrapper> responsceWrapperList = new List<ResponseWrapper>();

       RestRequest request = RestContext.request;
       String AccIdsAs_String = request.requestURI;
       String [] AccIds =(AccIdsAs_String.substring(AccIdsAs_String.lastIndexOf('/')+1)).split(',');

       List<Account> liAccToDelete = new list<Account>();

       for(string Ids : AccIds){
        Account c = new Account();
        c.Id = Ids;
        liAccToDelete.add(c);
       }

        Database.DeleteResult[] results =  Database.delete(liAccToDelete, false);
        for(Database.DeleteResult deleteresults : results){
            //Initilaize Wrapper Class
            ResponseWrapper wrapper = new ResponseWrapper();
            if(deleteresults.isSuccess()){
                wrapper.success = '1';
                wrapper.message = 'Account Record is Succesfully deleted'+deleteresults.getId();
            }
            else{
                wrapper.success = '0';
                for(Database.Error error : deleteresults.getErrors()){
                    wrapper.message = 'The folowing error has occured for Contact Id is'+deleteresults.getId();
                    wrapper.message += error.getStatusCode() +':'+error.getMessage()+ '.';
                    wrapper.message += 'Contact Fields that efffected this error'+error.getFields();
                }
            }
            responsceWrapperList.add(wrapper);

        }
          return responsceWrapperList;
    }
}