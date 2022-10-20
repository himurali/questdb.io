---
title: Timestamps and time zones
description:
  This document describes how to work with time zones in QuestDB, including
  hints how to convert timestamps to UTC, to a specific time zone or by a UTC
  offset value.
---

When working with timestamped data, it may be necessary to convert timestamp
values to or from UTC, or to offset timestamp values by a fixed duration. The
following sections describe how QuestDB handles timestamps natively, how to use
built-in functions for working with time zone conversions, and general hints for
working with time zones in QuestDB.
 