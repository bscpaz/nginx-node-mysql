<h1 align="center">Environment with Nginx, NodeJS and MySql database</h1>
<p align="center">This is the second challenger of FullCycle course - Docker module</p>

### Objective:
<p>Create a docker-compose file that has 3 services: Nginx, NodeJS and MySql database. <br>Then expose only Nginx and make NodeJS to save and retrieve data from database.</p>

#### How to use the image:
```console
bscpaz@2am:/$ docker-compose up -d --build
```

#### How to connect into database:
```console
bscpaz@2am:/$ docker exec -it db bash
root@db:/$ mysql -u root -p
```


<hr>

#### known issues:

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
