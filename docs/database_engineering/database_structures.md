---
sidebar_position: 2
---

# Database Structures and Management

## Intro to MySQL

MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the acronym for Structured Query Language.

## Filtering Data

Filtering data in MySQL involves retrieving specific records from a database table based on certain conditions or criteria. The filtering process is typically accomplished using the SELECT statement along with various clauses and operators.

Here's a summary of the key components and techniques used for filtering data in MySQL:

1. SELECT statement: The SELECT statement is used to retrieve data from one or more database tables. It allows you to specify the columns to be included in the result set.
2. WHERE clause: The WHERE clause is used to specify conditions that the retrieved data must meet. It allows you to filter data based on specific column values or expressions.
3. Comparison operators: MySQL provides various comparison operators, such as {'='}, {'<>'}, {'<'}, {'>'}, {'<='}, {'>='}, to compare column values with constants or other columns.
4. Logical operators: Logical operators like AND, OR, and NOT can be used to combine multiple conditions in the WHERE clause, allowing for more complex filtering.
5. Pattern matching: The LIKE operator is used for pattern matching within string columns. It supports the use of wildcards, such as {'%'} to match any sequence of characters or {'_'} to match a single character.
6. IN operator: The IN operator allows you to specify multiple values within parentheses. It checks if a column value matches any of the specified values.
7. BETWEEN operator: The BETWEEN operator is used to select values within a range. It checks if a column value is between two specified values, inclusive of the endpoints.
8. NULL values: To filter for NULL values in a column, you can use the IS NULL or IS NOT NULL operators.
9. ORDER BY clause: The ORDER BY clause is used to sort the result set in ascending or descending order based on one or more columns.
10. LIMIT clause: The LIMIT clause allows you to limit the number of rows returned by a query. It is often used in combination with the ORDER BY clause to retrieve the top or bottom records.

By combining these techniques, you can effectively filter and retrieve the specific data you need from a MySQL database.

## Joining Tables

Joining tables in MySQL is a powerful technique that allows you to combine data from multiple tables based on common columns, enabling you to retrieve related information. 

```sql
SELECT columns
FROM table1
JOIN table2 ON table1.column = table2.column;
```

Here's a summary of the key points to understand about joining tables in MySQL:

Join types: MySQL supports different types of joins, including INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.

- INNER JOIN: Returns only the rows that have matching values in both tables based on the specified join condition.

```sql
SELECT customers.customer_id, customers.name, orders.order_id, orders.order_date
FROM customers
INNER JOIN orders ON customers.customer_id = orders.customer_id;
```

- LEFT JOIN: Returns all rows from the left (or first) table and the matching rows from the right (or second) table. If there is no match, NULL values are returned for the right table columns.

```sql
SELECT customers.customer_id, customers.name, orders.order_id, orders.order_date
FROM customers
LEFT JOIN orders ON customers.customer_id = orders.customer_id;
```

- RIGHT JOIN: Returns all rows from the right (or second) table and the matching rows from the left (or first) table. If there is no match, NULL values are returned for the left table columns.

```sql
SELECT customers.customer_id, customers.name, orders.order_id, orders.order_date
FROM customers
RIGHT JOIN orders ON customers.customer_id = orders.customer_id;
```

- FULL JOIN: Returns all rows from both tables, including unmatched rows. If there is no match, NULL values are returned for the columns of the table that does not have a matching row.

```sql
SELECT customers.customer_id, customers.name, orders.order_id, orders.order_date
FROM customers
LEFT JOIN orders ON customers.customer_id = orders.customer_id
UNION
SELECT customers.customer_id, customers.name, orders.order_id, orders.order_date
FROM customers
RIGHT JOIN orders ON customers.customer_id = orders.customer_id
WHERE customers.customer_id IS NULL;
```

ON clause: The ON clause is used to specify the join condition. It defines how the tables are related and which columns to compare. The join condition typically involves matching values in the related columns of the joined tables.

Alias: Table aliases can be used to provide temporary names for the tables involved in the join. This can make the query more concise and readable, especially when joining multiple tables.

Multiple joins: It is possible to join more than two tables in a single query. By extending the join syntax and adding additional ON clauses, you can establish relationships between multiple tables.

Self-join: A self-join occurs when a table is joined with itself. It is useful when you need to compare different rows within the same table or retrieve hierarchical data.

Using the USING clause: The USING clause is an alternative syntax for specifying the join condition. It simplifies the syntax when the joining columns have the same name in both tables.

Cross join: A cross join, also known as a Cartesian join, returns the combination of all rows from the joined tables. It does not require a join condition.

By understanding these concepts and techniques, you can effectively utilize joins in MySQL to combine data from multiple tables, enabling you to retrieve comprehensive and related information from your database.

## Grouping Data

Grouping data in MySQL allows you to categorize and summarize data based on specific criteria. It is commonly used in combination with aggregate functions to perform calculations on groups of rows. Here's a summary of the key concepts and techniques for grouping data in MySQL:

1. GROUP BY clause: The GROUP BY clause is used to specify the column(s) by which you want to group the data. Rows with the same values in the specified column(s) are combined into groups.
2. Aggregate functions: MySQL provides various aggregate functions, such as COUNT, SUM, AVG, MIN, MAX, etc., which allow you to perform calculations on groups of rows within each group.
3. HAVING clause: The HAVING clause is used to filter the groups based on a specific condition. It works similarly to the WHERE clause but operates on the grouped data rather than individual rows.
4. Single-column grouping: You can group data based on a single column by specifying that column in the GROUP BY clause. This will create separate groups for each unique value in the column.
5. Multiple-column grouping: If you want to group data based on multiple columns, you can specify those columns in the GROUP BY clause. This creates groups based on unique combinations of values across the specified columns.
6. Sorting grouped data: You can use the ORDER BY clause to sort the grouped data based on specific columns or aggregate function results.
7. Grouping with expressions: In addition to grouping by columns, you can also group data based on expressions, calculations, or functions in the GROUP BY clause. This allows for more complex grouping criteria.
8. Grouping sets: MySQL supports the GROUPING SETS clause, which allows you to define multiple grouping sets in a single query. This is useful when you want to group data in various combinations and obtain multiple levels of summarization.
9. Rollup: The ROLLUP modifier is used to generate subtotals and grand totals in the result set. It creates additional rows that represent higher-level aggregations based on the columns specified in the GROUP BY clause.

By utilizing these techniques, you can effectively group and summarize data in MySQL based on specific criteria, allowing you to obtain aggregated information and perform calculations on subsets of data within each group.

# Updating Databases and Working with Views

## Updating and Inserting Data

To update existing data in a MySQL table, you can use the **`UPDATE`** statement. The basic syntax is as follows:

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

To insert new data into a MySQL table, you can use the **`INSERT INTO`** statement. There are two ways to insert data:

- Inserting values into specific columns:

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

- Inserting values for all columns:

```sql
INSERT INTO table_name
VALUES (value1, value2, ...);
```

By using the **`UPDATE`** and **`INSERT INTO`** statements, you can modify and add data in MySQL tables according to your specific requirements.

## Constraints

In MySQL, constraints are used to define rules and restrictions on the data that can be inserted, updated, or deleted in database tables. Constraints help ensure data integrity and maintain consistency in the database. 

Here are some commonly used constraints in MySQL:

Primary Key (PK) Constraint:
A primary key constraint is used to uniquely identify each record in a table. It ensures that the specified column(s) or combination of columns have unique values and cannot contain NULL values. Only one primary key constraint is allowed per table.

```sql
CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(50)
);
```

Foreign Key (FK) Constraint:
A foreign key constraint establishes a relationship between two tables by enforcing referential integrity. It ensures that the values in a specific column(s) of one table match the values of the primary key in another table (referenced table). Foreign key constraints help maintain data consistency and enforce relational integrity.

```sql
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  order_date DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
```

Unique Constraint:
A unique constraint ensures that the values in a specific column(s) are unique and cannot be duplicated within a table. Unlike the primary key constraint, unique constraints allow NULL values.

```sql
CREATE TABLE employees (
  employee_id INT,
  email VARCHAR(50) UNIQUE,
  ...
);
```

Not Null Constraint:
The not null constraint ensures that a column must contain a non-null value. It prevents the insertion of NULL values in the specified column(s).

```sql
CREATE TABLE products (
  product_id INT,
  product_name VARCHAR(50) NOT NULL,
  ...
);
```

Check Constraint:
A check constraint is used to define a condition that must be true for the data being inserted or updated. It allows you to enforce custom business rules and data validations.

```sql
CREATE TABLE students (
  student_id INT,
  age INT,
  CONSTRAINT CHK_AGE CHECK (age >= 18 AND age <= 30)
);
```

## Changing Table Structure

## Subqueries

In MySQL, a subquery (also known as an inner query or nested query) is a query embedded within another query. Subqueries are used to retrieve data from one table based on the results of another query. They can be used in SELECT, INSERT, UPDATE, or DELETE statements. Here's an overview of subqueries in MySQL:

1. Syntax:
The basic syntax of a subquery in MySQL is as follows:

```
SELECT column(s) FROM table WHERE column IN (SELECT column FROManother_table WHERE condition);
```

In this example, the subquery **`(SELECT column FROM another_table WHERE condition)`** is embedded within the main query.

1. Subquery Types:
There are different types of subqueries that can be used in MySQL:
    - Scalar subquery: A subquery that returns a single value.
    - Single-row subquery: A subquery that returns a single row.
    - Multiple-row subquery: A subquery that returns multiple rows.
2. Usage Examples:
Here are a few examples to illustrate the use of subqueries in MySQL:
- Subquery in WHERE clause:

```sql
SELECT product_name, price FROM products WHERE price > (SELECT AVG(price) FROM products);
```

This query retrieves product names and prices from the "products" table where the price is greater than the average price of all products.

- Subquery in FROM clause:

```sql
SELECT category, COUNT(*) AS total_products FROM (SELECT DISTINCTcategory FROM products) AS subquery GROUP BY category;
```

This query counts the number of distinct categories in the "products" table by using a subquery in the FROM clause.

- Subquery in SELECT clause:

```sql
SELECT employee_name, (SELECT MAX(salary) FROM employees) AS max_salaryFROM employees;
```

This query retrieves employee names along with the maximum salary obtained from a subquery in the SELECT clause.

These examples showcase the flexibility and power of subqueries in MySQL, allowing you to perform complex queries by combining and nesting multiple queries together.

Remember that when using subqueries, it's important to consider their efficiency and performance impact, especially when dealing with large datasets. Proper indexing and optimization techniques can help improve query execution speed.

## Virtual Tables

In MySQL, virtual tables (also known as virtual or generated columns) are columns that are not physically stored in the database but are computed based on expressions or functions. They provide a way to define derived or calculated values on the fly without storing them explicitly in the database.

To create a virtual column in MySQL, you can use the **`GENERATED ALWAYS AS`** clause when defining the table structure. The syntax is as follows:

```sql
CREATE TABLE table_name (
  column1 data_type,
  column2 data_type,
  virtual_column data_type GENERATED ALWAYS AS (expression) [VIRTUAL]
);
```

- Virtual columns can be used in SELECT, INSERT, UPDATE, and WHERE clauses, just like regular columns.
- Virtual columns are recalculated automatically whenever the underlying data changes, so you don't need to update them explicitly.
- Virtual columns cannot be indexed directly, but you can create indexes on the expressions used in the virtual column definition.
- Virtual columns can improve query performance by pre-computing derived values and avoiding the need for complex calculations in queries.

# Functions and MySQL Stores Procedures

## Functions in MySQL

In MySQL, functions are pre-defined routines that perform specific operations on data and return a result. They are used to manipulate, transform, or calculate values within SQL statements. MySQL provides a wide range of built-in functions that can be used for various purposes. Here are some common categories of functions in MySQL:

Scalar Functions:
Scalar functions operate on a single value and return a single value. Some commonly used scalar functions in MySQL include:

- Mathematical Functions: ABS, ROUND, CEILING, FLOOR, etc.
- String Functions: CONCAT, LENGTH, SUBSTRING, UPPER, LOWER, etc.
- Date and Time Functions: NOW, CURDATE, CURTIME, DATE_FORMAT, TIMESTAMPDIFF, etc.
- Conditional Functions: IF, CASE, NULLIF, COALESCE, etc.
- Conversion Functions: CAST, CONVERT, JSON functions, etc.

Example:

```sql
SELECT CONCAT('Hello', ' ', 'World') AS greeting;
```

Aggregate Functions:
Aggregate functions operate on a set of values and return a single value summarizing that set. They are commonly used with the GROUP BY clause to perform calculations on grouped data. Some commonly used aggregate functions in MySQL include:

- COUNT: Returns the number of rows or non-null values in a column.
- SUM: Calculates the sum of values in a column.
- AVG: Computes the average of values in a column.
- MAX: Retrieves the maximum value in a column.
- MIN: Retrieves the minimum value in a column.

Example:

```sql
SELECT COUNT(*) AS total_customers FROM customers;
```

Grouping Functions:
Grouping functions are used to group and summarize data based on certain criteria. They are typically used with the GROUP BY clause. Some commonly used grouping functions in MySQL include:

- GROUP_CONCAT: Concatenates values from multiple rows into a single string.
- GROUPING: Indicates whether a column or expression is part of the grouping criteria.
- GROUPING_ID: Returns a bit pattern that represents the grouping columns.

Example:

```sql
SELECT category, GROUP_CONCAT(product_name) AS products_list FROM products GROUP BYcategory;
```

User-Defined Functions (UDFs):
MySQL also allows you to create your own custom functions using the CREATE FUNCTION statement. User-defined functions can be written in various programming languages like SQL, C/C++, or Java, and provide extended functionality specific to your application requirements.

Example:

```sql
CREATE FUNCTION calculate_discount(price DECIMAL(10,2), discount DECIMAL(4,2)) RETURNSDECIMAL(10,2) BEGIN DECLARE discounted_price DECIMAL(10,2); SET discounted_price =price - (price * discount); RETURN discounted_price; END;
```

These are just a few examples of functions in MySQL. MySQL provides a vast array of functions that can be used to manipulate, transform, and calculate values in SQL statements, making it a powerful tool for data manipulation and analysis. For a comprehensive list of functions and their usage, refer to the MySQL documentation.

## Procedures

In MySQL, a stored procedure is a named collection of SQL statements that are stored in the database and can be invoked or called multiple times. Procedures allow you to encapsulate and reuse a set of SQL statements as a single unit, providing modularity and code organization within the database. Here's an overview of procedures in MySQL:

Creating a Procedure:
To create a stored procedure in MySQL, you can use the CREATE PROCEDURE statement. The basic syntax is as follows:

```sql
CREATE PROCEDURE procedure_name ([parameter_list]) [characteristics] BEGIN -- SQL statements END;
```

- **`procedure_name`** is the name of the stored procedure.
- **`parameter_list`** is an optional list of input or output parameters that the procedure can accept.
- **`characteristics`** define attributes such as the security type, SQL data access, and more (e.g., **`DETERMINISTIC`**, **`SQL SECURITY`**, **`COMMENT`**).

Executing a Procedure:
To execute a stored procedure, you can use the CALL statement followed by the procedure name and any required input parameters.

```sql
CALL procedure_name([parameter_list]);
```

Example:
Here's an example of a simple stored procedure that inserts a new record into a table:

```sql
CREATE PROCEDURE insert_customer(IN name VARCHAR(50), IN email VARCHAR(50)) BEGININSERT INTO customers (name, email) VALUES (name, email); END;
```

In this example, the **`insert_customer`** procedure is created with two input parameters: **`name`** and **`email`**. When executed, it inserts a new record into the **`customers`** table using the provided values.

Procedure Parameters:
Stored procedures can have input, output, or input/output parameters. Input parameters are used to pass values into the procedure, output parameters are used to return values from the procedure, and input/output parameters can be used for both passing values in and returning values out.

```sql
CREATE PROCEDURE procedure_name(IN input_param datatype, OUT output_param datatype)
```

Dropping a Procedure:
To remove a stored procedure from the database, you can use the DROP PROCEDURE statement.

```sql
DROP PROCEDURE IF EXISTS procedure_name;
```

Stored procedures provide a way to encapsulate and manage complex logic within the database. They can be used for various tasks such as data manipulation, data validation, business rules implementation, and more. By using stored procedures, you can improve code reusability, maintainability, and security in your MySQL database.