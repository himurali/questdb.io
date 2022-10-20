---
title: JIT compiler
sidebar_label: JIT compiler
description:
  Documentation for usage of the just-in-time (JIT) SQL compiler in QuestDB. JIT
  compilation enhances the performance of the system to run SQL queries which
  contain filters with arithmetical expressions.
---

QuestDB includes a JIT compiler which is run on queries (and sub-queries) that
perform a full scan over a table or table partitions. The main goal behind this
feature is to improve performance for filters with arithmetical expressions. To
do so, the JIT compiler emits machine code with a single function that may also
use SIMD (vector) instructions.
 