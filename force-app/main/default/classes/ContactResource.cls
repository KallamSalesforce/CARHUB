@RestResource(urlMapping='/ContactAPI/*')
global with sharing class ContactResource {
   
    @HTTPGet
    global static list<Contact> getContactIdandNames(){
        
        // Initializing request Parameter with the incoming Request
        RestRequest contactRequest = RestContext.request;
        // Getting the Request URI
        string contactRequestURI= contactRequest.requestURI;
       // Getting the limit from the request URI
        Integer contactLimit = Integer.valueOf(contactRequestURI.subString(contactRequestURI.lastIndexOf('/')+1));
       // Quering the Contacts
        list<Contact> contList = [Select Id,Name FROM Contact limit :contactLimit ];
       // Returiningt the contacts in the response
        return contList;
    }

    @HttpPut
    global static Contact ContactUpsert(string firstName,string lastName,string dob,string leadSource){

        RestRequest request = RestContext.request;
        
       String contactRequestURI = request.requestURI;

       string  contactId = contactRequestURI.substring(contactRequestURI.lastIndexOf('/')+1);

       Contact con = New Contact();

       if(string.isNotEmpty(contactId)){
         con.Id = contactId;
       }
        con.FirstName = firstName;
        con.LastName  = lastName;
        con.Birthdate = Date.parse(dob);
        con.LeadSource = leadSource;

        upsert con;

        return con;
    }
    
    @HTTPPatch
    global static Contact  updateContact(){

        RestRequest request =  RestContext.request;

        String contactRequestURI = request.requestURI;

       string contactId = contactRequestURI.substring(contactRequestURI.lastIndexOf('/')+1);

       string requestBody = request.requestBody.toString();

       Contact con ;

       if(string.isNotEmpty(contactId)){
           
        con = (Contact) JSON.deserialize(requestBody, Contact.class);
        con.Id = contactId;

        update con;
       }

       return con;
    }
}