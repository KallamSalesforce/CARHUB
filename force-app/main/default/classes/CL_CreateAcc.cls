public class CL_CreateAcc {

    @AuraEnabled
    public static string createAccount(string name,string phone,string rating,string industry){
         string result;
        try{
            Account a = new Account();
            a.Name= name;
            a.Phone = phone;
            a.Rating = rating;
            a.Industry = industry;
            insert a;
            result = 'Account is sucessfully Created >>>>'+a.id;
        }
        catch(Exception e){
            result = 'Account is not creted >>>>>>>>>>>>';
        }
        return result;
    }
}