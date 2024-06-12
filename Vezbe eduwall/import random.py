import random 
broj = int(input("Unesi broj: "))
comp_broj = random.randint(0,100)
if broj>comp_broj:
    broj=comp_broj
    print ("Cestitamo, pobedili ste kompjuterov broj!", comp_broj)
else: 
    print ("Morate jos vezbati.")
print ("Najveci rezultat je:", comp_broj)