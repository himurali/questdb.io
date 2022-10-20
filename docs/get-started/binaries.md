---
title: Get started with QuestDB from the binaries
sidebar_label: Binaries
description:
  How to install and launch QuestDB from the binaries which are available on the
  Get QuestDB page.
---

import CodeBlock from "@theme/CodeBlock"
import InterpolateReleaseData from "../../src/components/InterpolateReleaseData"

This page describes how to install and use QuestDB via binaries. QuestDB comes
with a script `questdb.sh` for Linux/FreeBSD and an executable `questdb.exe` for
Windows. If you are looking for macOS, please check our 

## Download

You can find the latest binaries on th 

## Prerequisites

### "Any (no JVM)" version

The file is named:

<InterpolateReleaseData
  renderText={(release) => {
    return (
      <CodeBlock className="language-shell">
        {`questdb-${release.name}-no-jre-bin.tar.gz`}
      </CodeBlock>
    )
  }}
/>

This binary is approximately 4MB.

#### Java 11

When using this binary you will need to have Java 11 installed locally. You can
check which version is already installed on your system with:

```shell
java -version
```

If you do not already have Java installed, download and install the package for
your operating system. We support:

- AdoptOpenJDK
- Amazon Corretto
- OpenJDK
- Oracle Java

Other Java distributions are most likely working but we are not running tests on
them.

#### `JAVA_HOME`

The environment variable `JAVA_HOME` needs to be set to your JDK's installation
folder.

### Your operating system version

The file is named:

<!-- prettier-ignore-start -->

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

<Tabs defaultValue="linux" values={[
  { label: "Linux", value: "linux" },
  { label: "FreeBSD", value: "bsd" },
  { label: "Windows", value: "windows" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="linux">


<InterpolateReleaseData
  renderText={(release) => {
    return (
      <CodeBlock className="language-shell">
        {`questdb-${release.name}-rt-linux-amd64.tar.gz`}
      </CodeBlock>
    )
  }}
/>

</TabItem>


<TabItem value="bsd">


<InterpolateReleaseData
  renderText={(release) => {
    return (
      <CodeBlock className="language-shell">
        {`questdb-${release.name}-rt-freebsd-amd64.tar.gz`}
      </CodeBlock>
    )
  }}
/>

</TabItem>


<TabItem value="windows">


<InterpolateReleaseData
  renderText={(release) => {
    return (
      <CodeBlock className="language-shell">
        {`questdb-${release.name}-rt-windows-amd64.tar.gz`}
      </CodeBlock>
    )
  }}
/>

</TabItem>


</Tabs>


This binary weights around 20MB, this depends on your operating system.

When using this binary, you do not need anything on your machine, the Java
runtime is packaged directly with QuestDB.



## Next steps

Once you extracted the tarball,  