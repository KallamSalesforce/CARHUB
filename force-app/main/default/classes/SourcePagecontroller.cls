public class SourcePagecontroller {

public Pagereference getTargetPage(){
   
   PageReference pr = new pageReference('/apex/Targetpage');
    return pr.setRedirect(true);
 }
}