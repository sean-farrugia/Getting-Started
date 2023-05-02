# Overview
In these notes, we will be going over:
- Features
- Terminology
- Concpets
- Horizontal Scaling
- Workloads
- Kubernetes commands

# Kubernetes
Kubernetes (aka K8s) is an open-source system for automating deployment, scaling, and management of containerized application.

## Features:
- Flexible Container Scheduling
- Health Checks and Self-Healing
- Workload-Specific Management Features
- Network Management, Serice Discovery, Load Balancing
- Sepearate Secret and Configuration Management
- Easy Scalability

## Terminology:
- Container - the units of packaging used to bundle application binaries together with their dependencies, configuration, freamwork, and libraries.
- Pods - the smallest deployable units of computing that you can create and mangage in Kubernetes. Pods may contain one or more containers together on the same node.
- Nodes - the representation of a single machine in the cluster running Kubernetes applications.
- Cluster - several nodes are connected to each other to form a cluster to pool resources that are shared by the applications deployed onto the cluster.
- Persistent Volume: Since the containers can join and leave the computing environment dynamically, local data storage can be volatile.

## Concepts:
- Master node (Control Plane) - Responsible for coordinating each node in the cluster, assigning work through pod scheduling, providing administrattive interfaces to the cluster, and managing cluster-wide health and services.
- ReplicationController - ensures that a specified number of pod replicas are running at any one time. Multiple pods are usually run to handle the network traffic between one another. However, it is also important for when one node stops, another would be ready and running already so that down time would be kept to a minimum. Moreover, it will check whether there are __too many__ or __too few__ pods running, depending on the workflow.
- API server - exposes the Kubernetes API. The API server is the front end for the Kubernetes control plane.
- Node Components - responsible for running containers, reporting health info back to the master servers, and managing access to the containers through network proxies.
- Load Balancer - manages and shares traffic between all the pods.

## Horizontal Scaling
The main advantage that Kubernetes brings, would be __horizontal scaling__. This is the opposite of vertical scaling which is the action of adding additional resources such as better RAM and CPU power to the current machine that is already running a number of applications. Horizontal scaling on the other hand is when you scale by adding more machines into your pool of resources, where these can be physical or virtual machines handled from the cloud. 

Kubernetes does the job of analysing how much power each machine is undertaking, where whenever one seems to be having a large load, another machine is added to the pool to even out the process. It can also temporarily remove certain machines if they are currently not needed due to few resources being needed.

## Workloads
The term _workloads_ is often used as a general category for tasks and services you want running on your cluster. So the workload cannot be "created".

Workload Resources:
- ReplicaSets - aims to maintain a stable set of replica Pods running at any given time. Used to guarantee the availability of a specified number of identical Pods.
- Deployments - an API object that manages a replicated application, typically by running Pods with no local state. Manages updates, rollbacks and scaling.
- DaemonSet - ensures that one Pod of a set is running on each node in your cluster. Some use cases are for monitoring, logging, virus scanning, and intrusion detection.
- StatefulSet - similar to deployments, however are specialized for Pods that require persistent storage. Manages databases.
- Services - an abstract way to expose an applicaiton running on a set of pods as a network service.
- Jobs - creates one or more Pods and will continue to retry execution of the pods until a specified number of them successfully terminate. Jobs can also run miltiple Pods in parallel.
- CronJobs - creates Jobs on a repeating schedule, written in Cron format.
- Ingress - can be though of as the glue between the outside world and your services. Provides HTTP layer 7 traffic contorl, including load balancing and fan out.

## Commands
Some basic kubernetes commands:
- `kubectl get pods` - displays all the pods
- `kubectl get replicaset` - displays all replicasets
- `kubectl get deployments` - displays all deployments
- `kubectl get daemonset` - displays all daemonsets
- `kubectl get statefulset` - displays all statefulsets
- `kubectl get service` - displays all services
- `kubectl get jobs` - displays all jobs
- `kubectl get cronjobs` - displays all cronjobs
- `kubectl get ingress` - displays ingress