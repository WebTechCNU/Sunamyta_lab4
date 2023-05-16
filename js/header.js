let ROOT_HEADER =document.getElementById('header'); 
class Header{
    render() {
    let out=`
           <div class='header-container'>
<div class='header-counter'>
🧺 
</div>
</div>`;
ROOT_HEADER.innerHTML=out;
}
}
let headerPage=new Header();
headerPage.render();