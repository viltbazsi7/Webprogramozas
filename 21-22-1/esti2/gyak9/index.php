<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jedi bejelentőlap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
<nav class="navbar navbar-light bg-light mb-3">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">HoloNet</a>
    </div>
</nav>
<div class="container mb-3">
    <div class="card">
        <div class="card-header">Jedi bejelentőlap</div>
        <div class="card-body">
            <form method="post">
                <div class="mb-3">
                    <label for="name" class="form-label">Név</label>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Gipss J'kab">
                </div>
                <div class="mb-3">
                    <label for="id" class="form-label">Azonosító</label>
                    <input type="text" class="form-control" name="id" id="id" placeholder="JD123456">
                </div>
                <div class="mb-3">
                    <label for="planet" class="form-label">Bolygó</label>
                    <select class="form-select" name="planet" id="planet">
                        <option>Felucia</option>
                        <option>Geonosis</option>
                        <option>Kamino</option>
                        <option>Kashyyyk</option>
                        <option>Mandalore</option>
                        <option>Mygeeto</option>
                    </select>
                </div>
                <div class="mb-3">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="rank" value="master" id="master">
                        <label class="form-check-label" for="master">Jedi mester</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="rank" value="knight" id="knight" checked>
                        <label class="form-check-label" for="knight">Jedi lovag</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="rank" value="padawan" id="padawan">
                        <label class="form-check-label" for="padawan">Padawan</label>
                    </div>
                </div>
                <div class="mb-3">
                    <input class="form-check-input" type="checkbox" name="haspadawan" id="haspadawan">
                    <label class="form-check-label" for="haspadawan">Van padawanja?</label>
                </div>
                <div class="mb-3">
                    <label for="wish" class="form-label">Kívánság</label>
                    <textarea class="form-control" name="wish" id="wish" rows="3"></textarea>
                </div>
                <input type="submit" class="btn btn-primary" name="submit" value="Küldés">
            </form>
        </div>
    </div>
</div>
<footer class="container-fluid">
    <hr>
<p>Copyright &copy; 19 YE Galaktikus Köztársaság <small>(szerk.: mi az a Yavin előtt?)</small></p>
</footer>
</body>
</html>