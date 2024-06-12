def f(a=5,b=0,c=9):
    print(a,b,c)
 
f(1,2,3)
f(1,2)
f(1)
f()
 
def g(*args):
    print(args)
 
g(1,2,3,4,5)
g(1,2,3,4,5,7,8,9,0)
 
def h(a,b,*c,**k):
    print(a,b,c,k["s"],k["s2"]) # print(a,b,c,k) ovako ispisuje ceo recnik k
 
h(3,4,7,9,2,s="Dobar dan",s2="Dobro vece")
 
def Min(a: int,b: int) -> int:
    return a if a<b else b
 
c = min(7,9)
print(c)
print(Min(7,9))
 
def kako_hocemo(*a: int) -> int:
    #print(type(a))
    m = a[0] # m = 3
    for i in range(1,len(a)):
        if a[i] > m:
            m = a[i]
    return m
 
 
maxi = kako_hocemo(3,6,7,1,2,0,9,8,21)
print(maxi)
 
import sys
 
def kako_hocemo2(*a: int) -> int:
    m = -sys.maxsize - 1
    for i in a:
        if i > m:
            m = i
    return m
 
 
maxi = kako_hocemo2(-4,-7)
print(maxi)
 
def suma(*args: int) -> int:
    s: int = 0
    for i in args:
        s += i
    return s
 
print(suma(93,2,5,6,8,9,1,9))
 
def suma_n(n: int) -> int :
    s = 0
    for i in range(1,n+1):
        s += i
    return s
 
print(suma_n(5))
print(suma_n(100))
 
def f(n):
    if n==0:
        return
    print(n,end=" ")
    f(n-1)
    print(n,end=" ")
 
f(3)
 
  
   