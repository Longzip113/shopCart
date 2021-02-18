var initialState = [{
                        id: 1,
                        name : 'Iphone 11',
                        description: 'Sản phẩm VN/A',
                        image: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/2132584444.jpeg',
                        price: 650,
                        number: 10,
                        star: 3
                    },
                    {
                        id: 2,
                        name : 'Iphone 11 Pro',
                        description: 'Sản phẩm VN/A',
                        image: 'https://shopdunk.com/wp-content/uploads/2019/09/iP11Pro-2.jpg',
                        price: 1050,
                        number: 15,
                        star: 2
                    },
                    {
                        id: 3,
                        name : 'Iphone 11 Pro Max',
                        description: 'Sản phẩm VN/A',
                        image: 'https://24hstore.vn/images/products/2020/05/15/large/iphone-11-pro-max-grey.jpg',
                        price: 1250,
                        number: 5,
                        star: 5
                    }];

var myReducer = (state = initialState, action) => {
    switch(action.type){
        default: return state;
    }
}

export default myReducer; 