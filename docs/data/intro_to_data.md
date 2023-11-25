---
sidebar_position: 1
---

# Introduction to Databases

## Databases and Data

- **Data** are observations or measurements (unprocessed or processed) represented as text, numbers, or multimedia.
- **Dataset** is a structured collection of data generally associated with a unique body of work.
- **Database** is an organized collection of data stored as *multiple* datasets. Those datasets are generally stored and accessed electronically from a computer system that allows the data to be easily accessed, manipulated, and updated.

## Intro to SQL

SQL is a standard language for storing, manipulating and retrieving data in databases.

**Creating a Database:**

```sql
CREATE DATABASE database_name;
```

**Creating a Table:**

```sql
CREATE TABLE table_name ( column1 datatype constraint, column2 datatype constraint, ... );
```

**Inserting Data:**

```sql
INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
```

**Selecting Data:**

```sql
SELECT column1, column2, ... FROM table_name WHERE condition;
```

**Updating Data:**

```sql
UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;
```

**Deleting Data:**

```sql
DELETE FROM table_name WHERE condition;
```

**Joining Tables:**

```sql
SELECT column1, column2, ... FROM table1 JOIN table2 ON table1.column = table2.column;
```

**Filtering Data:**

```
SELECT column1, column2, ... FROM table_name WHERE column operator value;
```

**Sorting Data:**

```sql
SELECT column1, column2, ... FROM table_name ORDER BY column ASC/DESC;
```

**Grouping Data:**

```sql
SELECT column1, column2, ..., aggregate_function(column) FROM table_name GROUP BY column;
```

**Creating Indexes:**

```sql
CREATE INDEX index_name ON table_name (column);
```

**Altering Table:**

```sql
ALTER TABLE table_name ADD column datatype constraint;
```

**Deleting Table:**

```sql
DROP TABLE table_name;
```

## Basic Database Structure

**Database:** A database is a collection of related data organized and managed for efficient retrieval and manipulation. It serves as a container for tables, views, indexes, and other database objects.

**Table:** A table is a fundamental component of a database. It represents a structured collection of data organized into rows and columns. Each table has a unique name and consists of one or more columns, each defining a specific data type, and rows that contain actual data.

**Column:** A column, also known as a field or attribute, represents a specific data element within a table. Columns define the type of data that can be stored, such as numbers, strings, dates, or Boolean values. Each column has a name and a corresponding data type.

**Row:** A row, also known as a record or tuple, represents a single set of data within a table. Each row contains data values for each column defined in the table structure. Rows are horizontally aligned, and each row is uniquely identified by a primary key.

**Primary Key:** A primary key is a column or a set of columns that uniquely identifies each row in a table. It ensures the integrity and uniqueness of the data. Primary keys are typically used as references in relationships between tables.

**Relationships:** Relationships define how tables are connected or related to each other within a database. The most common relationship types are:

- One-to-One (1:1): Each record in one table is associated with exactly one record in another table.
- One-to-Many (1:N): Each record in one table is associated with multiple records in another table.
- Many-to-Many (N:N): Multiple records in one table are associated with multiple records in another table, typically through an intermediate table.

**Indexes:** Indexes are database structures used to improve the speed of data retrieval operations. They provide quick access to specific data within a table based on one or more columns. Indexes can be created on columns to facilitate faster search, sorting, and joining of data.

**Views:** Views are virtual tables created from the result of a query. They allow users to retrieve specific data from one or more tables without directly modifying the underlying table structure. Views provide a way to present customized or filtered data to users while maintaining data integrity and security.

# CRUD Operations - Create, Read, Update and Delete

### SQL Data Types

Data types refer to the classification or categorization of data in programming and databases. They define the nature of the data and the operations that can be performed on it. Data types specify the range of values that a variable or a column in a database table can hold, as well as the operations that can be performed on those values.

This is a summary of the SQL data types:

**Numeric Types:**

- **`INT`** or **`INTEGER`**: Integer values.
- **`SMALLINT`**: Small integer values.
- **`BIGINT`**: Large integer values.
- **`DECIMAL(p, s)`** or **`NUMERIC(p, s)`**: Fixed-point decimal numbers with precision **`p`** and scale **`s`**.
- **`FLOAT(p)`**: Floating-point numbers with precision **`p`**.
- **`REAL`**: Single-precision floating-point numbers.
- **`DOUBLE PRECISION`**: Double-precision floating-point numbers.

**Character and String Types:**

- **`CHAR(n)`**: Fixed-length character string with a length of **`n`**.
- **`VARCHAR(n)`**: Variable-length character string with a maximum length of **`n`**.
- **`TEXT`**: Variable-length character string for large amounts of text.

**Date and Time Types:**

- **`DATE`**: Date values in the format YYYY-MM-DD.
- **`TIME`**: Time values in the format HH:MI:SS.
- **`DATETIME`** or **`TIMESTAMP`**: Date and time values in the format YYYY-MM-DD HH:MI:SS.

**Boolean Type:**

- **`BOOLEAN`** or **`BOOL`**: Boolean values (**`TRUE`** or **`FALSE`**).

**Binary Types:**

- **`BINARY(n)`**: Fixed-length binary string with a length of **`n`**.
- **`VARBINARY(n)`**: Variable-length binary string with a maximum length of **`n`**.
- **`BLOB`**: Binary large object for storing large amounts of binary data.

**Enumerated Types:**

- **`ENUM(value1, value2, ...)`**: Defines a set of possible values for a column.

**Other Types:**

- **`JSON`**: Stores JSON (JavaScript Object Notation) data.
- **`UUID`**: Universally unique identifier.
- **`XML`**: Stores XML (Extensible Markup Language) data.
- **`ARRAY`**: Array of values of a specified type.

### Create and Read

These SQL statements form the core building blocks for creating and managing databases and tables, as well as manipulating and retrieving data. They provide the foundation for working with relational databases and performing essential operations such as creating, modifying, and querying data.

**CREATE DATABASE:**

```sql
CREATE DATABASE database_name;
```

Creates a new database with the specified name.

**DROP DATABASE:**

```sql
DROP DATABASE database_name;
```

Deletes an existing database and all its associated tables and data.

**CREATE TABLE:**

```sql
CREATE TABLE table_name ( column1 datatype constraints, column2 datatype constraints, ... )
```

Creates a new table with the specified columns and their data types and constraints.

**ALTER TABLE:**

```sql
ALTER TABLE table_name ADD column datatype constraint;
```

Modifies an existing table by adding a new column with its data type and constraint.

**INSERT:**

```sql
INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
```

Inserts new rows into a table with specific values for the specified columns.

**SELECT:**

```sql
SELECT column1, column2, ... FROM table_name WHERE condition;
```

Retrieves data from one or more tables based on specified columns and optional conditions.

**INSERT INTO SELECT:**

```sql
INSERT INTO table_name (column1, column2, ...) SELECT column1, column2, ... FROMsource_table WHERE condition;
```

Inserts data into a table by selecting and inserting data from another table or query result.

### Update and Delete

It's important to be cautious while using these statements as they directly modify or delete data in the database. It's recommended to perform thorough testing and ensure the correctness of conditions before executing update or delete operations to avoid unintended consequences or data loss.

**UPDATE:**

```sql
UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition
```

Modifies existing data in a table by updating the specified columns with new values based on a condition.

**DELETE:**

```sql
DELETE FROM table_name WHERE condition;
```

Removes rows from a table that satisfy the specified condition.

## SQL Operators and Sorting and Filtering Data

### SQL Operators

SQL operators are used to perform comparisons, logical operations, and arithmetic calculations on data in a database. Here's a summary of the common types of SQL operators:

**Comparison Operators:**

- **`=`**: Equal to
- **`<>`** or **`!=`**: Not equal to
- **`<`**: Less than
- **`>`**: Greater than
- **`<=`**: Less than or equal to
- **`>=`**: Greater than or equal to
- **`BETWEEN`**: Between a range of values
- **`LIKE`**: Matches a pattern using wildcards (% and _)

**Logical Operators:**

- **`AND`**: Returns true if both conditions are true
- **`OR`**: Returns true if either condition is true
- **`NOT`**: Reverses the result of a condition

**Arithmetic Operators:**

- **`+`**: Addition
- **``**: Subtraction
- **``**: Multiplication
- **`/`**: Division
- **`%`**: Modulo (remainder)

**Aggregate Functions:**

- **`COUNT`**: Returns the number of rows or non-null values
- **`SUM`**: Calculates the sum of numeric values
- **`AVG`**: Calculates the average of numeric values
- **`MIN`**: Returns the minimum value
- **`MAX`**: Returns the maximum value

**String Operators:**

- **`CONCAT`**: Concatenates strings
- **`LENGTH`** or **`LEN`**: Returns the length of a string
- **`SUBSTRING`**: Extracts a substring from a string
- **`UPPER`** or **`UCASE`**: Converts a string to uppercase
- **`LOWER`** or **`LCASE`**: Converts a string to lowercase

**Null-Related Operators:**

- **`IS NULL`**: Checks if a value is null
- **`IS NOT NULL`**: Checks if a value is not null
- **`COALESCE`**: Returns the first non-null value in a list

These are some of the commonly used SQL operators. Operators are used in conjunction with SQL statements, such as SELECT, WHERE, UPDATE, and others, to perform various operations on data within a database. The specific operators available may vary slightly depending on the database management system (DBMS) being used.

### Sorting and Filtering Data

These SQL clauses are powerful tools for manipulating and retrieving data from a database. They allow you to sort the result set, filter rows based on conditions, and retrieve distinct values, providing flexibility and control over the data you retrieve from the database.

**ORDER BY:**
The **`ORDER BY`** clause is used in a SQL query to sort the result set based on one or more columns. It arranges the rows in ascending (default) or descending order. Here's the syntax:

```
SELECT column1, column2, ... FROM table_name ORDER BY column1 [ASC | DESC], column2 [ASC | DESC], ...;

```

- **`ORDER BY`** clause is typically used at the end of a **`SELECT`** statement.
- You can specify one or more columns to sort by, separating them with commas.
- By default, sorting is done in ascending order (**`ASC`**), but you can specify descending order (**`DESC`**) for individual columns.

**WHERE:**
The **`WHERE`** clause is used to filter rows in a SQL query based on specified conditions. It allows you to retrieve only the rows that meet specific criteria. Here's the syntax:

```
sqlCopy code
SELECT column1, column2, ... FROM table_name WHERE condition;

```

- **`WHERE`** clause is typically used after the **`FROM`** clause and before the **`ORDER BY`** clause (if present).
- The condition is a logical expression that evaluates to true, false, or unknown.
- You can use comparison operators, logical operators (**`AND`**, **`OR`**, **`NOT`**), and other SQL functions within the condition.

**SELECT DISTINCT:**
The **`SELECT DISTINCT`** clause is used in a SQL query to retrieve unique values from a specific column or combination of columns in a result set. It eliminates duplicate values and returns only distinct values. Here's the syntax:

```
sqlCopy code
SELECT DISTINCT column1, column2, ... FROM table_name;

```

- **`SELECT DISTINCT`** clause is typically used in a **`SELECT`** statement to retrieve unique values.
- You can specify one or more columns to determine uniqueness. The combination of values in the specified columns must be unique for a row to be included in the result set.

## Database Design

### Design Database Schema

Database schema design — sometimes called SQL schema design — refers to the practices and strategies for constructing a database schema. You can think of database schema design as a blueprint for storing massive amounts of information in a database. The schema is an abstract structure or outline representing the logical view of the database as a whole. Defining categories of data and relationships between those categories, database schema design makes data much easier to retrieve, consume, manipulate, and interpret.

DB schema design organizes data into separate entities, determines how to create relationships between organized entities, and influences the applications of constraints on data. Designers create database schemas to give other database users, such as programmers and analysts, a logical understanding of data.

Here are the key things to know about database schema design:

- Database schema design refers to the strategies and practices for constructing a database schema.
- A database schema is a description of how data is structured or organized in a database.
- There are six types of database schemas: flat model, hierarchical model, network model, relational model, star schema, and snowflake schema.
- The right database schema design helps you make better use of your enterprise data.

#### **Best Practices for Database Schema Design**

To make the most of database schema design, it’s important to follow best practices. That ensures developers have a clear reference point for tables and fields in a project. Here are some of those best practices:

**Naming Conventions**

- Define and use appropriate naming conventions to make your database schema designs more effective. While you may decide on a particular style or adhere to an ISO standard, the most important thing is to be consistent in your name fields.
- Try not to use reserved words in table names, column names, fields, etc. that will likely deliver a syntax error.
- Don’t use hyphens, quotes, spaces, or special characters. They will either require additional work or not be valid.
- Use singular nouns, not plural nouns, for table names (for example, use StudentName instead of StudentNames). A table represents a collection, so there’s no need to make the title plural.
- Omit unnecessary verbiage for table names (for example, use Department instead of DepartmentList or TableDepartments)

**Security**

- [Data security](https://www.integrate.io/the-complete-guide-to-data-security/) starts with a good database schema design. Use encryption for sensitive data such as personally identifiable information (PII) and passwords. Don’t give administrator roles to each user; instead, request user authentication for database access.

**Documentation**

- Database schemas are useful long after you've created them and will be viewed by many other people. So good documentation is essential. Document your database schema design with explicit instructions and write comment lines for scripts, triggers, and other commands.

**Normalization**

- Normalization ensures independent entities and relationships are not grouped in the same table, reducing redundancy and improving integrity. Use normalization as necessary to optimize database performance. Both over-normalization and under-normalization can lead to problems.

**Expertise**

- Understanding your data and the attributes of each element helps you build out the most effective schema design. A well-designed schema can enable your data to grow exponentially. As you keep expanding your data, analyze each field in relation to the others you are collecting in your schema.

## Relational Database Design

Relational databases differ from other databases in their approach to organizing data and performing transactions. In an RDD, the data are organized into tables and all types of data access are carried out via controlled transactions. Relational database design satisfies the ACID (atomicity, consistency, integrity and durability) properties required from a database design. Relational database design mandates the use of a database server in applications for dealing with data management problems.

The four stages of an RDD are as follows:

- Relations and attributes: The various tables and attributes related to each table are identified. The tables represent entities, and the attributes represent the properties of the respective entities.
- Primary keys: The attribute or set of attributes that help in uniquely identifying a record is identified and assigned as the primary key
- Relationships: The relationships between the various tables are established with the help of foreign keys. Foreign keys are attributes occurring in a table that are primary keys of another table. The types of relationships that can exist between the relations (tables) are:
    - One to one
    - One to many
    - Many to many

An entity-relationship diagram can be used to depict the entities, their attributes and the relationship between the entities in a diagrammatic way.

- Normalization: This is the process of optimizing the database structure. Normalization simplifies the database design to avoid redundancy and confusion. The different normal forms are as follows:
    - First normal form
    - Second normal form
    - Third normal form
    - Boyce-Codd normal form
    - Fifth normal form

## Database Normalization

Database normalization is the process of organizing data in a relational database to eliminate redundancy and improve data integrity. It involves decomposing a database table into multiple tables and defining relationships between them. Here's a summary of the commonly recognized normal forms in database normalization:

**First Normal Form (1NF):**
1NF requires that the data in a table is atomic, meaning each column contains only a single value. It prohibits repeating groups or arrays within a single row. To achieve 1NF, you need to ensure that each column has a unique name and contains only indivisible data.

**Second Normal Form (2NF):**
2NF builds upon 1NF by requiring that each non-key column in a table is fully functionally dependent on the entire primary key. In other words, every non-key column should depend on the entire primary key, not just part of it. If any non-key column depends on only part of the primary key, it should be moved to a separate table.

**Third Normal Form (3NF):**
3NF extends the normalization process by eliminating transitive dependencies. It requires that every non-key column is non-transitively dependent on the primary key. This means that if a non-key column depends on another non-key column, that dependency should be removed by moving the dependent column to a separate table.

**Boyce-Codd Normal Form (BCNF):**
BCNF, also known as 3.5NF, is a stricter form of normalization. It addresses the issue of functional dependencies that exist when there are multiple candidate keys in a table. BCNF states that every determinant (a column or set of columns that determines the values of other columns) must be a candidate key. If a table violates BCNF, it needs to be decomposed further into multiple tables to remove the problematic dependencies.

These normal forms provide guidelines for designing relational database schemas that minimize redundancy, improve data integrity, and simplify data management. Each normal form has specific rules and criteria, and achieving higher normal forms (such as 3NF or BCNF) requires stricter adherence to normalization principles. It's important to carefully analyze the data and relationships in a database to determine the appropriate level of normalization to apply.