---
title: Importing data in bulk via CSV
sidebar_label: Bulk CSV imports
description:
  This document describes how to load CSV data and specify text loader
  configuration for timestamp and date parsing
---

The REST API provides an `/imp` endpoint exposed on port `9000` by default. This
endpoint streams tabular text data directly into a table, supporting CSV, TAB
and pipe (`|`) delimited inputs with optional headers. Data types and structures
are detected automatically, but additional configuration can be provided to
improve automatic detection.
 