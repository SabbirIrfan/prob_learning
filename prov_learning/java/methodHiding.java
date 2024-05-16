// #cannot override the static mathod right? 
// what if you do??
// then thes static method of the super class wil be hiden from the subclass object 
public class methodHiding {

    public static void main(String[] args) {
        secondClass.hidden("nothing");
    }
    
}
 class firstClass{

    static String  hidden(String s){
        return "this is hiddden" + s;
    }
}

class secondClass extends firstClass{
    static String hidden(String s){
        System.out.println("this has a print expression");
        return "this is open" + s;
    }
}

