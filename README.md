# industrial-waste-registry
Industrial waste and impact on health.

This project is a Dockerized Django Back-end API with Angular Front-end 

## Technologies used:

 - [Django 3.1.7](https://docs.djangoproject.com/en/3.1/)
 - [Django REST framework 3.12.2](https://www.django-rest-framework.org/)
 - [ Angular 8](https://angular.io/)
 - [ Docker Engine version 20.10.5](https://www.docker.com/)
    
    

## Installing
### Requirements
 - Docker
 - Docker Compose

### Steps
Clone the repository.
```
  git clone https://github.com/thomasbshop/industrial-waste-registry.git
```
Install docker and docker-compose
Run the following commands at the root of the project.
```
export DJANGO_SETTINGS="dev"
docker-compose build
docker-compose up
```
