public class listToMap {

    public static void converToMap(){
        list<Contact> contlist = [Select Id,Name,AccountId from Contact];

            map<Id,list<contact>> mapcon = new Map<Id,list<Contact>>();

               for(Contact con : contlist){
                   if(!mapcon.containsKey(con.AccountId)){
                       mapcon.put(con.AccountId, new list<Contact> {con});
                  /*    list<Contact> listExistingCon = new List<Contact>();
                      listExistingCon.add(con);
                      mapcon.put(con.AccountId,listExistingCon);   */
                   }
                  else{
                      mapcon.get(con.AccountId).add(con);
                  /*    list<Contact> listcon = new list<Contact>();
                      listcon.add(con);
                      mapcon.put(con.AccountId,listcon);            */
                     }
         }

                 // system.debug('Map key'+mapcon.key());
                  system.debug('Map values'+mapcon.values());
                  system.debug('Map values are'+mapcon);
    }
}