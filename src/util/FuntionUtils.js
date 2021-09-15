export const getFetch = new Promise((res, rej) => {
    let response = '200';

    const products = [
        {
            "id": "1",
            "image": "https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_blanca_lisa.jpg",
            "description": "Remera blanca"
        },
        {
            "id": "2",
            "image": "https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_blanca_lisa.jpg",
            "description": "Remera blanca"
        },
        {
            "id": "2",
            "image": "https://i.pinimg.com/originals/1a/30/ba/1a30bafc0af4e1000c49f63170645926.jpg",
            "description": "Camisa Jean"
        }
    ]
    
    if(response === '200') {
        setTimeout(() => res(products), 2000);
    } else {
        rej('400')
    }
})