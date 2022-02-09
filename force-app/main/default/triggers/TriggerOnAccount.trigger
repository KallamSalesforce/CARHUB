trigger TriggerOnAccount on Account (after insert,after update) {

    if(Trigger.isAfter && (trigger.isInsert || trigger.isUpdate)){
        Handler_Manage2.AfterOppRecords(trigger.new);
    }
}