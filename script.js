
const newProducts = [
  // DRESSES
  {
    id: 101,
    name: "Elegant Floral Maxi Dress",
    category: "Dress",
    price: 2500,
    oldPrice: 3200,
    seller: "Fashion House",
    sellerId: 5,
    stock: 20,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700",
    images: ["https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700"],
    description: "Beautiful floral maxi dress."
  },
  
const extraProducts = [
  // DRESS COLLECTION
  {
    id: 201,
    name: "Pink Party Dress",
    category: "Dress",
    price: 2450,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600",
    description: "Beautiful pink party dress"
  },
  {
    id: 202,
    name: "Black Maxi Dress",
    category: "Dress",
    price: 2850,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600",
    description: "Premium black maxi dress"
  },
  {
    id: 203,
    name: "Floral Summer Dress",
    category: "Dress",
    price: 1950,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600",
    description: "Floral summer collection"
  },
  {
    id: 204,
    name: "Elegant Party Gown",
    category: "Dress",
    price: 4200,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600",
    description: "Luxury party gown"
  },
  {
    id: 205,
    name: "Casual Women Outfit",
    category: "Dress",
    price: 1650,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    description: "Modern casual outfit"
  },
  {
    id: 206,
    name: "Premium Saree",
    category: "Dress",
    price: 3500,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600",
    description: "Traditional premium saree"
  },

  // BEAUTY & MAKEUP
  {
    id: 207,
    name: "Luxury Makeup Kit",
    category: "Beauty",
    price: 1850,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",
    description: "Complete makeup kit"
  },
  {
    id: 208,
    name: "Glow Serum Set",
    category: "Beauty",
    price: 1250,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600",
    description: "Beauty skincare collection"
  },
  {
    id: 209,
    name: "Lipstick Collection",
    category: "Beauty",
    price: 850,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600",
    description: "Multiple lipstick shades"
  },
  {
    id: 210,
    name: "Premium Perfume",
    category: "Beauty",
    price: 2200,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600",
    description: "Elegant fragrance"
  },
  {
    id: 211,
    name: "Makeup Brush Set",
    category: "Beauty",
    price: 750,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
    description: "Professional makeup brushes"
  },
  {
    id: 212,
    name: "Beauty Face Care Kit",
    category: "Beauty",
    price: 1550,
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=600",
    description: "Daily beauty care kit"
  },

  // HOME DECOR
  {
    id: 213,
    name: "Ceramic Vase",
    category: "Home",
    price: 950,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600",
    description: "Elegant ceramic vase"
  },
  {
    id: 214,
    name: "Decorative Wall Clock",
    category: "Home",
    price: 1450,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600",
    description: "Modern wall clock"
  },
  {
    id: 215,
    name: "Luxury Table Lamp",
    category: "Home",
    price: 1850,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
    description: "Premium decorative lamp"
  },
  {
    id: 216,
    name: "Flower Decoration",
    category: "Home",
    price: 650,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600",
    description: "Beautiful flower decoration"
  },
  {
    id: 217,
    name: "Luxury Cushion Set",
    category: "Home",
    price: 1200,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600",
    description: "Premium cushion set"
  },
  {
    id: 218,
    name: "Modern Wall Art",
    category: "Home",
    price: 1100,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600",
    description: "Beautiful wall decoration"
  },

  // FASHION ACCESSORIES
  {
    id: 219,
    name: "Luxury Handbag",
    category: "Accessories",
    price: 2250,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    description: "Premium ladies handbag"
  },
  {
    id: 220,
    name: "Fashion Sunglasses",
    category: "Accessories",
    price: 950,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
    description: "Stylish sunglasses"
  },
  {
    id: 221,
    name: "Elegant Necklace",
    category: "Accessories",
    price: 1150,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600",
    description: "Fashion jewellery"
  },
  {
    id: 222,
    name: "Luxury Wrist Watch",
    category: "Accessories",
    price: 1950,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    description: "Premium wrist watch"
  },

  // SHOES COLLECTION
  {
    id: 223,
    name: "Women's High Heels",
    category: "Shoes",
    price: 1850,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600",
    description: "Stylish women's heels"
  },
  {
    id: 224,
    name: "Premium Sneakers",
    category: "Shoes",
    price: 2450,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    description: "Comfortable sneakers"
  },
  {
    id: 225,
    name: "Fashion Sandals",
    category: "Shoes",
    price: 1250,
    image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=600",
    description: "Comfortable fashion sandals"
  },

  // MORE COLLECTIONS
  {
    id: 226,
    name: "Premium Earrings",
    category: "Accessories",
    price: 550,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600",
    description: "Elegant earrings"
  },
  {
    id: 227,
    name: "Luxury Bedroom Decor",
    category: "Home",
    price: 3200,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600",
    description: "Modern bedroom decoration"
  },
  {
    id: 228,
    name: "Premium Skincare Cream",
    category: "Beauty",
    price: 950,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600",
    description: "Daily skincare cream"
  },
  {
    id: 229,
    name: "Fashion Denim Jacket",
    category: "Dress",
    price: 1950,
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600",
    description: "Trendy denim jacket"
  },
  {
    id: 230,
    name: "Decorative Flower Pot",
    category: "Home",
    price: 750,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600",
    description: "Modern decorative flower pot"
  }
];

// Add products without duplicating existing IDs
const existingIds = new Set(products.map(p => p.id));

extraProducts.forEach(product => {
  if (!existingIds.has(product.id)) {
    products.push(product);
  }
});

localStorage.setItem(
  "nexoraProducts",
  JSON.stringify(products)
);

  {
    id: 102,
    name: "Premium Party Gown",
    category: "Dress",
    price: 3500,
    oldPrice: 4500,
    seller: "Fashion House",
    sellerId: 5,
    stock: 15,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=700",
    images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=700"],
    description: "Premium party wear gown."
  },
  {
    id: 103,
    name: "Stylish Casual Outfit",
    category: "Dress",
    price: 1800,
    oldPrice: 2300,
    seller: "Fashion House",
    sellerId: 5,
    stock: 25,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700",
    images: ["https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700"],
    description: "Modern casual fashion outfit."
  },
  {
    id: 104,
    name: "Traditional Saree",
    category: "Dress",
    price: 3200,
    oldPrice: 4000,
    seller: "Fashion House",
    sellerId: 5,
    stock: 12,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700",
    images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700"],
    description: "Elegant traditional saree."
  },

  // MAKEUP & BEAUTY
  {
    id: 105,
    name: "Luxury Lipstick Collection",
    category: "Beauty",
    price: 850,
    oldPrice: 1200,
    seller: "Glow Beauty",
    sellerId: 4,
    stock: 40,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=700",
    images: ["https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=700"],
    description: "Beautiful lipstick collection."
  },
  {
    id: 106,
    name: "Premium Makeup Kit",
    category: "Beauty",
    price: 1850,
    oldPrice: 2400,
    seller: "Glow Beauty",
    sellerId: 4,
    stock: 25,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700",
    images: ["https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700"],
    description: "Complete makeup essentials kit."
  },
  {
    id: 107,
    name: "Beauty Foundation Set",
    category: "Beauty",
    price: 1450,
    oldPrice: 1800,
    seller: "Glow Beauty",
    sellerId: 4,
    stock: 30,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700",
    images: ["https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700"],
    description: "Foundation and beauty essentials."
  },
  {
    id: 108,
    name: "Skincare Glow Collection",
    category: "Beauty",
    price: 1250,
    oldPrice: 1600,
    seller: "Glow Beauty",
    sellerId: 4,
    stock: 35,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700",
    images: ["https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700"],
    description: "Daily skincare collection."
  },

  // DECORATED PRODUCTS
  {
    id: 109,
    name: "Luxury Decorative Vase",
    category: "Home",
    price: 1200,
    oldPrice: 1600,
    seller: "Urban Living",
    sellerId: 6,
    stock: 18,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=700",
    images: ["https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=700"],
    description: "Premium decorative flower vase."
  },
  {
    id: 110,
    name: "Modern Table Lamp",
    category: "Home",
    price: 1800,
    oldPrice: 2300,
    seller: "Urban Living",
    sellerId: 6,
    stock: 15,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700",
    images: ["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700"],
    description: "Elegant modern home lighting."
  },
  {
    id: 111,
    name: "Decorative Wall Art",
    category: "Home",
    price: 950,
    oldPrice: 1300,
    seller: "Urban Living",
    sellerId: 6,
    stock: 20,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=700",
    images: ["https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=700"],
    description: "Beautiful wall decoration."
  },
  {
    id: 112,
    name: "Luxury Decorative Cushion",
    category: "Home",
    price: 750,
    oldPrice: 1000,
    seller: "Urban Living",
    sellerId: 6,
    stock: 30,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=700",
    images: ["https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=700"],
    description: "Premium decorative cushion."
  },

  // ACCESSORIES
  {
    id: 113,
    name: "Luxury Ladies Handbag",
    category: "Accessories",
    price: 2200,
    oldPrice: 2900,
    seller: "Style House",
    sellerId: 2,
    stock: 20,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700",
    images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700"],
    description: "Premium fashion handbag."
  },
  {
    id: 114,
    name: "Fashion Sunglasses",
    category: "Accessories",
    price: 950,
    oldPrice: 1300,
    seller: "Style House",
    sellerId: 2,
    stock: 25,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700",
    images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700"],
    description: "Stylish premium sunglasses."
  },
  {
    id: 115,
    name: "Elegant Fashion Necklace",
    category: "Accessories",
    price: 1100,
    oldPrice: 1500,
    seller: "Style House",
    sellerId: 2,
    stock: 20,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700",
    images: ["https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700"],
    description: "Elegant fashion jewellery."
  },

  // SHOES
  {
    id: 116,
    name: "Women's Fashion Heels",
    category: "Shoes",
    price: 1900,
    oldPrice: 2500,
    seller: "Shoe Gallery",
    sellerId: 3,
    stock: 18,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700",
    images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700"],
    description: "Beautiful women's fashion heels."
  },
  {
    id: 117,
    name: "Premium Casual Sneakers",
    category: "Shoes",
    price: 2400,
    oldPrice: 3000,
    seller: "Shoe Gallery",
    sellerId: 3,
    stock: 20,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"],
    description: "Comfortable premium sneakers."
  },

  // MORE HOME DECOR
  {
    id: 118,
    name: "Artificial Flower Decoration",
    category: "Home",
    price: 650,
    oldPrice: 900,
    seller: "Urban Living",
    sellerId: 6,
    stock: 35,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=700",
    images: ["https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=700"],
    description: "Beautiful artificial flower decoration."
  },
  {
    id: 119,
    name: "Premium Ceramic Decor",
    category: "Home",
    price: 1350,
    oldPrice: 1750,
    seller: "Urban Living",
    sellerId: 6,
    stock: 15,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=700",
    images: ["https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=700"],
    description: "Modern ceramic decorative item."
  },
  {
    id: 120,
    name: "Luxury Room Decoration",
    category: "Home",
    price: 2100,
    oldPrice: 2700,
    seller: "Urban Living",
    sellerId: 6,
    stock: 12,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700",
    images: ["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700"],
    description: "Premium room decoration collection."
  }
];

// আগের products array-এর সঙ্গে নতুনগুলো যোগ করো
products.push(...newProducts);


const form = document.getElementById("productForm");
const imageInput = document.getElementById("productImage");
const preview = document.getElementById("imagePreview");
const productList = document.getElementById("productList");

let products = JSON.parse(
  localStorage.getItem("nexoraProducts") || "[]"
);

// Image Preview
imageInput.addEventListener("change", function() {
  const file = this.files[0];

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    alert("Please select an image!");
    this.value = "";
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert("Image must be under 2MB!");
    this.value = "";
    return;
  }

  const reader = new FileReader();

  reader.onload = function(e) {
    preview.src = e.target.result;
    preview.style.display = "block";
  };

  reader.readAsDataURL(file);
});

// Add Product
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const file = imageInput.files[0];

  if (!file) {
    alert("Please upload a product image!");
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert("Image must be under 2MB!");
    return;
  }

  const reader = new FileReader();

  reader.onload = function(event) {

    const product = {
      id: Date.now(),
      name: document.getElementById("productName").value,
      price: Number(document.getElementById("productPrice").value),
      category: document.getElementById("productCategory").value,
      description: document.getElementById("productDescription").value,
      image: event.target.result
    };

    products.push(product);

    try {
      localStorage.setItem(
        "nexoraProducts",
        JSON.stringify(products)
      );

      renderProducts();
      form.reset();
      preview.style.display = "none";

      alert("Product Added Successfully!");

    } catch (error) {
      products.pop();
      alert("Storage full! Use smaller images or server storage.");
    }
  };

  reader.readAsDataURL(file);
});

// Display Products
function renderProducts() {
  productList.innerHTML = "";

  products.forEach(function(product) {

    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const title = document.createElement("h3");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = "৳" + product.price;

    const category = document.createElement("p");
    category.textContent = product.category;

    const description = document.createElement("p");
    description.textContent = product.description;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete Product";

    deleteButton.addEventListener("click", function() {
      if (confirm("Delete this product?")) {
        products = products.filter(
          p => p.id !== product.id
        );

        localStorage.setItem(
          "nexoraProducts",
          JSON.stringify(products)
        );

        renderProducts();
      }
    });

    card.append(
      img,
      title,
      price,
      category,
      description,
      deleteButton
    );

    productList.appendChild(card);
  });
}

// Load Saved Products
renderProducts();
