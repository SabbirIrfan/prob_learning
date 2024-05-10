
class CreateRunnable implements Runnable {

    @Override
    public void run() {
        Thread.currentThread().setName("Runnable Thread");
        System.out.println("i am starting " + Thread.currentThread().getName());
    }
}

class CreateThread extends Thread {
    @Override
    public void run() {
        Thread.currentThread().setName("extended Thread");
        System.out.println("I am in " + Thread.currentThread().getName());

    }
}

public class MyThread {

    public static void main(String[] args) {
        System.out.println("starting  " + Thread.currentThread().getName());
        var myThread = new CreateThread();
        myThread.start();

        var myRunnable = new CreateRunnable();
        Thread newThread = new Thread(myRunnable);
        newThread.start();
        System.out.println("exiting " + Thread.currentThread().getName());
    }
}

