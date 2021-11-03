import bcrypt from 'bcryptjs';
const data = {
    users:[
        {
            name:'KHANH',
            email:'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'John',
            email:'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            
            name: 'Ao so mi',
            category: 'Shirts',
            image: '/images/product1.png',
            price: 120,
            countInStock: 0,
            brand: 'Ao',
            rating: 5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            
            name: 'Ao so mi',
            category: 'Shirts',
            image: '/images/product1.png',
            price: 120,
            countInStock: 5,
            brand: 'Ao',
            rating: 5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            
            name: 'Ao so mi',
            category: 'Shirts',
            image: '/images/product1.png',
            price: 120,
            countInStock: 8,
            brand: 'Ao',
            rating: 5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            
            name: 'Ao so mi',
            category: 'Shirts',
            image: '/images/product1.png',
            price: 120,
            countInStock: 10,
            brand: 'Ao',
            rating: 5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            
            name: 'Ao so mi',
            category: 'Shirts',
            image: '/images/product1.png',
            price: 120,
            countInStock: 10,
            brand: 'Ao',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            
            name: 'Ao so mi',
            category: 'Shirts',
            image: '/images/product1.png',
            price: 120,
            countInStock: 10,
            brand: 'Ao',
            rating: 4,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            
            name: 'Ao so mi',
            category: 'Shirts',
            image: '/images/product1.png',
            price: 120,
            countInStock: 10,
            brand: 'Ao',
            rating: 5,
            numReviews: 10,
            description: 'high quality product',
        },
    ],
};

export default data 