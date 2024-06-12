q1 = "Best game?"
q2 = "Best computer?"
q3 = "Best movie?"

a1 ="Garden Scapes"
a2 = "Mac"
a3 = "Kengur"

pts = 0 

if(input(q1)==a1):
    pts+=1
if(input(q2)==a2):
    pts+=1
if(input(q3)==a3):
    pts+=1

print ("###################RESULTS##########################")

print ("Question 1:", q1)
print ("Answer 1: ", a1)
print ("Question 2:", q2)
print ("Answer 2: ", a2)
print ("Question 3:", q3)
print ("Answer 3: ", a3)
print("Your score is:", pts)
