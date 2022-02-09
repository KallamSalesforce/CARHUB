public class CL_retriveData_eg1 {

    @auraEnabled
    public static account getData(){
        Account acc = [select id,name,industry,phone,rating from Account limit 1];
        return acc;
    }
}