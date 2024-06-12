def max_3_broja(a: float, b:float, c: float) -> float:
    if a>b:
        if a>c:
            return a
        else:
            return c
    else:
        if b>c:
            return b
        else:
            return c
print(max_3_broja(7,78,56))        
   