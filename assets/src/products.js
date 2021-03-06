function Product(name, popularity, image, description, ingredients) {
  this.id = name.replace(/\s/g, '');
  this.name = name;
  this.priceSmall = 4.99;
  this.priceLarge = 7.99;
  this.sizeSmall = "8oz";
  this.sizeLarge = "12oz";
  this.popularity = popularity; // 1-10 scale
  this.image = image;
  this.description = description;
  this.ingredients = ingredients
}
let products = [
  new Product(
    "Super Berry",
    6,
    "images/products/superberry.png",
    "Super Berry is exactly what you imagine, the perfect blend of sweet and sour berries.",
    ["Wild Blueberries", "Organic Strawberries", "Organic Blueberries", "Organic Cane Sugar", "Cinnamon Apple Pectin", "Ascorbic Acid (Vitamin C)", "Citric Acid."]
  ),

  new Product(
    "Strawberry",
    10,
    "images/products/Strawberry.png",
    "Strawberry jelly is the stuff of childhood dreams. Sunday afternoon tea is never right without it. It is an essential part of every pantry.",
    ["Water", "Organic Strawberries", "Organic Cane Sugar", "Citric Acid", "Natural Flavor", "Organic Fruit And Vegetable Juice [Color]"]
  ),

  new Product(
    "Raspberry",
    5,
    "images/products/raspberry.png",
    "The intense raspberry flavor of this jam makes it a longtime favorite. If you're not going to eat raspberries fresh out of hand by the fistful, this jam is the next best thing.",
    ["Organic Cane Sugar", "Organic Raspberries", "Fruit Pectin", "Citric Acid"]
  ),

  new Product(
    "Mixed Berry",
    6,
    "images/products/mixberry.png",
    "The perfect choice for the undecided, this jam has a bit of everything.",
    ["Strawberries (Organic)", "Raspberries (Organic)", "Blueberries (Organic)", "Grape Puree (Organic)", "Water", "Lemon Juice Concentrate (Organic)", "Dried Sugar Cane Syrup (Organic)", "Fruit Pectin"]
  ),

  new Product(
    "Lemon",
    4,
    "images/products/lemon.png",
    "Jazz up a biscuit, English muffin, or slice of toast with a spoonful of Lemon Jelly. You know what they say (or what they should say): When life give you lemons, make Lemon Jelly!",
    ["Meyer Lemons", "Fresh Meyer Lemon Juice", "Organic Cane Juice"]
  ),

  new Product(
    "Grape Jelly",
    10,
    "images/products/grapejelly.png", 
    "America's favorite. Every jar starts with one pound of grapes. For delicious, one‑of‑a‑kind taste with no artificial flavors or colors.",
    ["Organic Sugar", "Water", "Organic Concord Grape Juice Concentrate", "Citric Acid", "Fruit Pectin"]
  ),

  new Product(
    "Ginger Cardamom ",
    3,
    "images/products/Ginger-Cardamom-Pear-Butter.png",
    "Spread this fruity butter on muffins or whole grain baguettes and savor the flavors of pear and ginger.",
    ["Bartlett Pears", "Organic Evaporated Cane Juice", "Cardamom", "Ginger", "Lemon Juice", "Salt"]
  ),

  new Product(
    "Cinnamon Blueberry",
    4,
    "images/products/cinnamonblueberry.png",
    "Many people might think warm spices belong to the winter holidays, but I find them most enjoyable paired with summer fruit.The hint of cinnamon perfectly balances the sweet and tart flavor of blueberries.",
    ["Organic Wild Blueberries, Organic Cane Sugar, Cinnamon Apple Pectin, Ascorbic Acid (Vitamin C), Citric Acid."]
  ),

  new Product(
    "Cinnamon Spiced ",
    6,
    "images/products/Cinnamon-Spiced-Triple-Berry-Jam.png",
    "On waffles or in cocktails, this beautiful spiced triple berry jam is a delicious addition to your pantry.",
    ["Berry Mix- (Organic Strawberries, Organic Blackberries, Organic Blueberries)", "Water", "Organic Sugar", "Fruit Pectin", "Calcium Chloride", "Citric Acid", "Cinnamon", "Allspice", "Nutmeg"]
  ),

  new Product(
    "Blueberry",
    7,
    "images/products/blueberry.png",
    "The health benefits from eating blueberries are so great that we decided to preserve them as a jam, and honestly we can't pick what we like it on the most.",
    ["Organic Wild Blueberries", "Organic Cane Sugar", "Apple Pectin"]
  ),

  new Product(
    "Blackberry",
    10,
    "images/products/Blackberry.png", " Savor the tart, sweet flavor of fresh summer blackberries all year round with this Blackberry Jelly recipe. Can complement any dessert.",
    ["Organic Seedless Blackberry Puree", "Organic Cane Sugar", "Fruit Pectin"]
  ),

  new Product(
    "Apple Butter",
    10,
    "images/products/applebutter.png",
    "This homemade Apple Butter is smooth, creamy, and velvety. Super healthy, delicious, and perfect for spreading on toast, muffins, pancakes etc.",
    ["Apples", "Cinnamon", "Allspice", "Brown Sugar", "Honey"]
  )
];

  let row1 = $("#row-1")
  let row2 = $("#row-2")
  products.forEach(function (product, index) {

    let list = function (array) {
      let listItems = [];
      for (let i = 0; i < array.length; i++) {
        listItems.push( `<li>${array[i]}</li>`)
      }
      return listItems.join("");
    }  
    let item = `<div class="col-lg-3 col-md-6 portfolio-item filter-app">
    </br>
    <h4 style="font-family: 'Montserrat', sans-serif; font-weight:600; color: #161e67; border-bottom:1px solid #ff5c5c; font-size: 22px; margin-top: 15px;">${product.name}</h4>
    <div class="portfolio-wrap">
      <img src="${product.image}"class="img-fluid" alt="" style="width:100%;">
      <div class="portfolio-info" data-toggle="modal" data-target="#${product.id}">
        <h4>${product.name}</h4>
        <p>$${product.priceSmall} / $${product.priceLarge}</p>
      </div>
    </div>
    </br>
    <a data-toggle="modal" data-target="#${product.id}" animated fadeInUp><button type="button" style="font-size: 16px;" class="btn btn-primary btn-lg butt">VIEW THIS PRODUCT</button></a>
  </div>
  
  <div class="modal fade" id="${product.id}" tabindex="-1" role="dialog" aria-labelledby="${product.id}modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header" style="background-color:#ff5c5c; color:white;">
          <h5 class="modal-title" id="exampleModalLongTitle">Product Information</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span style="color: white" aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
       
        <!-- ======= Portfolio Details Section ======= -->
        <section id="portfolio-details" class="portfolio-details">
          <div class="container">
    
            <div class="row">
              <div class="col-lg-8">
                <img src="${product.image}"class="img-fluid" alt="">
              </div>
    
              <div class="col-lg-4 my-auto portfolio-info">
                <h3>${product.name}</h3>
                <ul>
                  <li><strong>Popularity</strong>:
                  ${product.popularity}/10</li>
                  <li>
                  <strong>Small</strong>: ${product.priceSmall}
                  <br>
                  <strong>Large</strong>: ${product.priceLarge}</li>
                  <li>
                  <strong>Small</strong>: ${product.sizeSmall}
                  <br>
                  <strong>Large</strong>: ${product.sizeLarge}
                  </li>
                </ul>
                </div>
                <div class="row mt-2">
                  <div class="container">
                    <p>
                    ${product.description}
                    </p>
                    <h4>Ingredients</h4>
                    <ul style="margin-bottom: -60px;">
                    ${list(product.ingredients)}
                    </ul>
                    </div>
                </div>
    
            </div>
    
          </div>
        </section><!-- End Portfolio Details Section -->
        </div>
        <div class="modal-footer" style="background-color:#161E67">
          <button type="button"  id="modal-button" class="btn btn-primary" data-dismiss="modal">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
  `
    if (product.popularity == 10) {
      row2.append(item)
    }
    row1.append(item)
  })