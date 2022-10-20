---
title: SQL execution order
sidebar_label: SQL execution order
description:
  Execution order for SQL clauses in QuestDB. This covers the SQL keywords you
  may already be familiar with as well as extensions to the language that are
  unique to QuestDB.
---

QuestDB attempts to implement standard ANSI SQL. We also try to be compatible
with PostgreSQL, although parts of this are a work in progress. QuestDB
implements these clauses which have the following execution order: 