
function getItems(){
    return new Promise((resolve,reject) =>{
        const object = [
            {
                id:'1',
                name:'Rolls',
                description:'Rolls de Salmon, Kanikama, Vegetarianos y muchos más',
                price:"$350",
                img_url:'https://sushiloujo.com.ar/resources/img/roll.jpg',
                img_description:'Sushi-rolls',
                stock:10
            },
            {
                id:'2',
                name:'Makis',
                description:'Makis de Salmon, Kanikama, Vegetarianos y muchos más',
                price:"$400",
                img_url:'https://sushiloujo.com.ar/resources/img/maki-veggie.jpg',
                img_description:'Sushi-maki',
                stock:12
            },
            {
                id:'3',
                name:'Hot Rolls',
                description:'Hot Rolls de Salmon, Kanikama, Vegetarianos y muchos más',
                price:"$500",
                img_url:'https://sushiloujo.com.ar/resources/img/hot-roll.jpg',
                img_description:'Sushi-Hot-Roll',
                stock:10
            },
        ]
        setTimeout(() => resolve(object), 3000)
    })
}




export default getItems;