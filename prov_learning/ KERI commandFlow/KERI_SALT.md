## generate and print SALT 


### parse argument

### salterDo
    -- use yield to make it doifyable
    create salt using >> core.Salter(raw=pysodium.randombytes(pysodium.crypto_sign_SEEDBYTES)).qb64

## handler 
    -- returns generator >> doify the salterDo 

