public class BasicCaluculatorController {

   
   
   public static integer firstNumber{get;set;}
   public static integer SecondNumber{get;set;}
   public static integer result{get;set;}
 
   public static void Add(){
      result = firstNumber+SecondNumber;
      
   }
   public static void Sub(){
      result = firstNumber-SecondNumber;
      
   }
   public static void Mul(){
      result = firstNumber*SecondNumber;
      
   }
   public static void Div(){
   if(SecondNumber>0){      
      result = firstNumber/SecondNumber;
      ApexPages.AddMessage(new ApexPages.Message(ApexPages.Severity.INFO,'Division Operation was Succesfully completed'));
      }
   else{
      ApexPages.AddMessage(new ApexPages.Message(ApexPages.Severity.WARNING,'Division Operation canot be performed. Please enter a valid Input value'));}   
   }
}