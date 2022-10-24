const router = require('express').Router();


router.use((req, res) => {
  res.status(404);
});

module.exports = router;