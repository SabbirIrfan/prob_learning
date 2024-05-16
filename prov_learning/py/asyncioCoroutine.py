
import asyncio
import time


async def display_time():
    start_time = time.time()
    
    while True:
        duration = int(time.time() - start_time)

        if duration %3 == 0:
            print("{} seconds have passed".format(duration))
        await asyncio.sleep(1)

async def print_num():
    num = 1
    while True:
        print(num)
        num +=1 
        await asyncio.sleep(.2)

async def task_runner():
    task1 = asyncio.create_task(display_time())
    task2 = asyncio.create_task(print_num())

    await asyncio.gather(task1,task2)


if __name__ == "__main__":
    asyncio.run(task_runner())