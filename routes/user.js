const { Router } = require('express');

const router = Router();

router.get("/", (req, res) => {
    res.send('Saludos desde express');
});

module.exports = router;