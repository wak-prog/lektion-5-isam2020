#include <stdio.h>
#include <stdlib.h>

int main()
{
    int a,b,c,d;
    int erg_ab,erg_cd,ergebnis ;
    scanf("%d",&a);
    scanf("%d",&b);
    scanf("%d",&c);
    scanf("%d",&d);
    erg_ab  = (a*b);
    erg_cd = (c*d);
    ergebnis= erg_ab + erg_cd;
printf("\n Die Ergebnis ist: %d", ergebnis);
}
