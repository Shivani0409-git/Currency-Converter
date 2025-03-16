
let URL = "https://v6.exchangerate-api.com/v6/24cf457a7247cfc5e08c73cd/latest/INR";

let Select = document.getElementsByClassName("select");
let btn = document.getElementById("Btn");
let Num = document.getElementById("Number_input");
let From = document.getElementById("FROM");
let To = document.getElementById("TO");
let out = document.getElementById("Output");

let Flagg = document.getElementById("IMag");
let TFlagg = document.getElementById("TIMag");

let Data;
Data =  fetch(URL).then((Response) => {
    return Response.json();
}).then((res) => {
    return Object.keys(res.conversion_rates);
})

let data = Data.then((res) => {
    res.forEach(ele => {
        Array.from(Select).forEach((Sel) => {
            const newOption = document.createElement('option');
            newOption.text = ele; 
            newOption.value = ele;
            Sel.appendChild(newOption);
        })
    });
});

let c = 0;

From.onchange = () => {
    
    let name = From.value[0] + From.value[1];
    if (c == 0) {
    let flagImg = document.createElement('img');
    flagImg.src = `https://flagsapi.com/${name}/shiny/48.png`
    flagImg.alt = 'Flag Image';
        Flagg.insertBefore(flagImg, Flagg.firstChild);
        
    flagImg.style.paddingRight = "10px";
    } else {
        const link = document.querySelector('img');
        link.setAttribute('src', `https://flagsapi.com/${name}/shiny/48.png`);
    }
    
    c++;
}

let q = 0;

To.onchange = () => {
    let Tame = To.value[0] + To.value[1];
    if (q == 0) {
        let TflagImg = document.createElement('img');
        
    TflagImg.src = `https://flagsapi.com/${Tame}/shiny/48.png`
    TflagImg.alt = 'Flag Image';
        TFlagg.insertBefore(TflagImg, TFlagg.firstChild);
        
    TflagImg.style.paddingRight = "10px";
    } else {
        const link = document.querySelectorAll('img');
        link[1].setAttribute('src', `https://flagsapi.com/${Tame}/shiny/48.png`);
    }
    
    q++;
}


let ans;
btn.onclick = () => {
    let amount = Num.value;
    let val1 = From.value;
    let val2 = To.value;
    let Url = `https://v6.exchangerate-api.com/v6/24cf457a7247cfc5e08c73cd/latest/${val1}`;
    let result = fetch(Url).then((Response) => {
        return Response.json();
    }).then((res) => {
        return res.conversion_rates;
        // console.log(res.conversion_rates.`${val2}`);
    });
    result.then((ds) => {
        Object.keys(ds).forEach(key => {
            if (key === val2) {
                console.log(typeof(ds[key]));
                ans = ds[key]; // Output: 30
                out.textContent =`${amount} ${val1} => ${amount*ans} ${val2}`;
                
            }
        });
    })
    
    // console.log(amount, val1, val2);

}
 

