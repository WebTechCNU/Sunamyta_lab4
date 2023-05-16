let arr = {
    "11":{
        name: "book1",
        link:"book/new.jpg",
        description: "Сила волі",
        price:"500₴",
    }}
    let out='';
    for(let key in arr) {
        out += "<div id='div-row' class='col-sm-4'><img alt='' src='" +arr[key].link +
        "' class='img-thumbnail img-fluid hoverable'title='" +arr[key].name + 
        "'><p class='description'>"+ arr[key].description+"</p><p class='price'>"+arr[key].price+
        "</p><button class='r'>В кошик</button></div>";
    }
    document.getElementById('out').innerHTML=out;