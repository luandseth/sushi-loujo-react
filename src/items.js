const object = [
    {
        categoryId:'rolls',
        name:'Rolls',
        description:'Rolls de Salmon, Kanikama, Vegetarianos y muchos más',
        price:"$350",
        img_url:'https://sushiloujo.com.ar/resources/img/roll.jpg',
        img_description:'Sushi-rolls',
        stock:10,
    },
    {
        categoryId:'makis',
        name:'Makis',
        description:'Makis de Salmon, Kanikama, Vegetarianos y muchos más',
        price:"$400",
        img_url:'https://sushiloujo.com.ar/resources/img/maki-veggie.jpg',
        img_description:'Sushi-maki',
        stock:12,
    },
    {
        categoryId:'hotrolls',
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
        
        setTimeout(() => resolve(object), 2000)
    })
}

function getItem(categoryId){
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve(object[categoryId]), 2000)
    })
}




module.exports = {
    getItems: getItems,
    getItem: getItem,
};