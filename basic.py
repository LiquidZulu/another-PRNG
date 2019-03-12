# note this has been adapted from very old code and may not work anymore. I recommend using the JavaScript version instead as it is much more up to date.

def Random(low, high, *args):    

    import math
    
    try:
      n = args[0]
    except:
      n = math.pi
    
    k = (high-low)/math.pi
    rand = math.acos(math.cos(n))*k + low
    return rand
