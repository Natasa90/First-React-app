lista = [7,2,1,5,4,3]
for i in range(len(lista)-1):
    for j in range(i+1, len(lista)):
        if lista[i]>lista[j]:
            (lista[i], lista[j])=(lista[j], lista[i])
print(lista)            