from lmdbm import Lmdb
# with Lmdb.open("test.db", "c") as db:
#   db[b"key"] = b"value"
#   db.update({b"key1": b"value1", b"key2": b"value2"})

with Lmdb.open("test.db", "w") as db:
  db["key1"] ="new value"
  print(db["key1"])