function calc_fun()
{
    console.log("in fun");

    let u1t=parseInt(document.getElementById("u1t").value);
    let u1h=parseInt(document.getElementById("u1h").value);
    let u1e=parseInt(document.getElementById("u1e").value);
    let u1m=parseInt(document.getElementById("u1m").value);
    let u1sc=parseInt(document.getElementById("u1sc").value);
    let u1so=parseInt(document.getElementById("u1so").value);

    let u1total=u1t+u1h+u1e+u1m+u1sc+u1so;

    let qt=parseInt(document.getElementById("qt").value);
    let qh=parseInt( document.getElementById("qh").value);
    let qe=parseInt( document.getElementById("qe").value);
    let qm=parseInt( document.getElementById("qm").value);
    let qsc=parseInt( document.getElementById("qsc").value);
    let qso=parseInt( document.getElementById("qso").value);

    let qtotal=qt+qh+qe+qm+qsc+qso;

    let u2t=parseInt( document.getElementById("u2t").value);
    let u2h=parseInt( document.getElementById("u2h").value);
    let u2e=parseInt( document.getElementById("u2e").value);
    let u2m=parseInt( document.getElementById("u2m").value);
    let u2sc=parseInt( document.getElementById("u2sc").value);
    let u2so=parseInt( document.getElementById("u2so").value);

    let u2total=u2t+u2h+u2e+u2m+u2sc+u2so;

    let ht=parseInt(document.getElementById("ht").value);
    let hh=parseInt(document.getElementById("hh").value);
    let he=parseInt(document.getElementById("he").value);
    let hm=parseInt(document.getElementById("hm").value);
    let hsc=parseInt(document.getElementById("hsc").value);
    let hso=parseInt(document.getElementById("hso").value);

    let htotal=ht+hh+he+hm+hsc+hso;

    let u3t=parseInt(document.getElementById("u3t").value);
    let u3h=parseInt(document.getElementById("u3h").value);
    let u3e=parseInt(document.getElementById("u3e").value);
    let u3m= parseInt(document.getElementById("u3m").value );
    let u3sc=parseInt(document.getElementById("u3sc").value);
    let u3so=parseInt(document.getElementById("u3so").value);

    let u3total=u3t+u3h+u3e+u3m+u3sc+u3so;

    let at=parseInt(document.getElementById("at").value);
    let ah=parseInt(document.getElementById("ah").value);
    let ae=parseInt(document.getElementById("ae").value);
    let am=parseInt(document.getElementById("am").value);
    let asc=parseInt(document.getElementById("asc").value);
    let aso=parseInt(document.getElementById("aso").value);

    let atotal=at+ah+ae+am+asc+aso;

    // if (isNaN(u1total) || isNaN(qtotal) || isNaN(u2total) || isNaN(htotal) || isNaN(u3total) || isNaN(atotal)) {
    //     alert("please fill the marks data..");
    // }
    // else
    // {
        console.log(u1total);
        console.log(qtotal);
        console.log(u2total);
        console.log(htotal);
        console.log(u3total);
        console.log(atotal);

        document.getElementById("u1total").value = u1total;
        document.getElementById("qtotal").value = qtotal;
        document.getElementById("u2total").value = u2total;
        document.getElementById("htotal").value = htotal;
        document.getElementById("u3total").value = u3total;
        document.getElementById("atotal").value = atotal;

        

        let unitelements = document.getElementsByClassName("uout_of");
            
            
            for (let i = 0; i < unitelements.length; i++) {
                unitelements[i].value = 300;
            }

        let melements=document.getElementsByClassName("mtotal");
        for (let i = 0; i < melements.length; i++) {
            melements[i].value = 600;
        }
            let units=300;
            let mains=600;
        let u1per=(u1total/units)*100;
        let u2per=(u2total/units)*100;
        let u3per=(u3total/units)*100;

        let qper=(qtotal/mains)*100;
        let hper=(htotal/mains)*100;
        let aper=(atotal/mains)*100;

        document.getElementById("u1per").value=u1per.toFixed(2);
        document.getElementById("u2per").value=u2per.toFixed(2);
        document.getElementById("u3per").value=u3per.toFixed(2);
        document.getElementById("qper").value=qper.toFixed(2);
        document.getElementById("hper").value=hper.toFixed(2);
        document.getElementById("aper").value=aper.toFixed(2);
        
    

    //}

    


    
}