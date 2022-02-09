public class TargetPageController {

 public Pagereference getsourcePage(){
   
   PageReference pr = new pageReference('/apex/Sourcepage');
    return pr.setRedirect(true);
 }
}