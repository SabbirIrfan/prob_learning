// Race Condition
// when multiple thread wants to update the same value
// visibility problem also known as data race  
// when one thread access the cache for some value that another thread might change in the memory
// causing the first thread not noticing the change which causes unexpected result of the output. 
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.function.Supplier;

class LockHelper {
  public static void withLock(Lock lock, Runnable runnable) {
    lock.lock();
    try {
      runnable.run();
    } finally {
      lock.unlock();
    }
  }

  public static <T> T withLock(Lock lock, Supplier<T> supplier) {
    lock.lock();
    try {
      return supplier.get();
    } finally {
      lock.unlock();
    }
  }
}

class Counter {
    private Integer count ;
    private final Lock lock = new ReentrantLock();

    public Counter(int count ){
        this.count =  count;

    }
    public int  increment(){
        // lock.lock();
        // try {
        //     count+=1;    
        // } catch (Exception e) {
        //    System.out.println("sorry couldn't get hold of the counter");
        // }finally{
        //     lock.unlock();
        // }
        return LockHelper.withLock( lock, ()-> ++count);
        
    }
    public int drcrement(){
        // lock.lock();
        // try {
        //     count-=1;    
        // } catch (Exception e) {
        //    System.out.println("sorry couldn't get hold of the counter");
        // }finally{
        //     lock.unlock();
        // }
        return LockHelper.withLock(lock, ()-> -count--);
        
    }
    public int getCount(){
       return  LockHelper.withLock(lock, ()->count);
    }
       
}
public class Thread_Locking {
        public static void main(String[] args) throws InterruptedException {
      
          Counter counter = new Counter(0);
          Thread thread1 = new Thread(() -> {
            for (int i = 0; i < 1_000; i++) {
              counter.increment();
            }
          });
          Thread thread2 = new Thread(() -> {
            for (int i = 0; i < 1_000; i++) {
              counter.increment();
            }
          });
      
          thread1.start();
          thread2.start();
      
          thread1.join();
          thread2.join();
      
          var count = counter.getCount();
          System.out.println("count = " + count);
        }
      
     

}


// ReentrantLock() Methods 
// lock(): Call to the lock() method increments the hold count by 1 and gives the lock to the thread if the shared resource 
  //  is initially free.

// unlock(): Call to the unlock() method decrements the hold count by 1. When this count reaches zero, the resource 
  // is released.

// tryLock(): If the resource is not held by any other thread, then call to tryLock() returns true and the hold count is
  // incremented by one. If the resource is not free, then the method returns false, and the thread is not blocked, but exits.

// tryLock(long timeout, TimeUnit unit): As per the method, the thread waits for a certain time period as defined by 
    //arguments of the method to acquire the lock on the resource before exiting.

// lockInterruptibly(): This method acquires the lock if the resource is free while allowing for the thread to be interrupted
// by some other thread while acquiring the resource. It means that if the current thread is waiting for the lock but some
// other thread requests the lock, then the current thread will be interrupted and return immediately 
  //without acquiring the lock.

// getHoldCount(): This method returns the count of the number of locks held on the resource.

// isHeldByCurrentThread(): This method returns true if the lock on the resource is held by the current thread.

// hasQueuedThread(): This Method Queries whether the given thread is waiting to acquire this lock.

// isLocked(): Queries if this lock is held by any thread.

// newCondition(): Returns a Condition instance for use with this Lock instance.