#include<iostream>
using namespace std;
int main(){
int number, temp,sum=0;
int remainder;
cout<<"Enter Number for check Palidrome: ";
cin>>number;
temp=number;

while(number>0){
    remainder=number%10;
    sum=(sum*10)+remainder;
    number=number/10;
}
    if(sum==temp){
        cout<<temp<<" Is a palindrome number";
    }else{
        cout<<temp<<" Is Not a palidrome number";
    }
    
return 0;
}