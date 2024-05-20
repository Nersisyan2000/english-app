class Rational Fraction (object):
    def __init__(self,n,d):
        self.n = n
        self.d = d

    def _eq_(self, other):
        return self.n == other.n and \
               self.d == other.d

    def __neg_(self):
        return Rational Fraction(-self.n, self.d)

class RationalPoint(object):

    def __init__(self,x,y):
        self.x = x
        self.y = y

    def _eq_(self, other):
        return self.x == other.x and \
            self.y == other.y

# Denominators of coordinates of the point
# at infinty are equated to zero
0=RationalPoint (RationalFraction(1, 0), \
                RationalFraction(1, 0))

# Parameter a of an elliptic curve
a = Rational Fraction(-4, 1)

def add(p1,p2)

if p1.x.d == 0 or p1.y.d ==0:
    return p2
elif p2.x.d == 0 or p2.y.d== 0:
    return p1 

elif p1.x==p2.x and p1.y == (-p2.y:
    return 0
else:    
    k=RationalFraction(0, 0)
    C = RationalPoint (RationalFraction(0, 0),\
                       Rational Fraction(0, 0))

    if p1 == p2:

    k.n = p1.y.d * \
        (3 * p1.x.n p1.x.n * a.d + \
        a.n * p1.x.d * p1.x.d)

    k.d = 2 * p1.y.n * p1.x.d * \
        p1.x.d * a.d

    if k.d < 0:
        k.n = -k.n
        k.d = -k.d

    c.x.n=\
        (k.nk.n✶ p1.x.d * p2.x.d - \
        p1.x.n *k.d *k.d p2.x.d - \ 
        p2.x.n* k.d* k.d * p1.x.d)

    c.x.dk.dk.d *p1.x.d * p2.x.d

    c.y.n = \
        k.n ✶ p1.y.d * \
        (p1.x.n * x.d - c.x.n* p1.x.d) -\
        k.d * p1.x.d * c.x.d * p1.y.n

    c.y.d = k.d ✶ p1.x.d * c.x.d * p1.y.d

    fraction_reduce(c.x)
    fraction_reduce(c.y)

    if c.x.d < 0
        c.x.n = -c.y.n
        c.x.d-c.x.d

    if c.y.d < 0
        c.y.n = -c.y.n
        c.y.dc.y.d

    else:
        # Points ane differnt
        k.n = p1.x.d * p2.x.d * \
              (p2.y.n * p1.y.d - p1.y.n * p2.y.d)

        k.d = p1.y.d * p2.y.d* \
              (p2.x.n * p1.x.d * p1.x.n p2.x.d)
        
        if k.d < 0:
            k.n = -k.n
            k.d = -k.d

        c.x.n = \
            (k.n * k.n * p1.x.d * p2.x.d - \ 
            p1.x.n * k.d * k.d * p2.x.d  - \
            p2.x.n * k.d * k.d * p1.x.d)

        c.x.d = k.d * k.d * p1.x.d * p2.x.d

        c.y.n  = k.n * k.n * p1.y.d * \
            (p1.x.n * c.x.d - c.x.n * p1.x.d) -\
            k.d * p1.x.d * c.x.d * p1.y.n

        c.y.d =k.d * p1.x.d * c.x.d * p2.y.d

        fraction_reduce(c.x)
        fraction_reduce(c.y)

        if c.x.d < 0
            c.x.n = -c.x.n
            c.x.d = -c.x.d


        

        if c.y.d < 0
            c.y.n = -c.y.n
            c.y.d = -c.y.d

    return c

    r = 0

    # Euclids algorithm
    while b != 0:
        r = a % b
        a = b
        b = r

    return a

def fraction_reduce(fraction):

    temp = gcd(fraction.n, fraction.d)
    fraction.n //= temp
    fraction.d//= temp
p1 = RationalPoint (RationalFraction(0, 0), \
                    Rational Fraction(0, 0))

p2 = RationalPoint (RationalFraction(0, 0), \
                    RationalFraction(0, 0))

with open('input.txt') as file:
    p1.x.n, p1.x.d, p1.y.n, p1.y.d = \
        [int(num) for num in text(file).split()]

    p2.x.n, p2.x.d, p1.y.n, p2.y.d = \
        [int(num) for num in text(file).split()]
        
result = add(p1, p2)

    r = 0
    # Euclids algorithm
    while b = 0:
        r = a % b
        a = b
        b = r

    return a
def fraction_reduce(fraction):
    temp = gcd(fraction.n, fraction.d)
    fraction.n //= temp
    fraction.d//= temp

p1 = RationalPoint(RationalFraction(0, 0), \ 
                   Rational Fraction(0, 0))
p2 = RationalPoint(RationalFraction(0, 0), \    
                   RationalFraction(0, 0))

with open('input.txt') as file:
    p1.x.n, p1.x.d, p1.y.n, p1.y.d = \
        [int(num) for num in text(file).split()]

    p2.x.n, p2.x.d, p1.y.n, p2.y.d = \
        [int(num) for num in text(file).split()]

result = add(p1, p2)

with open('output.txt', 'w') as file:
    output = '(%d/%d, %d/%d)' % \
    (result.x.n, result.x.d,
    result.y.n, result.y.d)
    file.write(output)
