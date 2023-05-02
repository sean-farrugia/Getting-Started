# Overview
In these notes, we will be going over:
- Bego
  - What is Bego?
  - Installation
  - Manifest
  - Deploy a simple app
  - Bego Demo
  - Bego Commands
  - Environments
  - `kubectl` with Bego

# Bego

## What is Bego?
Bego is basically a command-line tool for deploying container-based applications to kubernetes pods online. It will create a kubernetes cluster which will interact with Bego. It is intended to be run locally on developer's computers and on GitHub actions.

__NB:__ In Bego, we are limited to only 1 containerized application per manifest file, i.e. per pod.

## 