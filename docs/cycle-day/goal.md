# Goal

 


:::note

All network ports may be  

:::

## Web console

  is a general admin and query
interface.
It's great for quickly trying things out. You can also chart your query results.
 
 
## InfluxDB Line Protocol

The fastest way to insert data into QuestDB is using the InfluxDB Line
Protocol (ILP).

It is an insert-only protocol that bypasses SQL `INSERT` statements achieving
higher throughput. 
 

## PostgreSQL wire protocol

For SQL, we support the same wire protocol as PostgreSQL, allowing you to
connect and query the database with various third-party pre-existing client
libraries and tools. 

See how you can connect through the PostgreSQL wire protocol from
different programming languages to: 

## HTTP REST API

The HTTP interface that hosts the web console also provides a REST API for
importing data, exporting data and querying. 