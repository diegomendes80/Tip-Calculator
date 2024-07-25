#include<iostream>
#include<vector>

    using namespace std;

        int main(){

            int s=5, t=3;

            // cin>>s>>t;

            vector<vector<int>> v(s); 

            for(int i=0; i<t; i++){
                int x, y;

                cin>>x>>y;

                v[x].push_back(y);
                v[y].push_back(x);


            }

            cout <<  "Output: "<< v[1][2];

            
        }