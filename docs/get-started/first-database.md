---
title: Create my first dataset
description:
  This document shows how to work with QuestDB as a time series database by
  generating dummy time series data, insert the data into a table, then querying
  and cleaning up the example data set.
---

The goal of this guide is to explore QuestDB's features and to interact with
time series data and assumes you have an instance running. You can find guides
to setup QuestDB on the [introduction page](/docs/). In this
tutorial, you will learn how to:

1. [Create tables](#creating-a-table)
2. [Populate tables with sample data](#inserting-data)

As an example, we will look at hypothetical temperature readings from a variety
of sensors.

:::info 
:::

## Creating a table

The first step is to create tables. One table will contain the metadata of our
sensors, and the other will contain the actual readings (payload data) from
these sensors.

Let's start by creating the `sensors` table:

```questdb-sql
CREATE TABLE sensors (ID LONG, make STRING, city STRING);
```
 

## Inserting data

Let's populate our `sensors` table with procedurally-generated data:

