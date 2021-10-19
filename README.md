<h1 align="center">Environment with Nginx, Node and MySql database</h1>
<p align="center">This is the second challenger of FullCycle course - Docker module</p>

### Objective:
<p>Create a docker-compose file that has 3 services: nginx, node and MySql database. <br>Then expose only nginx and make node to save and retrieve data from database.</p>

#### How to use the image:
```console
bscpaz@2am:/$ docker-compose up -d --build
```

#### How to connect into database:
```console
bscpaz@2am:/$ docker exec -it db bash
root@db:/$ mysql -u root
```


<hr>

#### known issues:

```
Issue: 
  "Can't change permissions of the file 'ca-key.pem'"

Solution: 
  Use a Linux volume (inside WSL2 or "\\wsl$") instad of a Windows volume
```
