lista = []
print(lista)
lista.append(1)
print(lista)
lista2 = [3,4]
lista.extend(lista2)
print(lista)
lista.insert(1,7)
lista.append(7)
print(lista)
print(lista.count(7))
print(lista.pop(3))
print(lista)
lista.clear()
print(lista)
lista = [3,6,2,7,7,9,9]
for i in lista:
    print(i,end=" ")
lista[3]=45
print("\n",lista)
 
a = 7
b = 5
pom = a # pom = 7 
a = b # a = 5, b= 5
b = pom # b = 7
print(a,b)
 
(a,b) = (b,a)
print(a,b)
 
a = 7
b = 5
a = a - b # a = 2, b = 5
b = a + b # a = 2, b = 7
a = b - a # a = 5, b = 7
print(a,b)
 
lista = [3,6,2,7,7,9,9]
 
pom = lista[1] # pom = 6
lista[1] = lista[3]
lista[3] = pom
print(lista)
 
lista[1],lista[3]=lista[3],lista[1]
# (lista[1],lista[3])=(lista[3],lista[1])
print(lista)
 
lista.sort()
print(lista)
lista.reverse()
print(lista)
lista = [7,2,1,5,4,3]
for i in range(len(lista)-1):
    for j in range(i+1,len(lista)):
        print(i,j)
        if lista[i]>lista[j]:
            (lista[i],lista[j])=(lista[j],lista[i])
print(lista)
 
lista = [5,9,2,5,4,7,7]
print(lista[::])
print(lista[:])
print(lista[2:5])
print(lista[-5:-2])
print(lista[:-2])
print(lista[-2:])
print(lista[::-1])
print(lista[2:5:-1])
print(lista[2::-1])
print(lista[4:1:-1])
print(lista[-3:-6:-1])
 
for i in range(4,1,-1):
    print(i,end=" ")