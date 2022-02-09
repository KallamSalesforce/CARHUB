public class SearchrecordPageController {

   public string SearchText{get;set;}
   
   
   public pageReference getSearchResultPage(){
     PageReference pr = new PageReference('/apex/SearchResultPage?sText='+SearchText);
     return pr.setredirect(true);
  }
}