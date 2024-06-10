# KERI ```Verify```


##  parse the arguments using argparse
    -- name
    -- alias
    -- base
    -- bran
    -- passcode (if have any for keystore)
    -- text
    -- signatures

## handler to return  doifyed sign method

## verify method 
    -- try
    -- -- retrieving existing Hab 
    -- -- -- retrieve sigers ??
    -- -- -- retrieve key event verifier (kevers) from hab.kevers[args.prefix]
    -- -- -- verify the sigers verifier against kevers from the hab (habitats)
