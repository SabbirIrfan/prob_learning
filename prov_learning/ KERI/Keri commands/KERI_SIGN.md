 <!-- in existing.existingHab(name,alias, base, bran) we get the hby = existinghby(name, base, bran) and hab = hby.habByName(name=alias) -->

 # KERI ```sign```


##  parse the arguments using argparse
    -- name
    -- alias
    -- base
    -- bran
    -- passcode (if have any for keystore)
    --  text

## handler to return  doifyed sign method

## sign method 
    -- try
    -- -- retrieving existing Hab 
    -- -- -- in existing.existingHab(name,alias, base, bran) we get the hby = existinghby(name, base, bran) and hab = hby.habByName(name=alias)
    -- -- -- using hab sign the data (hab.sign(ser=data.encode("utf-8"),verfers=hab.kever.verfers,indexed=True))