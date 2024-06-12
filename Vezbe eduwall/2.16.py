n = 9 
m = 3 

for i in range (0,m): 
    for j in range (0,n): 
        if (i==0 or i==m or j==0 or j==n-1): 
            print ("*", end="")
        else: 
            print(" ", end="")
    print("")