#include <stdio.h>
#include <stdlib.h>



int signum (int i)
{

    if(i>0)
    { printf("Das Ergebnis ist: 1");}
    else if(i<0)
        { printf("Das Ergebnis ist: -1"); }
        else
            printf("Das Ergebnis ist: 0");
         return signum;
          }

          int main()
{
    int i;
    scanf("%d",&i);

    signum(i);
}
