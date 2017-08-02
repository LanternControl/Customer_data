console.log(customers.results[0]);

const template = `
    <h2>Internal Company Directory</h2>
    <div class="picture1">
       <img src="${customers.results[0].picture.large}">
       <div class="name">
        ${customers.results[0].name.title}
        ${customers.results[0].name.first}
        ${customers.results[0].name.last}
       </div>
       <div class="emails">
        ${customers.results[0].email}
       </div>
       <div class="street1">
        ${customers.results[0].location.street}
       </div> 
       <div class="citystate1">
        ${customers.results[0].location.city}
        ${customers.results[0].location.state}  
        ${customers.results[0].location.postcode}
       </div>
        <div class="phone1"
        ${customers.results[0].phone}
        </div>
    </div>

       <img src="${customers.results[1].picture.large}">
        <div class="name">
        ${customers.results[1].name.title}
        ${customers.results[1].name.first}
        ${customers.results[1].name.last}
       </div>
       <div class="emails">
        ${customers.results[1].email}
       </div>
       <div class="street1">
        ${customers.results[1].location.street}
       </div> 
       <div class="citystate1">
        ${customers.results[1].location.city}
        ${customers.results[1].location.state}  
        ${customers.results[1].location.postcode}
       </div>
        <div class="phone1"
        ${customers.results[1].phone}
        </div>

       <img src="${customers.results[2].picture.large}">
        <div class="name">
            ${customers.results[2].name.title}
            ${customers.results[2].name.first}
            ${customers.results[2].name.last}
        </div>
       <div class="emails">
            ${customers.results[2].email}
       </div>
       <div class="street1">
            ${customers.results[2].location.street}
       </div> 
       <div class="citystate1">
            ${customers.results[2].location.city}
            ${customers.results[2].location.state}  
            ${customers.results[2].location.postcode}
       </div>
        <div class="phone1"
            ${customers.results[2].phone}
        </div>

       <img src="${customers.results[3].picture.large}">
        <div class="name">
            ${customers.results[3].name.title}
            ${customers.results[3].name.first}
            ${customers.results[3].name.last}
        </div>
       <div class="emails">
            ${customers.results[3].email}
       </div>
       <div class="street1">
            ${customers.results[3].location.street}
       </div> 
       <div class="citystate1">
            ${customers.results[3].location.city}
            ${customers.results[3].location.state}  
            ${customers.results[3].location.postcode}
       </div>
        <div class="phone1"
            ${customers.results[3].phone}
        </div>

       <img src="${customers.results[4].picture.large}">
        <div class="name">
            ${customers.results[4].name.title}
            ${customers.results[4].name.first}
            ${customers.results[4].name.last}
        </div>
       <div class="emails">
            ${customers.results[4].email}
       </div>
       <div class="street1">
            ${customers.results[4].location.street}
       </div> 
       <div class="citystate1">
            ${customers.results[4].location.city}
            ${customers.results[4].location.state}  
            ${customers.results[4].location.postcode}
       </div>
        <div class="phone1"
            ${customers.results[4].phone}
        </div>

       <img src="${customers.results[5].picture.large}">
        <div class="name">
            ${customers.results[5].name.title}
            ${customers.results[5].name.first}
            ${customers.results[5].name.last}
        </div>
       <div class="emails">
            ${customers.results[5].email}
       </div>
       <div class="street1">
            ${customers.results[5].location.street}
       </div> 
       <div class="citystate1">
            ${customers.results[5].location.city}
            ${customers.results[5].location.state}  
            ${customers.results[5].location.postcode}
       </div>
        <div class="phone1"
            ${customers.results[5].phone}
        </div>

       <img src="${customers.results[6].picture.large}">
        <div class="name">
            ${customers.results[6].name.title}
            ${customers.results[6].name.first}
            ${customers.results[6].name.last}
        </div>
       <div class="emails">
            ${customers.results[6].email}
       </div>
       <div class="street1">
            ${customers.results[6].location.street}
       </div> 
       <div class="citystate1">
            ${customers.results[6].location.city}
            ${customers.results[6].location.state}  
            ${customers.results[6].location.postcode}
       </div>
        <div class="phone1"
            ${customers.results[6].phone}
        </div>
       <img src="${customers.results[7].picture.large}">
        7<div class="name">
            ${customers.results[7].name.title}
            ${customers.results[7].name.first}
            ${customers.results[7].name.last}
        </div>
       <div class="emails">
            ${customers.results[7].email}
       </div>
       <div class="street1">
            ${customers.results[7].location.street}
       </div> 
       <div class="citystate1">
            ${customers.results[7].location.city}
            ${customers.results[7].location.state}  
            ${customers.results[7].location.postcode}
       </div>
        <div class="phone1"
            ${customers.results[7].phone}
        </div>
       <img src="${customers.results[8].picture.large}">
        <div class="name">
            ${customers.results[8].name.title}
            ${customers.results[8].name.first}
            ${customers.results[8].name.last}
        </div>
       <div class="emails">
            ${customers.results[8].email}
       </div>
       <div class="street1">
            ${customers.results[8].location.street}
       </div> 
       <div class="citystate1">
            ${customers.results[8].location.city}
            ${customers.results[8].location.state}  
            ${customers.results[8].location.postcode}
       </div>
        <div class="phone1"
            ${customers.results[8].phone}
        </div>
       <img src="${customers.results[9].picture.large}">
        <div class="name">
            ${customers.results[9].name.title}
            ${customers.results[9].name.first}
            ${customers.results[9].name.last}
        </div>
       <div class="emails">
            ${customers.results[9].email}
       </div>
       <div class="street1">
            ${customers.results[9].location.street}
       </div> 
       <div class="citystate1">
            ${customers.results[9].location.city}
            ${customers.results[9].location.state}  
            ${customers.results[9].location.postcode}
       </div>
        <div class="phone1"
            ${customers.results[9].phone}
        </div>
       <img src="${customers.results[10].picture.large}">
        <div class="name">
            ${customers.results[10].name.title}
            ${customers.results[10].name.first}
            ${customers.results[10].name.last}
        </div>
       <div class="emails">
            ${customers.results[10].email}
       </div>
       <div class="street1">
            ${customers.results[10].location.street}
       </div> 
       <div class="citystate1">
            ${customers.results[10].location.city}
            ${customers.results[10].location.state}  
            ${customers.results[10].location.postcode}
       </div>
        <div class="phone1"
            ${customers.results[10].phone}
        </div>

       <img src="${customers.results[11].picture.large}">
        <div class="name">
            ${customers.results[11].name.title}
            ${customers.results[11].name.first}
            ${customers.results[11].name.last}
        </div>
       <div class="emails">
            ${customers.results[11].email}
       </div>
       <div class="street1">
            ${customers.results[11].location.street}
       </div> 
       <div class="citystate1">
            ${customers.results[11].location.city}
            ${customers.results[11].location.state}  
            ${customers.results[11].location.postcode}
       </div>
        <div class="phone1"
            ${customers.results[11].phone}
        </div>
       
    </div>
    
    
`;







document.querySelector('.container').innerHTML = template
