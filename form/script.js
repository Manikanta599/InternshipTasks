function fun()
{
    let uname=document.getElementById("name").value;
    let village=document.getElementById("village").value;
    let pincode=document.getElementById("pincode").value;
    let email=document.getElementById("email").value;
    let phno=document.getElementById("phno").value;
    let gen=document.querySelector('input[name="gen"]:checked');
    let gender=gen.value;
    let dob=document.getElementById("dob").value;

    console.log(uname,village,pincode,email,phno,gender,dob);


    //name, village, pincode, email, phno, gender, dob 

    let response=fetch('http://localhost:8090/save',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:uname,
            village:village,
            pincode:pincode,
            email:email,
            phno:phno,
            gender:gender,
            dob:dob
        })
    }).then(res=>{
    let savedetails=res.ok;
    console.log(savedetails);
    if(savedetails)  
        {
            console.log("sucess");
            
            document.getElementById("msg").innerHTML += "<h3>Updation Sucess</h3>";
        }
        else
        {
            console.log("failed..")
            
            document.getElementById("msg").innerHTML += "<h3>Updation Failed</h3>";

        }
        return res.json();
    }).then(data=>{
        console.log(data+" response data");

    }).catch(error=>{
        console.log("Error ",error);
    });

}
function getcount()
{
    let response = fetch('http://localhost:8090/counts');

    response.then(res => res.json()).then(data => {
        console.log(data);
       
    
        
        //const count = data["COUNT(DISTINCT email)"];
        //console.log(count); // Output: 1

        document.getElementById("msg").innerHTML = '';
        document.getElementById("msg").innerHTML = JSON.stringify(data);
    }).catch(error => {
        console.error('Error fetching data:', error);
    });
    

}