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
 - [Docker] (https://docs.docker.com/engine/install/)
 - [Docker Compose] (https://docs.docker.com/compose/install/)

### Steps
Clone the repository.
```
  git clone https://github.com/thomasbshop/industrial-waste-registry.git
```
Checkout to the main branch
```
git fetch
git checkout main
```

Install docker and docker-compose
Run the following commands at the root of the project.
```
sudo docker-compose build 
sudo docker-compose up
```
Once the services are running, we need to create the database migrations.
Now, open another terminal window and run:
```
sudo docker-compose run api python manage.py migrate
```
Make sure your connected to the internet. This is for connection with the OAuth 2.0 Authorization Framework
Navigate to the following links to perfom actions:

API
 - http://localhost/api/profile/
 - http://localhost/api/company/
 - http://localhost/api/activities/
 - http://localhost/api/waste/
 
UI
 - http://localhost:8080/list

Note: the applications are secured therefore you will have doubleclick the login link at the UI to login first.
