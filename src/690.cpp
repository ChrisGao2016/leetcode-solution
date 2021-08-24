/*
// Employee info
class Employee {
public:
    // It's the unique ID of each node.
    // unique id of this employee
    int id;
    // the importance value of this employee
    int importance;
    // the id of direct subordinates
    vector<int> subordinates;
};
*/
#include <map>

class Solution {
  public:
      int getImportance(vector<Employee*> employees, int id) {
        map<int, Employee*> employeeMap;
        for(vector<Employee*>::iterator it = employees.begin(); it != employees.end(); ++it) {
            employeeMap[(*it)->id] = *it;
        }
        vector<int> subordinates = employeeMap[id]->subordinates;
        int sum = employeeMap[id]->importance;
        sum += calImportance(subordinates, employeeMap);
        return sum;
      }
      int calImportance(vector<int> subordinates, map<int, Employee*> employeeMap) {
        int sum = 0;
        for(vector<int>::iterator it = subordinates.begin(); it!=subordinates.end(); ++it) {
             sum += employeeMap[*it]->importance;
             sum += calImportance(employeeMap[*it]->subordinates, employeeMap);
        }
        return sum;
      }
  };
  
