trigger rollup_Summary_Field_On_opp_For_Account on Opportunity (after insert,after update) {

    if(trigger.isAfter && trigger.isInsert){
        Handle_Manager_class.AfterInsert(trigger.new);
    }
     if(trigger.isAfter && trigger.isUpdate){
        Handle_Manager_class.AfterUpdate(trigger.new,trigger.oldMap);
    }
}