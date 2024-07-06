#include<iostream>
using  namespace std;
bool checkPrime(int num){
    if (num<=1){
        return false;
    }

    for (int i = 2; i <= num/2; i++){
       if (num%i==0){
        return false;
         }
    }

        return true;
}

int main(){
    int lenght;
    cout<<"Enter the lenght of checking number from 1-100: ";
    cin>>lenght;
    cout<<"Prime Number from  1 to "<<lenght<<" are: ";

    for (int  i = 2; i <= lenght; i++)
    {
        if (checkPrime(i)){
            cout<<i<<",";
        }
        
    }
    
    return 0;
}
