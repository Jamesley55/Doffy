/\* step to install docker inside your Ubuntu server source ={ website: https://docs.docker.com/engine/install/ubuntu/}

1- sudo apt-get update

2- sudo apt-get install \
 apt-transport-https \
 ca-certificates \
 curl \
 gnupg-agent \
 software-properties-common

3- curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`

4- sudo apt install docker.io

\*/

**\ You need to be inside of Root directory (~/Doffy/**)
yarn docker-build // to build the docker image

yarn docker-push // to push the docker image to the Docker dinamo server

killall node // to kill all express-server running

sudo docker login // to login to docker

sudo docker pull doffyinc/ec2:1.0.1 // to pull the docker image into the AWS ubuntu server

screen // create a screen to run the docker container even afer the aws console
// is closed

sudo docker ps -a // find all docker container inside the server

sudo docker run --net="host" -d doffyinc/ec2:1.0.1 // running a docker container

sudo docker logs ContainerName // to check log inside docker

sudo docker container rm -f ContainerID // remove a running a docker container
