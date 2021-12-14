const products = [
    {   id: 0,
        category:'rolls',
        name:'Rolls',
        description:'Rolls de Salmon, Kanikama, Vegetarianos y muchos más',
        price:"$350",
        img_url:'https://sushiloujo.com.ar/resources/img/roll.jpg',
        img_description:'Sushi-rolls',
        stock:2,
    },
    {
        id: 1,
        category:'makis',
        name:'Makis',
        description:'Makis de Salmon, Kanikama, Vegetarianos y muchos más',
        price:"$400",
        img_url:'https://sushiloujo.com.ar/resources/img/maki-veggie.jpg',
        img_description:'Sushi-maki',
        stock:12,
    },
    {
        id: 2,
        category:'hot-rolls',
        name:'Hot Rolls',
        description:'Hot Rolls de Salmon, Kanikama, Vegetarianos y muchos más',
        price:"$500",
        img_url:'https://sushiloujo.com.ar/resources/img/hot-roll.jpg',
        img_description:'Sushi-Hot-Roll',
        stock:10,
    },
]


function getItems(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve(products), 2000);
    })
}

function getItem(id){
    return new Promise((resolve,reject) =>{
        const product = products.find( product => product.id === parseInt(id));
        setTimeout(() => resolve(product), 1000);
    })
}

function getCategory(category){
    return new Promise((resolve,reject) =>{
        const product = products.filter(product => product === category)
        setTimeout(() => resolve(product),2000); 
    })
}


module.exports = {
    getItems: getItems,
    getItem: getItem,
    getCategory: getCategory,
};