public class Handler_Manage2 {

    public static void AfterOppRecords(list<Account> acc){
        
        map<Id,Account> AccWitOpp = new Map<Id,Account>([select id,name,(select id from Opportunities) from Account where id IN : acc]);
        list<Opportunity> opp = new list<Opportunity>();
        for(Account ac: acc){
            if(AccWitOpp.get(ac.Id).opportunities.size() == 0){
                opportunity op = new opportunity();
                op.AccountId = ac.Id;
                op.Description = 'Test';
                op.Name = ac.Name;
                op.CloseDate = system.today();
                op.StageName= 'Prospect';
                opp.add(op);
            }
        }
        if(!opp.isEmpty()){
            Insert opp;
        }
        
        
        
    }
}