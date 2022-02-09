public class Interview_SOQL_Parent_Child_Query {
    
    public static void Parent_Child_Query(){

    List<Contact> contact =[select account.name,account.rating,name,department,title,(select caseNumber,Subject from cases where isclosed=false) 
     from contact 
     where account.rating='Hot' and Department='Technology' ORDER BY name];
    for(Contact con:contact){
        system.debug('Print Contact Department is....'+con.department);
        system.debug('Print Contact title is....'+con.title);
        //Get Parent Object Variables/Columns        
         system.debug('Print Account Rating'+con.account.name);
         system.debug('Print Account Rating'+con.account.rating);
        
        //Print Child Object Variables/Coloumns         
        for(Case ca :con.cases){
            System.debug('Print Case Subject....'+ca.subject);
        }
    }
    }     
}