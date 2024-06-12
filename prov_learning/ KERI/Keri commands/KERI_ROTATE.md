# KERI KEY STORE ``rotate``


## parse the arguments using argparse

### args from the --file
    merge File arguments from the json provide in args --file


## InitDoer Class
    
 1.      init config file 
 2.      setup habery from existing keystore
 3.      setop hbyDoer -> self.hbyDoer = habbing.HaberyDoer(habery=hby)
 4.      seup delegation anchorer ?? what does it do?
 5.      setup poster doer for forward messages to the         recipient's witnesses or endpoints
 6.      setup mailbox doer 
 7.      doify the ```inceptDo``` method
 8.      add these doer to doers which will be provided to the super class DoDoer __init__
   

## rotateDO

1. get hab by name. ( A habitat manages the keys and events associated with a specific identifier.)
2. add or remove witness >> if the args --witness-add or -cut is true 
   1. get the existing witness from hab.kever.wits
   2. add or cut from the hab witness >> kever>> key event verifier
3. rotate key using hab.rotate.
4. use hab.kever (key event verifier) to confirm the event (rotation) with winess and delegation