<?php 
$pageTitle = "Sweet Tees from the 80s";
$section = "home";
include('inc/header.php'); ?>

		<div class="section banner">
			<div class="wrapper">
				<div id="80s_hype_container" style="opacity:0.7;position:relative;overflow:hidden;width:1400px;height:290px;">
					<script type="text/javascript" charset="utf-8" src="80s.hyperesources/80s_hype_generated_script.js?74879"></script>
				</div>
				<div class="button">
					<a href="shirts.php">
						<h2>Hey, I&rsquo;m The 80s</h2>
						<p>Check Out My Sweet Tees</p>
					</a>
				</div><!-- .button -->
			</div><!-- .wrapper -->
		</div><!-- .section banner -->

		<div class="section shirts latest">
			<div class="wrapper">
				<h2>Sweet Tees From the 80s&rsquo;s Latest Shirts</h2>
				<?php include("inc/products.php"); ?>
				<ul class="products">

					<?php 

						$total_products = count($products);
						$position = 0;
						$list_view_html = "";
						foreach($products as $product_id => $product) { 
							$position = $position + 1;
							if ($total_products - $position < 4) {
								$list_view_html = get_list_view_html($product_id,$product) . $list_view_html;
							}
						}
						echo $list_view_html;
					?>								

				</ul>
			</div><!-- .section shirts latest -->
		</div><!-- .wrapper -->

<?php include('inc/footer.php') ?>