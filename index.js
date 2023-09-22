const fs = require('fs'); 
funcon calculateHRA(basicSalary)
 {     return basicSalary * 0.2; // Assuming HRA is 20% of basic salary 
} 
func on calculateDA(basicSalary)
 {     return basicSalary * 0.1;
     // Assuming DA is 10% of basic salary 
} 
func on calculateGrossSalary(basicSalary)
 {     const hra = calculateHRA(basicSalary); 
        const da = calculateDA(basicSalary);  
           return basicSalary + hra + da; 
} 
func on main() { 
    fs.readFile('data.json', 'u 8', (err, data) => { 
        if (err) {console.error('Error reading file:', err); 
                      return; 
        } 
        const employeeData = JSON.parse(data); 
                for (const employee of employeeData) 
                 const basicSalary = employee.basicSalary;
    const grossSalary = calculateGrossSalary(basicSalary);
     console.log(`Name: ${employee.name}`);  
     console.log(`Basic Salary: $${basicSalary}`);
    console.log(`HRA: $${calculateHRA(basicSalary)}`);
     console.log(`DA: $${calculateDA(basicSalary)}`);  
      console.log(`Gross Salary: $${grossSalary}`);           
        console.log('------------------------');} 
    }); 
} main(); 
