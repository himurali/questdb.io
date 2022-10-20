---
title: Symbol
sidebar_label: Symbol
description:
  Documentation for usage of the symbol data type in QuestDB. This type is used
  to store repetitive strings in order to enable optimizations on storage and
  search.
---

QuestDB introduces a data type called `SYMBOL`; a data structure used to store
repetitive strings. Internally, `SYMBOL` types are stored as a table of integers
and their corresponding string values. 