broj = int(input("Unesite broj: "))
if broj <=0: 
    print("Broj je negativan ili nula.")
elif broj >0 and broj<10:
    print ("Broj je jednocifren.")
elif broj >10 and broj<100: 
    print ("Broj je dvocifren.") 
elif broj >100 and broj<1000:
    print ("Broj je trocifren.")
else:
    print ("Broj je cetvorocifren ili veci.")