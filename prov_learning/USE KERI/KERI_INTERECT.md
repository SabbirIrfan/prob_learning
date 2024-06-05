# KERI  ``interact``


## parse the arguments using argparse

### args from the --anchor 
    merge File arguments from the json provide in args --file

## InitDoer Class
    
 1.      setup habery from existing keystore (existing.habery(name,base,bran))
 2.      setop hbyDoer -> self.hbyDoer = habbing.HaberyDoer(habery=hby)
 3.      seup delegation anchorer ?? what does it do?
 4.      setup poster doer for forward messages to the         recipient's witnesses or endpoints
 5.      setup mailbox doer 
 6.      doify the ```inceptDo``` method
 7.      add these doer to doers which will be provided to the super class DoDoer __init__


## InteractDO 
   Create a doifyable method which will do the interaction.

    -->hab = self.hby.habByName(name=self.alias)
    retrieve the habitat to who the interaction will happen
    -->hab.interact(data=self.data)
    
   
