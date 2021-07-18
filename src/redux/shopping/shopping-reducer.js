import * as actionTypes from './shopping-types';
const INITIAL_STATE = {
    products: [{
            id: 1,
            src: './image/laravel-projects-2.png',
            price: 43,
            titelcource: 'Laravel project-oriented training',
            deccripecource: 'One make creepeth man bearing their one firmament won',
            timer: '12:23:05',
            countlike: '67',
            srcteacher: './image/xauthor3.png.pagespeed.ic.JqBWNrvoU0.png',
            count: 56,
            titelcource2: 'Complete Laravel project-oriented training',
            image: './image/css-grid-tutorial.jpg',
            countuserr: 63,
            statess: 'compeleted',
            timercource: '12:34:09',
            countjalese: 9,
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae impedit natus quo earum perspiciatis nam quia voluptate ex voluptas quisquam saepe et, eum omnis culpa dignissimos soluta. Hic, perspiciatis maxime.'
        },
        {
            id: 2,
            src: './image/php-security-2 (1).png',
            price: 143,
            titelcource: 'course php',
            deccripecource: 'One make creepeth man bearing their one firmament won',
            timer: '11:23:05',
            countlike: '167',
            srcteacher: './image/xauthor3.png.pagespeed.ic.JqBWNrvoU0.png',
            count: 86,
            titelcource2: 'Complete  php ',
            image: './image/css-grid-tutorial.jpg',
            countuserr: 96,
            statess: 'compeleted',
            timercource: '11:34:09',
            countjalese: 8,
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae impedit natus quo earum perspiciatis nam quia voluptate ex voluptas quisquam saepe et, eum omnis culpa dignissimos soluta. Hic, perspiciatis maxime.'
        },
        {
            id: 3,
            src: './image/react-2.png',
            price: 113,
            titelcource: 'course React',
            deccripecource: 'One make creepeth man bearing their one firmament won',
            timer: '10:23:05',
            countlike: '127',
            srcteacher: './image/xauthor3.png.pagespeed.ic.JqBWNrvoU0.png',
            count: 26,
            titelcource2: 'Complete  react',
            image: './image/css-grid-tutorial.jpg',
            countuserr: 76,
            statess: 'compeleted',
            timercource: '9:34:09',
            countjalese: 19,
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae impedit natus quo earum perspiciatis nam quia voluptate ex voluptas quisquam saepe et, eum omnis culpa dignissimos soluta. Hic, perspiciatis maxime.'
        },
        {
            id: 4,
            src: './image/css-2.png',
            price: 153,
            titelcource: 'course css',
            deccripecource: 'One make creepeth man bearing their one firmament won',
            timer: '2:23:05',
            countlike: '97',
            srcteacher: './image/xauthor3.png.pagespeed.ic.JqBWNrvoU0.png',
            count: 36,
            titelcource2: 'Complete css grid tutorial',
            image: './image/css-grid-tutorial.jpg',
            countuserr: 46,
            statess: 'compeleted',
            timercource: '2:34:09',
            countjalese: 5,
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae impedit natus quo earum perspiciatis nam quia voluptate ex voluptas quisquam saepe et, eum omnis culpa dignissimos soluta. Hic, perspiciatis maxime.'
        },
        {
            id: 5,
            src: './image/next.png',
            price: 113,
            titelcource: 'course next-js',
            deccripecource: 'One make creepeth man bearing their one firmament won',
            timer: '7:23:05',
            countlike: '56',
            srcteacher: './image/xauthor3.png.pagespeed.ic.JqBWNrvoU0.png',
            count: 26,
            titelcource2: 'Complete next-js',
            image: './image/css-grid-tutorial.jpg',
            countuserr: 56,
            statess: 'compeleted',
            timercource: '5:34:09',
            countjalese: 15,
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae impedit natus quo earum perspiciatis nam quia voluptate ex voluptas quisquam saepe et, eum omnis culpa dignissimos soluta. Hic, perspiciatis maxime.'
        },
        {
            id: 6,
            src: './image/typescript.png',
            price: 63,
            titelcource: 'course Typescript',
            deccripecource: 'One make creepeth man bearing their one firmament won',
            timer: '1:23:05',
            countlike: '17',
            srcteacher: './image/xauthor3.png.pagespeed.ic.JqBWNrvoU0.png',
            count: 76,
            titelcource2: 'Complete typescript',
            image: './image/css-grid-tutorial.jpg',
            countuserr: 126,
            statess: 'compeleted',
            timercource: '15:34:09',
            countjalese: 19,
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae impedit natus quo earum perspiciatis nam quia voluptate ex voluptas quisquam saepe et, eum omnis culpa dignissimos soluta. Hic, perspiciatis maxime.'
        },
        {
            id: 7,
            src: './image/css-2.png',
            price: 108,
            titelcource: 'course css',
            deccripecource: 'One make creepeth man bearing their one firmament won',
            timer: '6:23:05',
            countlike: '47',
            srcteacher: './image/xauthor3.png.pagespeed.ic.JqBWNrvoU0.png',
            count: 57,
            titelcource2: 'Complete css grid tutorial',
            image: './image/css-grid-tutorial.jpg',
            countuserr: 66,
            statess: 'compeleted',
            timercource: '2:34:09',
            countjalese: 9,
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae impedit natus quo earum perspiciatis nam quia voluptate ex voluptas quisquam saepe et, eum omnis culpa dignissimos soluta. Hic, perspiciatis maxime.'
        },
        {
            id: 8,
            src: './image/angular.png',
            price: 143,
            titelcource: 'course angular',
            deccripecource: 'One make creepeth man bearing their one firmament won',
            timer: '5:23:05',
            countlike: '167',
            srcteacher: './image/xauthor3.png.pagespeed.ic.JqBWNrvoU0.png',
            count: 16,
            titelcource2: 'Complete  Angular',
            image: './image/css-grid-tutorial.jpg',
            countuserr: 16,
            statess: 'compeleted',
            timercource: '16:34:09',
            countjalese: 12,
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae impedit natus quo earum perspiciatis nam quia voluptate ex voluptas quisquam saepe et, eum omnis culpa dignissimos soluta. Hic, perspiciatis maxime.'
        },
        {
            id: 9,
            src: './image/typescript.png',
            price: 53,
            titelcource: 'course Typescript',
            deccripecource: 'One make creepeth man bearing their one firmament won',
            timer: '4:23:05',
            countlike: '167',
            srcteacher: './image/xauthor3.png.pagespeed.ic.JqBWNrvoU0.png',
            count: 56,
            titelcource2: 'Complete typescript',
            image: './image/css-grid-tutorial.jpg',
            countuserr: 6,
            statess: 'compeleted',
            timercource: '2:34:09',
            countjalese: 4,
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae impedit natus quo earum perspiciatis nam quia voluptate ex voluptas quisquam saepe et, eum omnis culpa dignissimos soluta. Hic, perspiciatis maxime.'
        }
    ],
    cart: [],
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // Great Item data from products array
            const item = state.products.find(
                (product) => product.id === action.payload.id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart ?
                    state.cart.map((item) =>
                        item.id === action.payload.id ? {...item, qty: item.qty + 1 } :
                        item
                    ) : [...state.cart, {...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case actionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id ? {...item, qty: +action.payload.qty } :
                    item
                ),
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer