trigger FieldUpdate1 on Lead (after insert,after update) {

    if(trigger.isAfter && (trigger.isInsert || trigger.isUpdate)){
        
        List<Lead> le = [select id,name,industry from lead where industry IN ('Banking','Finance','Agriculture') ];
        
        if(!le.isEmpty()){
            for(Lead l: le){
                if(l.Industry == 'Banking'){
                    l.AnnualRevenue = 9000000;
                }
               // le.add(l);
            }
            update le;
        }
    }
}