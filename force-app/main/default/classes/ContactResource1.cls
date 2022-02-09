@RestResource(urlMapping='/ContactAPI1/*')
global with sharing class ContactResource1 {
   

    global class ResponseWrapper{
        string success;
        string message;
    }

    @HTTPGet
    global static list<Contact> getContactIdandNames(){

        RestRequest contactRequest = RestContext.request;

        Map <String,String> contactReqParamas = contactRequest.params;

        Integer contactLimit = Integer.valueOf(contactReqParamas.get('limit'));

        String leadsource  = contactReqParamas.get('leadsource');
       
        

        list<Contact> contList = [Select Id,Name FROM Contact where LeadSource =: leadsource LIMIT :contactLimit];

        return contList;
    }

    @HTTPPatch
    global static List<ResponseWrapper> getContactsByPatch(){

        List<ResponseWrapper> responseWrapperList = new List<ResponseWrapper>();

        RestRequest request =  RestContext.request;
        string contactURI = request.requestURI;
       // string [] contactIds = contactURI.substring(contactURI.lastIndexOf('/')+1).split(',');
        string requestBody = request.requestBody.toString();

        List<Contact> liContacts_TO_Update = (List<Contact>) JSON.deserialize(requestBody, List<Contact>.class);

        Database.SaveResult [] updateResults = database.update(liContacts_TO_Update,false);

        for(Database.SaveResult updateresult : updateResults){

            ResponseWrapper wrapper = new ResponseWrapper();
            if(updateresult.isSuccess()){
                wrapper.success ='1';
                wrapper.message = 'Succesfully updated contact with Id :'+updateresult.getId();
            }
            else{
                wrapper.success = '0';
                for(Database.Error error : updateresult.getErrors()){
                    wrapper.message = 'The following Error has occured for contact with Id :'+updateresult.getId();
                    wrapper.message +=  error.getStatusCode() +':'+error.getMessage() + '.';
                    wrapper.message +=  'Contact field that affected this error is '+error.getFields();
                }
            }
            responseWrapperList.add(wrapper);
        }

       return responseWrapperList;

    }
}