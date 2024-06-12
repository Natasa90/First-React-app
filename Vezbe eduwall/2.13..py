n = int(input("Broj: "))
s = 0
for i in range (1,n+1): 
    if i%6==0: 
        s+=i
print ("Suma =",s)