var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test/post',(req,res)=>{
  res.status(200).status({msg : 'good post'})
})

module.exports = router;
