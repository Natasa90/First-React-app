x = str(input("Unesi prvi string: "))
y = str(input("Unesi drugi string: "))


if (len(x)<6 or len(y)<6):
    print("Greska")
else:
    x_isecak=x[3:6]
    y_isecak=y[3:6]
    if (x_isecak==y_isecak):
        print("Da")
    else:
        print("Ne")    