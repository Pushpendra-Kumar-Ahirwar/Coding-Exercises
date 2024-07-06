#include<iostream>
using namespace std;
int main(){
    int num1=0;
    int num2=1;
    int temp,lenght;

    cout<<"Enter lenght of series: ";
    cin>>lenght;

    cout<<num1<<","<< num2<<",";
    
    for (int i = 2; i < lenght; i++)
    {
        temp=num1+num2;
        num1=num2;
        num2=temp;
        cout<<temp<<",";
    }
    
    return 0;
}