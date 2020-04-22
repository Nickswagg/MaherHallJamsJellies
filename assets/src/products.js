function Product(name, popularity, image, description) {
  this.id = name.replace(/\s/g, '');
  this.name = name;
  this.priceSmall = 4.99;
  this.priceLarge = 7.99;
  this.sizeSmall = "8oz";
  this.sizeLarge = "12oz";
  this.popularity = popularity; // 1-10 scale
  this.image = image;
  this.description = description
}
let products = [
  new Product("Super Berry", 6, "images/products/superberry.png", "Super Berry is exactly what you imagine, the perfect blend of sweet and sour berries."),

  new Product("Strawberry", 8, "images/products/Strawberry.png", "Strawberry jelly is the stuff of childhood dreams. Sunday afternoon tea is never right without it. It is an essential part of every pantry."),

  new Product("Raspberry", 5, "images/products/raspberry.png", "The intense raspberry flavor of this jam makes it a longtime favorite. If you're not going to eat raspberries fresh out of hand by the fistful, this jam is the next best thing."),

  new Product("Mixed Berry", 6, "images/products/mixberry.png", "The perfect choice for the undecided, this jam has a bit of everything."),

  new Product("Lemon", 4, "images/products/lemon.png", "Jazz up a biscuit, English muffin, or slice of toast with a spoonful of Lemon Jelly. You know what they say (or what they should say): When life give you lemons, make Lemon Jelly!"),

  new Product("Grape Jelly", 9, "images/products/grapejelly.png", " America's favorite. Every jar starts with one pound of grapes. For delicious, one‑of‑a‑kind taste with no artificial flavors or colors."),

  new Product("Ginger Cardamom Pear Butter", 3, "images/products/Ginger-Cardamom-Pear-Butter.png", "Spread this fruity butter on muffins or whole grain baguettes and savor the flavors of pear and ginger."),

  new Product("Cinnamon Blueberry", 4, "images/products/cinnamonblueberry.png", "Many people might think warm spices belong to the winter holidays, but I find them most enjoyable paired with summer fruit.The hint of cinnamon perfectly balances the sweet and tart flavor of blueberries."),

  new Product("Cinnamon Spiced Triple Berry Jam", 6, "images/products/Cinnamon-Spiced-Triple-Berry-Jam.png", "On waffles or in cocktails, this beautiful spiced triple berry jam is a delicious addition to your pantry."),

  new Product("Blueberry", 7, "images/products/blueberry.png", "The health benefits from eating blueberries are so great that we decided to preserve them as a jam, and honestly we can't pick what we like it on the most."),

  new Product("Blackberry", 7, "images/products/Blackberry.png", " Savor the tart, sweet flavor of fresh summer blackberries all year round with this Blackberry Jelly recipe. Can complement any dessert."),

  new Product("Apple Butter", 10, "images/products/applebutter.png", "This homemade Apple Butter is smooth, creamy, and velvety. Super healthy, delicious, and perfect for spreading on toast, muffins, pancakes etc.")
];

  let row1 = $("#row-1")
  products.forEach(function (product, index) {
    let item = `<div class="col-lg-4 col-md-6 portfolio-item filter-app">
    <div class="portfolio-wrap">
      <img src="${product.image}"class="img-fluid" alt="">
      <div class="portfolio-info">
        <h4>${product.name}</h4>
        <p>${product.priceSmall} / ${product.priceLarge}</p>
        <div class="portfolio-links">
          <a href="#" title="Add to Cart"><i class="bx bx-plus"></i></a>
          <a  data-toggle="modal" data-target="#${product.id}"title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="modal fade" id="${product.id}" tabindex="-1" role="dialog" aria-labelledby="${product.id}modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Product Information</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
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
                  <li><a href="#">Add to Cart</a></li>
                </ul>
                </div>
                <div class="row mt-2">
                  <div class="container">
                    <p>
                    ${product.description}
                    </p>
                    </div>
                </div>
    
            </div>
    
          </div>
        </section><!-- End Portfolio Details Section -->
        </div>
        <div class="modal-footer">
          <button type="button"  id="modal-button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  `
  row1.append(item)
   
  })
  