/* COMPLETED */

INSERT INTO department (name)
VALUES ("Management"),
        ("Accounting"),
        ("Quality Control"),
        ("Customer Service"),
        ("Supplier Relations"),
        ("Reception"),
        ("Sales"),
        ("Warehouse"),
        ("Party Planning Committee");

INSERT INTO role (title, salary, department_id)
VALUES  ("Regional Manager", 100000, 1),
        ("Original Assistant Regional Manager", 55000, 2),
        ("Assistant Regional Manager", 75000, 3),
        ("Senior Accountant", 70000, 4),
        ("Accountant", 60000, 5 ),
        ("Quality Assurance Rep", 55000, 6),
        ("Customer Service Rep", 45000, 5),
        ("Supplier Relations", 50000, 4),
        ("Receptionist", 35000, 8),
        ("Regional Director in Charge of Sales", 120000, 7),
        ("Sales Rep", 85000, 6),
        ("Warehouse Foreman", 45000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Michael", "Scott", 1, NULL),
        ("Dwight K", "Schrute", 2, 1),
        ("Jim", "Halpert", 3, 1);
        /* ("Angela, Martin", ),
        ("Kevin, Malone"),
        ("Oscar, Martinez"),
        ("Creed, Bratton"),
        ("Kelly, Kapoor"),
        ("Meredith, Palmer"),
        ("Pam, Beesly"),
        ("Andy, Bernard"),
        ("Darryl, Philbin"),
        ("Jerry, DiCanio"),
        ("Madge, Madsen"),
        ("Lonnie, Collins"); */