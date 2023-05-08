# Overview
In these notes, we will be going over:
- Docker
  - Containers
  - Images
  - Volumes
  - Networks
  - DockerFile
  - Docker Compose


# Docker
Docker is a service product that uses OS-level virtualization to deliver software in packages called containers.

## Containers
Containers are a standard unit of software that packaes up code and all its dependencies (with the correct versions) so the application runs quickly and reliably from one computing environment to another. Docker also installs other software necessary for the application in the container, without having to manually install its dependencies since it does it by itself within the container, and once its done, one can just remove the container.

## Images
Docker Images on the other hand just store all the necessary code, assets, dependencies, files, etc... which are required for the container. What makes an image different from a container is that an image would be just static data packaged together. Whereas a container is when the packaged files within an image are currently running on a workstation.

Images can also be transferred from one workstation to another, and can also be uploaded to [Docker Hub](https://hub.docker.com/). Images from other people, i.e. software companies, also have images stored on Docker Hub.

## Volumes
Volumes are used in docker as a local storage. The idea of volumes is that when you run a container, and then have to stop and continue later on, once you stop the container all your progress is gone. With volumes, the progress can be stored within them, even when the container is not running any longer. Even if images are removed locally, but the volume remains there. Once the image is reinstalled and run again, the volume's data will still be valid. Multiple volumes can be assigned to as many images.

## Networks
Networks are used to enable communication between containers which are completely isolated. This can be done across different machines as well. In order for two containers to be able to communicate with each other, they must be within the same network name.

## Dockerfile
A Dockerfile is basically a file which holds the necessary configurations and dependencies to dockerize any custom application into an image. Therefore, one can define any necessary dependencies along with their version necessary to run the application in the dockerfile, and then point out which files are necessary to run the application. Once the dockerfile is complete, any application can be built into a docker image to be used on any machine that has docker on it. Other images can also be imported to this dockerfile, for example if your application uses java, the official java image with the specified version can be imported through the dockerfile.

## Docker-Compose
Compose is a tool for defining and running multi-container Docker applications. So basically, rather than having to define everything on a single command line, which might be a bit confusing. `docker-compose` lets you pre-define all the necessary arguments needed to run docker commands. The environment variables, volumes, networks, etc... can all be defined within the file as well. Configurations for building, running and even testing can all be defined within a `docker-compose.yml` file.

Services within a docker-compose file is like grouping multiple containers to be run together as they would depend on each other, like being within the same network.

## Commands
Basic docker commands:
- `docker -v` - check docker version
- `docker ps` - show running containers' image data
- `docker ps -a` - show __all__ images stored
- `docker run --name some_name -v some_volume:/var/lib/image_name -e ENV_VARIABLE=value -p 5454:8080 -d image_name:image_tag` - download a specific image from docker hub, along with a volume (-v), environment variables (-e), port (-p _local_port_ __:__ _container_port_), image name and tag. PS. you can find that data on the docker hub page of the image you need.
- `docker volume ls` - show __all__ volumes in local
- `docker network ls` - show __all__ networks in local
- `docker network connect network_name container_name` - connect the container _container_name_ to the network _network_name_
- `docker start container1 container2` - start specifiedcontainers
- `docker stop` - stops all running containers
- `docker stop container1 container2` - stops specified containers
- `docker rm container1 container2` - remove specified containers
- `docker exec -it IMAGE_ID bash` - enters virtual environment created by docker, where you have access to all the files stored in the container specified by the _IMAGE_ID_. Must run `winpty` before.
- `docker logs container_name -f` - shows the logs sent by the cotainer _container_name_. `-f` is used to follow the logs like `watch`.
