const employees = [
    { name: 'Alice', salary: 5000 },
    { name: 'Bob', salary: 6000 },
    { name: 'Charlie', salary: 4500 }
  ];

//У вас есть массив объектов, представляющих сотрудников с полями "имя" и "зарплата". Используя метод map, удвойте зарплату каждого сотрудника.

  const doubledSal = employees.map(employee => ({
    name: employee.name,
    salary: employee.salary * 2
    })); 
  console.log(doubledSal);


//Используя метод filter, отфильтруйте сотрудников, у которых зарплата выше 5500.

  employees
.filter(({salary}) => salary > 5500)
.forEach(({name, salary}) => console.log(name, salary));


//Используя метод reduce, вычислите общую зарплату всех сотрудников.

const totalSal = employees.reduce((acc, employee) => acc + employee.salary, 0);
console.log(totalSal);


//Используя метод map, преобразуйте имена всех сотрудников к верхнему регистру.

const upCaseNam = employees.map(employee => ({ ...employee, name: employee.name.toUpperCase() }));
console.log(upCaseNam);