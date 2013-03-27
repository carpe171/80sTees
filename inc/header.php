<!DOCTYPE html>
<html lang="eng">
	<head>
		<title><?php echo $pageTitle; ?></title>
		<link rel="stylesheet" href="css/custom.css" type="text/css">
		<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Oswald:400,700" type="text/css">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>

	<body>

		<div class="header">

			<div class="wrapper">

				<h1 class="branding-title"><a href="./">Sweet Tees From the</a></h1>
				<a href="./"><img class="hero" src="img/80s.png" alt="The 1980s says:"></a>
				<ul class="nav">
					<li class="shirts <?php if ($section == "shirts") { echo "on"; } ?>"><a href="shirts.php">Shirts</a></li>
					<li class="contact <?php if ($section == "contact") { echo "on"; } ?>"><a href="contact.php">Contact</a></li>
					<li class="cart"><a target="paypal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_cart&amp;business=RLAVFFMSN3UHS&amp;display=1">Shopping Cart</a></li>
				</ul>

			</div>

		</div>

		<div id="content">