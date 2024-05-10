# what is coroutine::
# its 1) a generator 
#     2) it waits to get input from elsewhere using "send"
#     3) the data is received with  "yield" as an expression
#     (typically on the right side of an assignment)
#     4) Local state remain across calls
# def cor():
#     x = 1
#     while 1:
#         x = yield x 
#         x = x*5
# g = cor()
# print(next(g))
# print(g.send(12))
import time
from typing import Iterable, List, Generator, Any

def sleep(duration: float):
    now = time.time()
    threshold = now + duration
    while now < threshold:
        yield
        now = time.time()

def bar():
    yield from sleep(0.1) 
    return 123

def foo():
    yield from bar()

# def wait(tasks: Iterable[Generator]) -> List[Any]:
#     pending = list(tasks)
#     before = time.time()
#     tasks = {task : None for task in pending}

#     while pending:
#         for gen in pending:
#             try:
#                tasks[gen] = gen.send(tasks[gen])
#             except StopIteration as e:
#                 tasks[gen] = e.args[0] # error?

#                 pending.remove(gen)
#     print(f"duration = {time.time() - before:.3}")
#     return list(tasks.values)

def main():
    tasks = [foo(), foo()]
    print(tasks)

if __name__ == "__main__":
    main()
