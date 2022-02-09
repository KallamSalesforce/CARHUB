public class CL_CreateAcc2 {

    @AuraEnabled
    public static string callaccount(Account acc){
        string result;
        try{
            insert acc;
            result ='success';
        }
        catch(Exception e){
           result= e.getMessage();
        }
        return result;
    }
}