const db = require('../db'); 

function getdetails() {
    console.log("in getdetails service..");
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM population', (err, result) => {
            if (err) {
                reject(new Error('Error fetching details'));
            } else {

                resolve(result);

            }
        });
    });
}

function count() {
    return new Promise((resolve, reject) => {
        db.query('SELECT COUNT(DISTINCT email) as cnt FROM population', (err, result) => {
            console.log(result);
            console.log(err);
            if (err) {
                reject(new Error('Error counting details'));
            } else {
                resolve({totalPop: result[0]?.cnt});
            }
        });
    });
}

function savedetails(name, village, pincode, email, phno, gender, dob) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO population (name, village, pincode, email, phno, gender, dob) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [name, village, pincode, email, phno, gender, dob];
        
        db.query(query, values, (err, result) => {
            if (err) {
                console.error('Error saving details:', err.message); 
                reject(new Error('Error saving details'));
            } else {
                console.log('Details saved successfully:', result); 
                resolve(result);
            }
        });
    });
}
module.exports = {
    getdetails,
    count,
    savedetails
};
