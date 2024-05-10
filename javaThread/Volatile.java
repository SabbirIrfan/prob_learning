public class Volatile {

    // if volatile is not defined then ther can be the visibility error 
    // volatile ensures that the variable is written in the volatile memory
    static volatile boolean running = true;

    public static void main(String[] args) throws InterruptedException {
    
        Thread th = new Thread(() -> {

            while (running) {
    
            }
            System.out.println("my first thread is finished");
        });
        Thread th1 = new Thread(() -> {
            running = false;
            System.out.println("i am in second thread");
        });

        th.start();
        th1.start();

        th.join();
        th.join();
            
    }



}