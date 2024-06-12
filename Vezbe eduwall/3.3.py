lst_1=[]

while(True):
    a = int(input("Unesi ceo broj: "))
    if(a==0):
        break
    lst_1.append(a)
print (lst_1)
lst2=[]        
for el in lst_1:
    lst2.append(str(el))
print (lst2)
string_1= "*".join(lst2)
print(string_1)    
