const express = require('express');

const app = express();
const bodyParser = require('body-parser') ;
app.use(bodyParser.json());
const fs = require('fs');

const getTaxByRegion = (regions, regionCode) => {
    for (let i=0;i<regions.length;i++){
        if (regionCode == regions[i].regionCode){
            // found the region, return the tax info
            return regions[i].taxes;
        }
    }
    return null;
}

/* Get the sub-total before discount and taxes
 *
 * Return: eg.{"newsub": 80}
 */
app.post('/subtotal', (req, res)=>{
    const previousTotal = req.body.total;
    const addedPrice = req.body.price;
    const newTotal = parseFloat(previousTotal) + parseFloat(addedPrice);

    if (previousTotal>=0){
        res.status(200).send({"newsub":newTotal});
    }else{
        res.status(500).send();
    }
    
});

/* Get the tax information for all proinces and territories
 * 
 * Return: a list of dictionary, eg.{"regionCode":11,"region":"Quebec",
 *                                 "taxes":{"GST":9.975,"QST":5}}
 */
app.get('/tax', (req, res)=>{
    const infos = JSON.parse(fs.readFileSync("taxes.json"));
    if (infos){
        res.status(200).send(infos);
    }else{
        res.status(500);
    }
});

/* Get the tax info for a specific region 
 * 
 * Return: eg. {"GST":9.975,"QST":5}
 */
app.get('/tax/:region', (req, res)=>{
    const regionCode = req.params.region;
    const infos = JSON.parse(fs.readFileSync("taxes.json"));
    const taxes = getTaxByRegion(infos, regionCode);
    if (taxes){
        res.status(200).send(taxes);
    }else{
        res.status(500);
    }
});


/* Get the total after discount and taxes
 *
 * Return: eg.{"total": 80}
 */
app.post('/checkout', (req, res) => {
    // response with:
    // [{"Your Total", "Discout", "taxes"}]
    const subtotal = req.body.total;
    const discount = req.body.discount;
    const regionCode = req.body.region;
    let taxRate = 0;
    if (subtotal>0 && discount>=0 && regionCode){
        const infos = JSON.parse(fs.readFileSync("taxes.json"));
        const taxes = getTaxByRegion(infos, regionCode);
        if (taxes){

            // region exist
            for (const [tax, rate] of Object.entries(taxes)){
                taxRate = taxRate + rate;
            }
            const total = subtotal * (1-discount/100) * (1+taxRate/100)
            res.status(200).send({"total":total});
        }
    }

    res.status(500).send();
});

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}



const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);