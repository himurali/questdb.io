---
title: Lead Ride For Community
sidebar_label: For Community
description:
  Guide showing how to use QuestDB with Docker. This also covers how to import
  data as well as persistence.
---

QuestDB has images for both Linux/macOS and Windows on
[Docker Hub]({@dockerUrl@}).

## Install Docker

Before we start, you will need to install Docker.  

## QuestDB image


<!-- prettier-ignore-start -->

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

<Tabs defaultValue="linux" values={[
  { label: "Linux", value: "linux" },
  { label: "Windows", value: "windows" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="linux">


```shell
/root/.questdb
```

</TabItem>


<TabItem value="windows">

AAA
```shell
C:\questdb
```

</TabItem>


</Tabs>


## Container status

You can check the status of your container with **docker ps**. It also lists the
ports we published:

## Importing data and sending queries

Now that QuestDB is running, you can start interacting with it:


## Data persistence

### Mounting a volume

Volumes can be mounted to the QuestDB Docker container so that data may be
persisted or server configuration settings may be passed to an instance. The
following example demonstrated how to mount the current directory to a QuestDB
container using the `-v` flag in a Docker `run` command:
 
 

### Writing logs to disk

When mounting a volume to a Docker container,  
 