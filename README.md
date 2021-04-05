## Basic Go todo app

**Prerequisites**
* Docker installed
* Go installed

## Front-end

The front end has been cloned from [this repository](https://github.com/sdil/todo.git).
Open the index.html file to view the front-end.

## Create database

This example uses a MySQL database. +

Run the database from a Docker container:

```
docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root mysql
```

Create a new table:

```
docker exec -it mysql mysql -uroot -proot -e 'CREATE DATABASE todolist'
```

## Run the backend

```
cd backend
go build todolist.go
./todolist
```

## Use

After following the steps above, you should be able to run the example and input new data into the TodoApp.

Take a look at the database

```
docker exec -it mysql mysql -uroot -proot
mysql> use todolist
mysql> show tables
mysql> todo_item_models
```

## Future Plans

* Containerise the entire application
* Manage the containers through Kubernetes
* We'll see :)

## Credits

* [The frontend](https://github.com/sdil/todo.git)
* [The tutorials on setting up the Go backend](https://betterprogramming.pub/build-a-simple-todolist-app-in-golang-82297ec25c7d)