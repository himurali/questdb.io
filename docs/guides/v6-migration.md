---
title: Version 6.0 migration
description:
  This document describes details about automatic upgrades with QuestDB version
  6.0 and instructions for manually reverting tables for compatibility with
  earlier QuestDB versions.
---

Release 6.0 introduces breaking changes in table transaction files. An automated
conversion process has been included in the release which will migrate table
transaction files to use the new format. The following sections describe the
automated upgrade process with notes for manually downgrading tables for
compatibility with older versions.
 