public class Get_Accs_BYSearchText {

    @AuraEnabled
    public static list<Account> getAccounts(String searchtext){
        String qu = 'Select id,name,phone,industry from account where name like\'%'+searchtext+'%\'';
        List<Account> accounts = Database.query(qu);
        return accounts;
    }
}