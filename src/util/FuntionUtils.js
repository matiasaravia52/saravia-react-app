const products = [
    {
        "id": "1",
        "image": "https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_blanca_lisa.jpg",
        "category": "1",
        "description": "Remera blanca"
    },
    {
        "id": "2",
        "image": "https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_blanca_lisa.jpg",
        "category": "1",
        "description": "Remera blanca"
    },
    {
        "id": "3",
        "image": "https://i.pinimg.com/originals/1a/30/ba/1a30bafc0af4e1000c49f63170645926.jpg",
        "category": "2",
        "description": "Camisa Jean"
    },
    {
        "id": "4",
        "image": "https://media.istockphoto.com/photos/blue-jeans-isolated-with-clipping-path-picture-id600373506?k=20&m=600373506&s=612x612&w=0&h=Q401UVK7Y2IXjuEhR2xgO5xO9dMeFTh8_piDx_bndeo=",
        "category": "3",
        "description": "Jean Clasico"
    },
    {
        "id": "5",
        "image": "https://media.vogue.es/photos/5cc7367ffdc82261481fda65/master/w_2500,c_limit/pantalones_vaqueros_mom_jeans_goma_pull_bear_basico_armario_2019_7512.jpg",
        "category": "3",
        "description": "Jean Elastico"
    },
]

export const getFetch = new Promise((res, rej) => {
    let response = '200';

    if(response === '200') {
        setTimeout(() => res(products), 2000);
    } else {
        rej('400')
    }
});

export const getFetchOne = (id) => {
    console.log(id)
    return new Promise((res, rej) => {
        let response = '200';
    
        if(response === '200') {
            setTimeout(() => res(products.find(product => product.id == id)), 2000);
        } else {
            rej('400')
        }
    });
}

export const getFetchByCategory = (idCategory) => {
    console.log(idCategory)
    console.log(products)
    return new Promise((res, rej) => {
        let response = '200';
    
        if(response === '200') {
            setTimeout(() => {
                const elements = [];
                products.forEach(product => {
                    if (product.category === idCategory) {
                        elements.push(product);
                    }
                });
                res(elements);
            }, 2000);
        } else {
            rej('400')
        }
    });
}
