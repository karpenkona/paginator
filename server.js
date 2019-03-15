var express = require('express');
const app = express();
const bodyParser =  require ( 'body-parser' )
//const controler = require('controllers/index.js')
app.set('views', './views/');
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/page/', (req, res)=>{
	var perPage = 3;
	//let {page} = req.query | 1;
	let page=req.query.page;
    //var page = req.params.page || 1;
    var products = [2, 5, 5, 6, 2, 5, 5, 6, 2, 5, 5, 6, 2, 5, 5, 6, 2, 5, 5, 6, 5, 85, 9, 7, 1];
    let count =products.length;
    console.log('страница: '+page+' показывать на странице: '+perPage+' всего страниц: '+Math.ceil(count / perPage))

	res.render('shop', {
                    products: products,
                    current: page,
                    pages: Math.ceil(count / perPage)
                })
	/*let {
    type,
    perPage,
    page,
    sorting,
    category,
  } = req.query;
  //let countShop=150;
  perPage=+perPage || 24;

  //getShopPage(perPage, page)

  console.log(perPage)
	res.render('shop', {'page':1});*/
});
app.listen(3008, ()=> console.log('server start'));


/*function getShopPage(perPage, page){
	

	Shops.find({}).limit(perPage).skip(perPage * (page-1).then(shops =>{
		return shops
	}, err => res.json({ success: false }))
	
	.exec(function(err, events) {
		Event.count().exec(function(err, count) {
			res.render('events', {
				events: events,
				page: page,
				pages: count / perPage
			})
		})
	})
}*/