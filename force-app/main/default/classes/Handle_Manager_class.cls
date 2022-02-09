public class Handle_Manager_class {

    public static void AfterInsert(list<Opportunity> newList){
        
        set<Id> accIds = new Set<Id>();
        List<Account> AccTobeUpdate = new list<Account>();
        
        for(Opportunity opp : newList){
            if(opp.AccountId != null){
                accIds.add(opp.AccountId);
            }
        }
      AccTobeUpdate = AnnualRevenueFieldUpdate(accIds);
        if(!AccTobeUpdate.isEmpty()){
            update AccTobeUpdate;
        }
    }
    public static list<Account> AnnualRevenueFieldUpdate(set<Id> accids){
          list<Account> AccountsNeedtoupdateAnnuRev = new list<Account>();
          Map<Id,decimal> accIdTOAnnRev = new Map<Id,decimal>();        
        for(opportunity opp :[SELECT Id,Name,Amount,AccountId from Opportunity where AccountId IN : accids]){
            decimal total =0;            
            if(accIdTOAnnRev.containsKey(opp.AccountId)){
                total = accIdTOAnnRev.get(opp.AccountId);
            }
            system.debug('Total amount is'+total);
            if(opp.Amount != null){
                total = total+opp.Amount;
            }
            accIdTOAnnRev.put(opp.AccountId, total);
                  }
        if(!accIdTOAnnRev.isEmpty()){
        for(Id i : accIdTOAnnRev.keySet() ){
            Account acc = new Account();
            acc.id = i;
            acc.AnnualRevenue = accIdTOAnnRev.get(i);
            AccountsNeedtoupdateAnnuRev.add(acc);
        }
        }
        return AccountsNeedtoupdateAnnuRev;
    }
    
    public static void AfterUpdate(list<Opportunity> newList, Map<Id,opportunity> oldMap){
         set<Id> accIds = new Set<Id>();
        List<Account> AccTobeUpdate = new list<Account>();
        
        for(Opportunity opp : newList){
            if(opp.AccountId != null && opp.Amount != oldMap.get(opp.Id).Amount){
                accIds.add(opp.AccountId);
            }
        }
      AccTobeUpdate = AnnualRevenueFieldUpdate(accIds);
        if(!AccTobeUpdate.isEmpty()){
            update AccTobeUpdate;
        }
    }
}