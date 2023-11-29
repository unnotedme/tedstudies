---
sidebar_position: 4
---
# Database Modelling

Data modelling is **the process of creating a visual representation of either a whole information system or parts of it to communicate connections between data points and structures**.

The primary objective is to ensure swift and effective data extraction and management. Data modelling is introduced as a visual representation of data elements and their interrelationships within a database, emphasizing its capacity to **structure data storage, retrieval, updates, and queries while maintaining data quality and consistency.**

The content outlines three essential levels of data modelling: **conceptual, logical, and physical**. **Conceptual data models provide a high-level overview of entities and their relationships, offering a bird's-eye view of the database's structure. Logical data models delve deeper, specifying attributes, primary keys, and foreign keys for each entity, providing a more detailed understanding of the database.** Finally, **physical data models translate the logical model into an actual database schema, including data types, constraints, and attributes to facilitate database implementation.**

## Data Models Examples

### Entity Relationship

The entity-relationship (ER) model is a representation commonly shown in an ER diagram, which illustrates the entities within a database and the relationships connecting them. Each entity is associated with a set of attributes. The ER diagram also conveys various types of relationships, including one-to-one, one-to-many, and many-to-many relationships.

It can be utilized for documentation purposes and to communicate the database's architecture with stakeholders. Additionally, integrated development tools like MySQL Workbench enable the creation of such diagrams and direct implementation of the database model in systems like MySQL.

### Hierarchal Model

The hierarchical data model is organized in a tree-like or a parent-child structure, where each record of data has one parent node and can also have several child nodes.

With this model, you can easily find data or add and delete information. However, this model only permits one-to-many relationships between nodes, as each child node can have only one parent node.

![X-Qtl3gMQ7mX1dIwLzS_Xw_4285188140d7411fb5f1537b88b8e5e1_C7M1L2-Item-03_image-02-2.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/34d50e4b-00f1-4387-a240-31238e855e88/4b8d6a73-8a85-45f8-88c3-b7cc3aaeb0a7/X-Qtl3gMQ7mX1dIwLzS_Xw_4285188140d7411fb5f1537b88b8e5e1_C7M1L2-Item-03_image-02-2.png)

You may have noticed that a key advantage of this model is the simplicity of its structure. Also, since each record has only one parent, you can navigate through the database quickly and efficiently. However, you should be aware that, in this model, if you delete a parent node then the corresponding child records are also deleted.

In addition, this model does not support many-to-many relationships, which may be required in some cases (such as in the previous surgery scenario).

It’s also difficult to re-organize the structure of a database to incorporate new requirements. Doing so may disrupt the existing parent-child relationships.

### **The Object-Oriented data model**

The Object-Oriented data model is based on the Object-Oriented concept, where each object is translated into a class that defines the respective object’s characteristics and behaviour.

In this model, you can use different types of associations between objects such as aggregations, compositions and inheritance. These features make object-oriented databases suitable for complicated projects. However, making use of this model requires a good understanding of object-oriented programming.

## ****MySQL Workbench (WB)****

MySQL Workbench is a visual database design tool that integrates SQL development, administration, database design, creation and maintenance into a single integrated development environment for the MySQL database system.

## **Overview**

MySQL Workbench (WB) is a unified visual tool for database modelling and database management. The WB was developed by Oracle, the company that manages MySQL. MySQL Workbench is a free, open-source and cross-platform tool that runs on Windows, Mac and Linux.

MySQL Workbench enables you to speed up the database design process by using the visual SQL editor. It also allows you to migrate data from different kinds of relational database systems.

## **Visual Database Design**

MySQL Workbench simplifies database design and maintenance. It enables database engineers to document the requirements in the form of visualized ER diagrams. This lets you communicate your design ideas with stakeholders in a professional way.

MySQL WB designer tool facilitates model-driven database development, which automates the development process without the need to code each part of the database system.

In addition, by using MySQL WB database engineers must design data models that meet the expected standards, otherwise, they can’t implement these data models directly in MySQL.

In other words, MySQL WB allows you to develop a complete entity-relationship diagram with auto Layout and arrangement of data models.

## **Forward and Reverse Engineer Methods**

MySQL Workbench provides capabilities for creating data models in the visual designer. You can then use the Forward Engineer method to create a relevant data model in your MySQL server. The SQL schema is automatically generated for you. You can amend the code if required, or you can execute it with just a few mouse clicks.

MySQL Workbench also offers the Reverse Engineer method. You can use this method to create or import a MySQL database file and then generate a relevant data model from the SQL script. You can modify the model if needed, and then utilize the forward engineer method to create a new database system in MySQL.

## **Database Management**

Database management typically involves maintaining different versions of your database schemas. To help you with database management, MySQL WB can be used to perform Schema Synchronization and Comparison functionality. These features provide you with the ability to compare either two databases or a database and a data model, so you can visually detect the differences. MySQL WB also allows you to synchronize the data model with a live database and vice versa.

## **Database Documentation**

As a database engineer, you need to document the design of your database. This can be very time-consuming. MySQL Workbench provides a documentation tool called DBDoc to document all details of your database design. You can use this tool to generate the documentation of your models in either HTML or plain text format.

## **The Visual SQL Editor**

MySQL WB visual SQL editor is used to write, run and debug SQL statements. It also facilitates SQL code completion and provides a context-sensitive list of SQL keywords and objects.

In addition, it includes a SQL code formatter that automatically formats SQL code to make it easier to read and edit. Other useful features include:

- SQL syntax highlighting,
- SQL code generation,
- The ability to reuse your favourite SQL snippets,
- A running history of all executed SQL queries,
- And the ability to quickly create tables, indexes, views, stored procedures, triggers and functions.

## **Visual Database Administration**

With MySQL WB you have complete administrative control over all aspects of your MySQL server, including:

- User accounts,
- Roles,
- Privileges,
- Server start/stop,
- Logs,
- And server configuration.

## **Data Management**

MySQL WB provides useful features for managing data in MySQL database including the ability to import and export mysqldump files, and export query results sets as CSV, XML, and HTML files.

The WB Visual Data Editor also allows you to view and edit result sets in a grid table.

You can also view multiple result sets in the same visual data window. You can perform data search and pattern-matching searches across all tables and schema.

## **Database Migration**

In MySQL WB, you can use the Database Migration Wizard to perform data migration between different versions of MySQL servers.

In addition, you can also perform data migration with different relational database management systems such as Microsoft SQL Server, Sybase ASE, Sybase SQL Anywhere, PostgreSQL, and SQLite.

# Data Warehouse

A data warehouse is a specialized type of database that is designed for the **storage, management, and analysis of large volumes of data from various sources within an organization**. It is a central repository that consolidates data from different departments, systems, and sources into a single, unified view. Data warehouses are typically used for business intelligence (BI) and data analytics purposes, allowing organizations to make informed decisions based on historical and current data.

## Architecture

A typical data warehouse architecture is constructed to manage data flow from diverse sources, and process and integrate it consistently, enabling users to perform data analysis and extract valuable insights. It consists of several components, each serving a crucial role in supporting data analytics:

1. **Data Sources**: These are the origins of data, encompassing external sources like surveys and social media, as well as internal sources such as company databases and operational data generated by daily business activities. Ensuring data accuracy is essential to prevent irrelevant or poor data analytics.
2. **Data Staging Area**: This includes an ETL (Extract, Transform, Load) pipeline, which is a set of processes for extracting, transforming, and loading data. These processes prepare the data for analysis and reporting.
3. **Data Storage**: The central repository where data is stored, often organized in relational databases. It also includes a metadata repository that holds information about data sources, data features, tables, and attributes. Metadata acts as a table of contents for data in the warehouse, helping manage and track changes.
4. **Data Marts**: Subject-oriented databases that cater to specific user groups. Each data mart contains a subset of data relevant to particular business areas or functions, enabling focused analytical processes.
5. **Data Analytics**: This stage involves applying various analytics techniques like data mining to extract insights from the data.
6. **Data Presentation**: The results of data analytics are presented in various formats, such as interactive reports, analytics reports, or static reports.

Following best practices is crucial when working with data warehouse architecture:

- Separate analytical and transactional operations.
- Implement scalable solutions to handle increasing data volumes.
- Build a flexible architecture that accommodates new functionality.
- Ensure data security features.
- Create an architecture that can work with various data formats.
- Develop a user-friendly and manageable data warehouse.
- Document the development process to facilitate the incorporation of new functions.

## ETL

ETL (Extract, Transform, Load) is a crucial process in data warehousing that involves three key steps:

**Step 1: Data Extraction**

- In this initial step, data is extracted from various sources and brought into a staging area. These sources can include different database management systems, files, and data types.
- It's important to extract only the relevant data to prevent data overload.
- Valid data should be included while duplicate, spam, or corrupted data should be excluded.
- Data should be validated against the source data to ensure consistency for use in the data warehouse.

**Step 2: Transformation**

- Data transformation involves converting data from one format or structure to another as per the predefined data model in the data warehouse.
- This step is essential for integrating data into the data warehouse repository.
- Data may need cleaning and preparation before it's used for analytics.
- Examples of transformation include concatenating first and last names into a "full name" field or creating calculated fields like "profit" from buying and selling costs.
- Data transformation is particularly critical when dealing with raw data types, such as computer logs or CSV files.
- Transformed data should be organized into tables with specific data types and constraints to enable efficient querying and analysis.
- Ensuring data integrity and consistency is crucial during transformation, especially when dealing with variations in data, such as different spellings or date formats.

**Step 3: Loading**

- In the final step, data is loaded into the data warehouse repository, often in large quantities.
- Recovery mechanisms should be in place to handle data loading failures, ensuring that the process can resume from the point of failure without data loss or integrity issues.
- There are three types of data loading:
    - Initial load: Populates extracted data into the data warehouse repository.
    - Incremental load: Adds new data from sources to the existing repository.
    - Full refresh load: Clears the existing database in the data warehouse repository, either partially or entirely, and replaces it with fresh data.

**ETL Tools**

- Various ETL tools are available to automate and streamline the ETL processes, making them more efficient and reliable.
- Examples of ETL tools include Oracle, Amazon RedShift, and MarkLogic, each offering different data warehousing solutions tailored to specific needs.

Understanding the ETL process is crucial for effectively collecting, transforming, and loading data into a data warehouse, enabling data analysis and insights for decision-making.

### ETL Testing

ETL (Extract, Transform, Load) testing is a crucial process to ensure the accuracy, reliability, validity, and consistency of loaded data in a data warehouse. Here are the key points from this overview:

**Overview:**

- ETL processes involve extracting data from various sources, transforming it into a suitable format, and loading it into a data warehouse.
- The challenge lies in ensuring that the loaded data is correct, valid, reliable, and consistent.

**ETL Testing:**

- The main purpose of ETL testing is to investigate and address problems in ETL processes that affect data quality.
- ETL testing involves actions like mapping data appropriately, validating data, checking for duplicates, validating dates, and verifying data completeness and correctness.

**ETL Testing in Practice:**

- Example scenario: Global Super Store manages customer data differently across departments with unique identifiers and data representations.
- To address these issues, a new database model is created in the data warehouse, allowing relevant data extraction, transformation, and loading.
- The new model includes tables like Orders, Marketing, and Customer, facilitating data analysis.

**Performing ETL Testing:**

- Data mapping document: Create a document to map data from source sources to the destination repository, reviewed by experts to ensure correct mapping.
- Data validation: Compare data structure, data types, formats, and constraints in source and target tables against the mapping document.
- Data completeness: Verify that all expected data, including record counts and rejected records, is loaded into target tables.
- Data correctness: Resolve naming conflicts, correct misspelled data, and address unexpected data values.
- Data quality: Ensure data quality, including formats, precision, and handling null values where specified.
- Unique data: Check for duplicate records and remove them to maintain data integrity.

ETL testing is essential to guarantee that data in the data warehouse is accurate and reliable for effective data analysis and reporting.

## Dimensional Data Modelling

While traditional data models like entity-relationship and object-oriented are designed for real-time transactions. Data warehouses require a model optimized for data access and queries for specific analysis, known as dimensional data modelling.

The model is based on two key concepts: dimensions and facts. 

Dimensions represent different elements of data, providing context or perspective for measures (e.g., time and location). Facts represent quantifiable data within the database (e.g., sales quantity and profits). 

## **Structure of Dimensional Data Model**

It consists of facts and dimension tables.

- Dimension tables include dimension data elements and can be structured hierarchically for various levels of data analysis.
- Fact tables include measured data, allowing exploration in different dimensional contexts (e.g., average sales per year, city, month, etc.).

## **Best Practices**

- Define the business activities you want to examine and select dimensions accordingly.
- Organize data for easy understanding, access, and querying.
- Common schema designs for dimensional data models include the star schema and snowflake schema.

**Star Schema:**

- Fact tables sit in the center, connected to dimension tables (e.g., suppliers, customers, products, time, and location).
- Offers simplicity and is suitable for most cases.

**Snowflake Schema:**

- Normalizes dimension tables to reduce data redundancy.
- Subdivides dimensions into multiple sub-dimension tables.
- Requires more foreign keys and complex queries for data analytics.

Understanding dimensional data modelling, along with star and snowflake schemas, is essential for designing effective data warehouses for data analytics.

# Introduction to Data Analysis

The importance of data lies in the insights it can provide, aiding in service improvement, planning, and risk mitigation through data analysis and advanced analytics. Data analytics involves deriving valuable insights from data, achieved using tools and methods.

Several types of data analysis are reviewed, including descriptive (presentation), exploratory (relationship establishment), inferential (inferences from samples), predictive (pattern recognition for future predictions), and causal (cause-and-effect exploration). Understanding the data type is crucial, differentiating between quantitative (numeric) and qualitative (descriptive) data.

Four measurement scales are presented: nominal (purely descriptive for identifying data), ordinal (ranked order without precise intervals), interval (clearly defined intervals with both positive and negative values), and ratio (quantitative data with absolute zero). These scales help organize and analyze data. 

## Data Mining vs Machine Learning

As organizations accumulate vast amounts of data, analyzing and extracting meaningful insights becomes increasingly challenging. Database engineers, especially those managing large databases, turn to advanced data analytics methods such as data mining and machine learning to uncover patterns, paradigms, and trends within their data. These methods enable businesses to gain a deeper understanding of their performance, make predictions, and formulate actionable plans.

Data mining and machine learning, though often used interchangeably, operate differently. Data mining involves identifying patterns and deriving insights from data to make judgments and predictions. 

On the other hand, machine learning involves teaching computers to learn and make predictions. There are two main types: supervised and unsupervised machine learning. Supervised machine learning categorizes data based on given labels, while unsupervised machine learning classifies data based on shared characteristics without labels. 

Machine learning leverages various data mining models. Classification analysis categorizes data items into classes, aiding in predicting target classes. Association rules identify relationships between data elements to determine correlations, influencing marketing decisions. Outlier detection spots unusual data patterns or anomalies, prompting companies to adjust their strategies. Clustering analysis identifies similarities within datasets and forms clusters based on these similarities. Finally, regression analysis examines factors impacting data and reveals relationships between them.

## Value of Data Insights in Business

Organizations collect and store vast amounts of data from various sources, making it a valuable asset for examining business activities and performance. Proper management and treatment of data are essential to convert it into a valuable resource.

**Data Analytics Process:**

- Data can be accessed, extracted, refined, and analyzed to discover relationships, patterns, and insights that aid decision-makers in planning, improving services, reducing costs, mitigating risks, and increasing revenues.
- Data analytics involves not only describing data but also evaluating future probabilities, identifying problems, assessing risks, and predicting opportunities.
- Different types of data analysis are performed to identify models, patterns, trends, and paradigms, providing an in-depth understanding of business performance and actionable recommendations.

**Benefits of Data Analytics:**

- Large corporations like Amazon, Microsoft, and Apple have heavily invested in advanced data analytics.
- Regardless of business size and type, data analytics offers benefits such as enhancing decision-making, identifying opportunities, monetizing data, detecting threats, responding to market changes, gaining a comprehensive view of activities, fraud prevention, and cost reduction.

**The Big Data Environment:**

- Businesses operate within the Big Data environment, dealing with massive amounts of complex data from various sources, including structured, semi-structured, and unstructured data.
- Examples include Facebook generating 500 terabytes of data daily from posts and Google processing over 20 petabytes daily, emphasizing the importance of using AI, machine learning, and data mining for data-informed decisions.

**Data Analytics Techniques:**

- Various data analytics techniques are available, including:
    - **Classification Technique**: Assigns data items to categories or classes, useful for predicting outcomes like credit risk assessment in banks.
    - **Association Rule**: Identifies relationships between data elements, such as product associations in retail.
    - **Outlier Detection**: Uncovers unusual data within a dataset, commonly used for credit card fraud detection.
    - **Clustering Analysis**: Groups similar data into clusters based on common characteristics, applied in online streaming services to target viewers with relevant content.
    
## Data Visualization
    
Data visualization is the art of presenting data in a way that enables quick and easy interpretation by decision-makers. The goal is to remove data noise and highlight important elements such as trends, outliers, and paradigms, effectively telling an engaging and informative story through data. Four key factors inform the choice of data visualization:
    
1. **Target Audience**: Consider who will view the data. Their background and level of understanding of the subject matter should influence the presentation.
2. **Relevant Information**: Decide what information to include. Ensure that the visualization answers the audience's questions and avoids redundancy.
3. **Time**: Determine how much time you want the audience to spend on each chart. Should they grasp it quickly or delve into finer details?
4. **Level of Accuracy**: Consider the audience's need for data accuracy. Is a general understanding sufficient, or do they require detailed data?
    
Selecting the appropriate data visualization chart is crucial, as each type serves a different purpose:
    
1. **Bar Chart**: Often used for comparisons, it helps viewers recognize differences or similarities between data values. Bar charts can be presented horizontally or vertically, making numerical comparisons across categories easy to understand.
2. **Line Graph**: Depicts quantitative data over a continuous interval or time period, showing trends by connecting data points on a Cartesian coordinate system.
3. **Bubble Chart**: This shows the relationship between numeric variables through bubbles, where size, position, and colour convey information. Larger bubbles indicate higher values.
4. **Map Chart**: Presents data in geographical areas, using colours and labels to reflect various data variables. Useful for visualizing data across different regions.
5. **Scatter Plot Graph**: Plots variables as points on a Cartesian grid, enabling the search for correlations between variables. Trending lines and category labels can be added to show performance within categories.

## Advanced Data Analysis

These concepts form the foundation for advanced data modelling and analytics, setting the stage for more complex projects and applications in the field.

**Data Analytics**: Data analytics involves converting aggregated data into meaningful information. It includes various types of analysis: descriptive, exploratory, inferential, predictive, and causal.

**Data Types and Measurement Scales**: Data can be quantitative (numerical) or qualitative (non-numerical), and it can be analyzed using measurement scales like nominal, ordinal, interval, and ratio.

**Data Mining and Machine Learning**: Data mining detects patterns in data, while machine learning teaches computers to learn. Machine learning techniques include classification, association rule, outlier detection, clustering, and regression analysis.

**Data Visualization**: Data should be presented visually to aid understanding. Choose appropriate charts (e.g., bar charts, line graphs) based on the audience, required information, time constraints, and accuracy needs.

**Data Analytics Tools**: Tools like Tableau facilitate data analysis by storing different data types, connecting to diverse data sources, and offering interactive dashboards, scripting, and user-friendly interfaces.

**Using Tableau**: Tableau enables data import, preparation, and analysis. Steps include setting up connections, cleaning data, filtering, splitting, creating new fields, and adjusting data types.

**Dashboard Creation**: Interactive dashboards are created using Tableau worksheets, enhancing data visualization and communication.

**Practical Data Analysis**: Practical exercises in data analysis within Tableau provide hands-on experience.