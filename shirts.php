<?php include("inc/products.php"); ?><?php 
$pageTitle = "Sweet Tees Full Catalog of Shirts";
$section = "shirts";
include('inc/header.php'); ?>

		<div class="section shirts page" id="shirts-page-full">
			<div class="wrapper">
				<h1>Sweet Tees From the 80&rsquo;s Full Catalog of Shirts</h1>
				<ul class="products">
					
					<?php foreach($products as $product_id => $product) { 
							echo get_list_view_html($product_id,$product);
						}
					?>

				</ul>
			</div><!-- .wrapper -->
		</div><!-- .section shirts page -->

<?php include('inc/footer.php') ?>