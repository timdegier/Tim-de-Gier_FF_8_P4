<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <title>Test</title>
  </head>
  <body>
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-6">
          <h5>Stap 1: kies een vorm</h5>
          <select id="changer" class="form-control">
            <option>Maak een keuze:</option>
            <option value="1">Rectangle</option>
            <option value="2">Circle</option>
            <option value="3">Ellipse</option>
            <option value="4">Line</option>
            <option value="5">Polygon</option>
            <option value="6">Polyline</option>
          </select>
        </div>

        <div class="col-md-6">
          <h5>Stap 2: kies properties</h5>
          <div id="other">

          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 m-3 p-5 rounded border">
          <div>
            <svg id="show" width="1000" height="400">

            </svg>
          </div>
        </div>
      </div>
    </div>

    <script src="index.js" charset="utf-8"></script>
  </body>
</html>
