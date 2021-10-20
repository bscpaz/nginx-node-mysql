<h1 align="center">Environment with Nginx, NodeJS and MySql database</h1>
<p align="center">This is the second challenger of FullCycle course - Docker module</p>

### Objective:
<p>Create a docker-compose file that has 3 services: Nginx, NodeJS and MySql database. Then expose only Nginx and make NodeJS to save and retrieve data from database.</p>

#### Architecture:

![image](https://user-images.githubusercontent.com/9732874/137987270-950606b2-85d4-41f2-9ec5-30c36ca5df35.png)

#### How to use the image:
```console
bscpaz@2am:/$ docker-compose up -d --build
```
<hr>
<h4 align="center">Database instructions</h4>

#### How to enter into database server:
```console
bscpaz@2am:/$ docker exec -it db bash
root@db:/$ mysql -u root -p
```
#### Some utils MySql's commands:
```console
mysql> show databases; --Show all databases.
mysql> use <database-name>; --Connect to a database.
mysql> show tables; --Show all tables from a database.
mysql> desc <table-name>; --Show de structure of a table. 
mysql> exit --Leave the MySql terminal.
```
#### Create Table DDL:
```console
create table tb_users (
   id_user INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   nm_user VARCHAR(100) NOT NULL
);
```

#### Insert data (DML):
```console
INSERT INTO tb_users (nm_user) VALUES ('Bruno Paz');
```
<hr>
<h4 align="center">NodeJS instructions</h4>

#### How to enter into nodeJS server:
```console
bscpaz@2am:/$ docker run -it --rm -p "3000:3000" -v $(pwd)/:/usr/src/app --name node node:17 bash
```

#### Some NodeJS's commands:
##### In "/usr/src/app" directory

```console
root@node:/$ npm init --creates the package.json
root@node:/$ npm install express --save --Install express
root@node:/$ node index.js --Run a JS
```
<hr>
<h4 align="center">Known issues</h4>

```
Issue: 
  "Can't change permissions of the file 'ca-key.pem'"
Solution: 
  Use a Linux volume (inside WSL2 or "\\wsl$") instead of a Windows volume
```
```
Issue: 
  "mysql -u root" generates "Access denied for user 'root'@'localhost' (using password: NO)"
Solution: 
  root@db:/$ mysql -u root -p
  enter the root password
```
