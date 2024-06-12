# KERI KEY STORE INIT


## parse the arguments using argparse

### args from the --file
    merge File arguments from the json provide in args --file


## InitDoer 
    
 1.      init config file 
 2.      setup habery from existing keystore
 3.      setop hbyDoer -> self.hbyDoer = habbing.HaberyDoer(habery=hby)
 4.      seup delegation anchorer ?? what does it do?
 5.      setup poster doer for forward messages to the         recipient's witnesses or endpoints
 6.      setup mailbox doer 
 7.      doify the ```inceptDo``` method
 8.      add these doer to doers which will be provided to the super class DoDoer __init__
   


### InceptDo generator method

1.  Creating new identifier prefix and Hab (if already incepted then old pre will be given)
2.  incept witDoer>Sends messages to all current witnesses of given identifier (from hab) and waits for receipts from each of those witnesses and propagates those receipts to each of the other witnesses after receiving the complete set.
