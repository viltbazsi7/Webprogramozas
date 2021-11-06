# PHP bevezető
A PHP egy preprocesszor a HTML-hez, amely értelmezője webszerver modulként létezik. Emiatt nem lehet egyszerűen böngészőből megnyitni a php fájlokat, hanem valamilyen szerveren keresztül kell őket elérni. A lehetőségek:

### Webprogramozás szerver (WinSCP)
A számonkérések során a `webprogramozas.inf.elte.hu` szerver lesz használva, a zárthelyik és beadandók ezen a szerveren kell, hogy működjenek, vagyis **a szerveren futó PHP modul verziója a mérvadó (jelenleg 7.0.9)**. Ide SFTP-n keresztül INF-es azonosítóval lehet bejelentkezni. Ehhez ajánlott a [WinSCP](https://winscp.net/eng/index.php) használata.

A szerveren mindenki rendelkezik saját mappával, az ebben található `www` mappa tartalma pedig a `http://webprogramozas.inf.elte.hu/hallgatok/[Neptun kód]` címen érhető el. Példa: [http://webprogramozas.inf.elte.hu/hallgatok/bmey9z/](http://webprogramozas.inf.elte.hu/hallgatok/bmey9z/)

### Lokális szerver
Lokális szervert legegyszerűbben a [XAMPP](https://www.apachefriends.org/index.html)-al (**Cross**-platform **A**pache + **M**ariaDB + **P**HP + **P**erl) lehet telepíteni, amely elérhető Windows-ra, Linux-ra és OS X-re egyaránt és egyszerűen telepíthető. Emellett használható egyénileg telepített szerver is, Apache és NGINX alapú egyaránt, a lényeg, hogy legyen benne PHP 7 modul.

### PHP referencia
A PHP referencia itt érhető el: [https://www.php.net/manual/en/langref.php](https://www.php.net/manual/en/langref.php)