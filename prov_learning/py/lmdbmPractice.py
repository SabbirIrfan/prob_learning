import lmdb 
# with Lmdb.open("test.db", "c") as db:
#   db[b"key"] = b"value"
#   db.update({b"key1": b"value1", b"key2": b"value2"})
# from lmdbb import Lmdb
# with Lmdb.open("test.db", "w") as db:
#   db["key1"] ="new value"
#   print(db["key1"])





env = lmdb.open('/home/john_doe/Desktop/provenance/learning/prov_learning/py', max_dbs=10)



def perform_operations(txn):
    try:
        # Perform operations within the main transaction
        txn.put(b'key1', b'value1')
        
        # Perform more operations that could conceptually be nested
        perform_nested_operation(txn)

        # If all operations succeed, commit the transaction
        txn.commit()
    except Exception as e:
        # If any operation fails, abort the transaction
        print(f"Transaction failed: {e}")
        txn.abort()

def perform_nested_operation(txn):
    try:
        # Perform operations that are part of a "nested" transaction
        txn.put(b'key2', b'value2')
        txn.put(b'key3', b'value3')
    except Exception as e:
        # If a nested operation fails, raise an exception to abort the main transaction
        raise Exception(f"Nested operation failed: {e}")

# Open a write transaction
with env.begin(write=True) as txn:
    perform_operations(txn)




# Start batch transaction
with env.begin(write=True) as txn:
    # Perform multiple operations in the batch
    txn.put(b'key1', b'value1')
    txn.put(b'key2', b'value2')
    txn.put(b'key3', b'value3')

    # Commit the batch transaction
    txn.commit()
