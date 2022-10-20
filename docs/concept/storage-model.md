---
title: Storage model
sidebar_label: Storage model
description:
  Overview of QuestDB's column-based storage model. It ensures table level
  atomicity and durability while keeping low overhead for maximum performance.
---

QuestDB uses a **column-based** storage model. Data is stored in tables with
each column stored in its own file and its own native format. New data is
appended to the bottom of each column to allow data to be organically retrieved
in the same order that it was ingested.

## Append model 