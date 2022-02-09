public class CL_CreateRetriveAcc {

    @AuraEnabled
    public static string insertAcc(Account acc){
        string result;
        try{
            insert acc;
            result=acc.Id;
        }
        catch(Exception e){
            result ='Failed';
        }
        return result;
    }
    
    @AuraEnabled
    public static list<Account> getData(Id a)//Id a
    {
        List<Account> accounts = [select id,name,phone,rating,industry from account where id=:a]; //where id=:a
        return accounts;
    }
}