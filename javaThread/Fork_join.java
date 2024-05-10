import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class Fork_join  {
    
    public static void main(String[] args) throws ExecutionException , InterruptedException {
		showDaemonThreadExample();
		showForkPool();
		
	}

	private static void sleep(int second) {
		try {
			TimeUnit.SECONDS.sleep(second);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	private static void showDaemonThreadExample(){
		var thread = new Thread(() -> {
			while (true) {
				//this thread is supposed to be running forever
				sleep(1);
				System.out.println(Thread.currentThread().getName()
						+ " is daemon? "
						+ Thread.currentThread().isDaemon());
			}
		});

		thread.setDaemon(true);
		thread.start();

		System.out.println("Running from main method");
		sleep(5);
		System.out.println("Done! will die now");
	}


	private static void showForkPool() throws InterruptedException, ExecutionException{
		// CompletableFuture.runAsync(() -> {
		// 	System.out.println("Running asynchronously!");
		// 	System.out.println("from " + Thread.currentThread());
		// });

		// if we dont use the .get() then this daemon thread dies when ever the creator thread of it dies. 
		// .get() locks the asyncronicity
		// CompletableFuture.runAsync(() -> {
		// 	System.out.println("Running asynchronously!");
		// 	System.out.println("from " + Thread.currentThread());
		// }).get();
		
		// to maintain the asyncronicity and let this CompletableFuture work independently we provide its own thread pool. 
		// this threads pool is called Executor

		var threadPool = Executors.newCachedThreadPool();
		CompletableFuture.runAsync(() -> {
			System.out.println("Running asynchronously!");
			System.out.println("from " + Thread.currentThread());
		},threadPool);

		threadPool.shutdown(); // threadpool needs to shutdown else it wont exit
	

	}
}
