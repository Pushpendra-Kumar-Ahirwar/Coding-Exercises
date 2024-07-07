#include<iostream>
using namespace std;

int main(){
    int number, temp, remainder;
    int sum=0;
    cout<<"Enter Number For Check Armstrong: ";
    cin>>number;
    temp=number;

    while(number>0)
    {
        remainder=number%10;
        sum=sum+(remainder*remainder*remainder);
        number/=10;
    }

    if(temp==sum)
    {
        cout<<temp<<": Is a Armstrong Number";
    }else{
        cout<<temp<<": Is Not a Armstrong Number";
    }
    
    return 0;

}