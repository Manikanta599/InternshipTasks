const services =require('../Service/formservice');

function getDetails(req, res) {
    services.getdetails()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send("Error in getting details.");
        });
}

function getCount(req, res) {
    services.count()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send("Error fetching count.");
        });
}

function saveDetails(req, res) {
    const { name, village, pincode, email, phno, gender, dob } = req.body;

    console.log("Received data:", { name, village, pincode, email, phno, gender, dob });

    if (!name || !village || !pincode || !email || !phno || !gender || !dob) {
        return res.status(400).send("Missing fields.");
    }

    services.savedetails(name, village, pincode, email, phno, gender, dob)
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            console.error("Error saving details:", error);
            res.status(500).send("Data not added to database.");
        });
}

module.exports = {
    getDetails,
    getCount,
    saveDetails
};