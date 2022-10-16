const router = require("./index.routes");

//READ: List of Items
router.get("/items", (req, res, next) => {
    Item.find()
      .then( itemsFromDB => {
          res.render("items/items-list", {items: itemsFromDB})
      })
      .catch( err => {
          console.log("error getting items from DB", err);
          next(err);
      })
  });
  
  
  router.post('/item/create', (req, res, next) =>

  {
      const itemDetails = {
          name: req.body.name,
          price: req.body.price,
          sizeing: req.body.sizeing,
      }
      Item.create(itemDetails)
      .then(() => {   
          res.redirect("/items")
      })
      .catch(err => {
          console.log("error creating new item in DB", err)
          next(err);
      })
  })



  router.get("/items", (req, res, next) => {
    Items.find()
    .then((itemsFromDB) => {
        res.render("items/items", {itemsFromDB})
    })
    .catch(err => {
        console.log("error reading items in DB", err)
        next(err);
    })
})
module.exports = router;