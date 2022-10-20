---
title: Kaveri heritage ride
sidebar_label: Kaveri heritage ride
description:
  This document describes how to launch the official AWS Marketplace AMI with
  QuestDB installed and how to access and secure the instance on Amazon Web
  Services
---

DigitalOcean is a platform with software listings from independent vendors that
run on cloud resources. This guide describes how to launch QuestDB via the
DigitalOcean marketplace using the official listing. This document also
describes usage instructions after you have launched the instance, including
hints for authentication, the available interfaces, and tips for accessing the
REST API and web console.

## Prerequisites

The prerequisites for deploying QuestDB on DigitalOcean are as follows:

- A DigitalOcean account (sign up using  

## Create a QuestDB Droplet

DigitalOcean has a marketplace which offers **1-Click Apps** reviewed by their
staff. QuestDB is available on the marketplace recently, so setup using this
method is preferred:  

4. Choose a region closest to you
5. At the **Authentication** section, enter your SSH public key, or set a
   password
6. Set a hostname for the droplet such as `questdb-demo`
7. Leave all other settings with their defaults, and click **Create Droplet** at
   the bottom of the page
 

After 30 seconds, QuestDB should be ready to use. To validate that we set
everything up successfully, copy the Droplet's IP address by clicking on it and
navigate to `http://<IP ADDRESS>:9000/` where `<IP ADDRESS>` is the IP address
you just copied. The interactive console should load and we can start querying
the database and inserting data.
 

### Disabling authentication

If you would like to disable authentication for Postgres wire protocol or
InfluxDB line protocol, comment out the following lines in the server
configuration file: 

### Disabling interfaces

Interfaces may be **disabled completely** with the following configuration:
 

## API creation

In addition to creating a Droplet from the QuestDB 1-Click App via the control
panel, you can also 
As an example, to create a 4GB QuestDB Droplet in the SFO2 region, you can use
the following curl command. You’ll need to either save your API access token to
an environment variable or substitute it into the command below.
 