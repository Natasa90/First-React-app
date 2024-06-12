suma = int(input("Unesi broj:"))
deset = suma//10
petice = (suma % 10) //5
dvojke = (suma % 10 % 5) //2
jedinice = (suma % 10 % 5 % 2) //1
print("Desetice : ", deset)
print("Petice : ", petice)
print("Dvojke : ", dvojke)
print("Jedinice : ", jedinice)
