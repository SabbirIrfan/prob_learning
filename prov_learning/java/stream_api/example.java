
import java.util.Arrays;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class example {
    public static void main(String[] args) {
        String[] str = {"one", "value", "three","one", "value", "three","one", "value", "three"};

        Map<String, Long> res = Arrays.stream(str).collect(Collectors.groupingBy(Function.identity(),Collectors.counting()));

        System.out.println(res);
        
    }
}   
