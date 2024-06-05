# KERI demo Witness Setup

This document explains the steps to set up a demo collection of witnesses for a KERI (Key Event Receipt Infrastructure) application.

## Step-by-Step Explanation

## parse the arguments using argparse

### Configuration of Witnesses:

```python
sabbircf = configing.Configer(name="sabbir", headDirPath="scripts", temp=False, reopen=True, clear=False)
# can be multiple witness config like this
```
### Habery Instances Creation:

```python
sabbirHby = habbing.Habery(name="sabbir", salt=Salter(raw=b'sabbir-the-witness').qb64, temp=False, cf=sabbircf)
# can be multiple habery db like this for every witness we want to create
```



## InitDoer class which will ``doify`` initialize method to setup the witness 

```python

class InitDoer(doing.DoDoer):
    def __init__(self, sabbirhby ): #sabbir is
       
        self.sabbirhby = sabbirhby
        super(InitDoer, self).__init__(doers=[doing.doify(self.initialize)])
```

### initialize method in InitDoer which will be used by doify to create coroutine
1. setup witness using indirecting class with tcp http port and alias and db
```python
def initialize(self, tymth, tock=0.0):
        # enter context
        self.wind(tymth)
        self.tock = tock
        _ = (yield self.tock) 
        #why this method need to have thse three lines of code?
        # they make the method  doifyable means generatorizeable

        sabbirDoers = indirecting.setupWitness(alias="sabbir",hby=self.sabbirhby, tcpPort=5631, httpPort=5641)
        
        self.extend(sabbirDoers)
```