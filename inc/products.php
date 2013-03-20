<?php

function get_list_view_html($product_id, $product) {
    
    $output = "";

    $output = $output . "<li>";
    $output = $output . '<a href="shirt.php?id=' . $product_id . '">';
    $output = $output . '<img src="' . $product["img"] . '" alt="' . $product["name"] . '">';
    $output = $output . "<p>View Details</p>";
    $output = $output . "</a>";
    $output = $output . "</li>";

    return $output;
}

$products = array();
$products[101] = array(
	"name" => "80&rsquo;s Shirt, Red",
	"img" => "img/shirts/shirt-101.jpg",
	"price" => 18,
	"paypal" => "Z88HTBLX3JSVA",
    "sizes" => array("Small","Medium","Large","X-Large")
);
$products[102] = array(
	"name" => "80&rsquo;s, Black",
    "img" => "img/shirts/shirt-102.jpg",
    "price" => 20,
    "paypal" => "L23A4TG8JYQ6Q",
    "sizes" => array("Small","Medium","Large","X-Large")
);
$products[103] = array(
    "name" => "80&rsquo;s, Blue",
    "img" => "img/shirts/shirt-103.jpg",    
    "price" => 20,
    "paypal" => "QMGWFDM9RNBZJ",
    "sizes" => array("Small","Medium","Large","X-Large")
);
$products[104] = array(
    "name" => "80&rsquo;s Shirt, Green",
    "img" => "img/shirts/shirt-104.jpg",    
    "price" => 18,
    "paypal" => "JNS5EJFGRFXJS",
    "sizes" => array("Small","Medium","Large","X-Large")
);
$products[105] = array(
    "name" => "80&rsquo;s Shirt, Yellow",
    "img" => "img/shirts/shirt-105.jpg",    
    "price" => 25,
    "paypal" => "DFP5QVBACX4AQ",
    "sizes" => array("Small","Medium","Large","X-Large")
);
$products[106] = array(
    "name" => "80&rsquo;s Shirt, Gray",
    "img" => "img/shirts/shirt-106.jpg",    
    "price" => 20,
    "paypal" => "PTLJDDEZ6CANS",
    "sizes" => array("Small","Medium","Large","X-Large")
);
$products[107] = array(
    "name" => "80&rsquo;s Shirt, Teal",
    "img" => "img/shirts/shirt-107.jpg",    
    "price" => 20,
    "paypal" => "2TXZGRNDRT8T4",
    "sizes" => array("Small","Medium","Large","X-Large")
);
$products[108] = array(
    "name" => "80&rsquo;s Shirt, Orange",
    "img" => "img/shirts/shirt-108.jpg",    
    "price" => 25,
    "paypal" => "EPA2FJF7AMRX2",
    "sizes" => array("Large","X-Large")
);

?>