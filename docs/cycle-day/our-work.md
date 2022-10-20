# Our Work

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

This page shows how to insert data into QuestDB using different programming
languages and tools.
  

## Web Console
 
SQL statements can be written in the code editor and executed by clicking the
**Run** button. Note that the web console runs a single statement at a time. You
can also use the Web Console to upload CSV.

## InfluxDB Line Protocol

The InfluxDB Line Protocol (ILP) is a text protocol over TCP or UDP on
port 9009.

It is a one-way protocol to insert data, focusing on simplicity and performance.

Here is a summary table is how it compares with ways to insert data that we
support:

| Protocol                 | Record Insertion Reporting       | Data Insertion Performance |
| :----------------------- | :------------------------------- | :------------------------- |
| InfluxDB Line Protocol   | Server logs; Disconnect on error | **Best**                   |
| CSV upload via HTTP REST | Configurable                     | Very Good                  |
| SQL `INSERT` statements  | Transaction-level                | Good                       |

This interface is the preferred ingestion method as it provides the following
benefits:

- high-throughput ingestion
- robust ingestion from 

With sufficient client-side validation, the lack of errors to the client and
confirmation isn't necessarily a concern: QuestDB will log out any issues and
disconnect on error. The  
:::tip

 provide more user-friendly ILP clients for a growing number of languages.

:::

### Examples

These examples send a few rows of input. These use client libraries for C++, C#,
Golang, Java, and C, as well as raw TCP socket connections for NodeJS and Python.
 