public class Custom_Wrapper {

    public id recordId{get;set;}
    public string firstname{get;set;}
    public string lastname{get;set;}
    public string designation{get;set;}
    public string ratingValue{get;set;}
    public string industry{get;set;}
    public decimal annualrevenue{get;set;}
    public string cityName{get;set;}
    public string stateName{get;set;}
    public string phoneNumber{get;set;}
    public string faxNumber{get;set;}
    public string titleName{get;set;}
    
    //Prepare a Constructor to convert the Accounnt Record into custom Type
    public Custom_Wrapper(Account acc)
    {
        recordId = acc.id;
        lastname = acc.Name;
        ratingValue = acc.Rating;
        annualrevenue = acc.AnnualRevenue;
        industry  = acc.Industry;
        phoneNumber = acc.Phone;
        faxNumber = acc.Fax;
        
    }
    
    //Prepare a Constructor to convert the Contact Record into custom Type
    public Custom_Wrapper(Contact con)
    {
        recordId = con.id;
        lastname = con.LastName;
        firstname = con.FirstName;
        phoneNumber = con.Phone;
        faxNumber = con.Fax;
        
        
        
    }
    
    //Prepare a Constructor to conver the Lead Record into Custom Type
    public Custom_Wrapper(Lead lea){
        recordId = lea.id;
        firstname = lea.FirstName;
        lastname = lea.LastName;
        titleName = lea.Title;
        ratingValue = lea.Rating;
        annualrevenue = lea.AnnualRevenue;
        phoneNumber = lea.Phone;
        faxNumber = lea.Fax;
    }
}