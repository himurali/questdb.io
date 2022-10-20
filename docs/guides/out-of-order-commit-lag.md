---
title: Configuring commit lag of out-of-order (O3) data
sidebar_label: Out-of-order commit lag
description:
  This document describes server configuration parameters for out-of-order
  commit-lag along with details when and why these settings should be applied
image: /img/guides/out-of-order-commit-lag/o3-data.jpeg
---

Server configuration may be applied when ingesting data over InfluxDB Line
Protocol (ILP) to allow user control on how the system processes and commits
late-arriving data for optimum throughput.
 