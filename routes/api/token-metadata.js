var express = require('express');
var router = express.Router();
var metadataRepo = require('../../helpers/metadata-repo')

// router.get('/', function(req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   metadataRepo.getAll()
//     .then((totalSupply) => {
//       return res.json({totalSupply: totalSupply});
//     })
// });

router.get('/:tokenId', function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  let tokenId = parseInt(req.params.tokenId);
  const data = await metadataRepo.getById(tokenId);
  return res.json(data);
});

module.exports = router;