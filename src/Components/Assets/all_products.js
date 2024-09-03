import image_1 from '../Assets/img-5.jpg'
import image_2 from '../Assets/img-6.jpg'
import image_3 from '../Assets/img-7.jpg'
import image_4 from '../Assets/img-8.jpg'
import image_5 from '../Assets/img-9.jpg'
import image_6 from '../Assets/img-10.jpg'
import image_7 from '../Assets/img-11.jpg'
import image_8 from '../Assets/img-12.jpg'
import image_9 from '../Assets/img-13.jpg'
import image_10 from '../Assets/img-14.jpg'
import image_11 from '../Assets/img-15.jpg'
import image_12 from '../Assets/img-16.jpg'
import image_13 from '../Assets/img-17.jpg';
import image_14 from '../Assets/img-18.jpg';
import image_15 from '../Assets/img-19.jpg';
import image_16 from '../Assets/img-2.jpg'
import image_17 from '../Assets/img-1.jpg';
import image_18 from '../Assets/img-3.jpg';
import image_19 from '../Assets/img-4.jpg';
import arrow from '../Assets/arrow-right.svg'
import { FaRegHeart } from 'react-icons/fa'







let all_products =[
    {
        id: 1,
        name: "Shirts",
        title: "Explore Now !",
        category:"Men",
        image: image_1,
        arrow: arrow,
        scroll_img:[
            image_1,
            image_10,
            image_12,
        ],
        heading:"Raven Shirt With Red Colored Design",
        
    },
    {
        id: 2,
        name: "Plain T-Shirts",
        title: "Explore Now !",
        category:"Men",
        image: image_2,
        arrow: arrow,
        heading:"Raven T-Shirt With Black Colored Design",
    },
    {
        id: 3,
        name: "Polo T-Shirts",
        title: "Explore Now !",
        category:"Men",
        image: image_3,
        arrow: arrow,
        heading:"Raven T-Shirt With Broun Colored Design",
    },
    {
        id: 4,
        name: " T-Shirts",
        title: "Explore Now !",
        category:"Men",
        image: image_4,
        arrow: arrow,
        heading:"Raven  T-Shirts With Gray Colored Design",
    },
    {
        id: 5,
        name: "Hoodies & Sweetsshirt",
        title: "Explore Now !",
        category:"Men",
        image: image_5,
        arrow: arrow,
        heading:"Raven Hoodies & Sweetsshirt With Green Colored Design",
    },
    {
        id: 6,
        name: "Jeans",
        title: "Explore Now !",
        category:"Men",
        image: image_6,
        arrow: arrow,
        heading:"Raven Jeans With Blue Colored Design",
    },
    {
        id: 7,
        name: "Activewear",
        title: "Explore Now !",
        category:"Men",
        image: image_7,
        arrow: arrow,
        heading:"Raven Activewear With Dark Blue Colored Design",
    },
    {
        id: 8,
        name: "Boxers",
        title: "Explore Now !",
        category:"Men",
        image: image_1,
        arrow: arrow,
        heading:"Raven Boxer With Wite Colored Design",
    },
    {
        id: 9,
        name:" Hoodies & Sweetsshirt",
        title: "Explore Now !",
        category:"Women",
        image:  image_8,
        arrow: arrow,
        heading:"Raven Sweetsshirt With Orange Colored Design",
    },
    {
        id: 10,
        name:"Coats & parkas",
        title: "Explore Now !",
        category:"Women",
        image: image_9,
        arrow: arrow,
        heading:"Raven Coats & parkas With Any Colored Design",
    },
    {
        id: 11,
        name:"Tees & T-shirt ",
        title: "Explore Now !",
        category:"Women",
        image: image_10,
        arrow: arrow,
        heading:"Raven T-Shirt With Any Colored Design",
    },
    {
        id: 12,
        name:"Boxers",
        title: "Explore Now !",
        category:"Women",
        image: image_11,
        arrow: arrow,
        heading:"Raven Boxers With Broun Colored Design",
    },
    {
        id:13,
        name:"Black Sweeatshirt With...",
        title:"Jhani's Brand",
        price:"$123.00",
        category:"Women",
        image:image_12,
        like:<FaRegHeart color='#807D7E'/>,
        heading:"Raven Sweeatshirt With Black Colored Design",
    },
    {
        id:14,
        name:"Black Sweeatshirt...",
        title:"Jhani's Brand",
        category:"Women",
        price:"$123.00",
        image:image_13,
        like:<FaRegHeart color='#807D7E'/>,
        heading:"Raven Shirt With Red Colored Design",
    },
    {
        id:15,
        name:"Black Sweeatshirt With...",
        title:"Jhani's Brand",
        category:"Women",
        price:"$123.00",
        image:image_14,
        like:<FaRegHeart color='#807D7E'/>,
        heading:"Raven Shirt With Red Colored Design",
    },
    {
        id:16,
        name:"Black Sweeatshirt With...",
        title:"Jhani's Brand",
        category:"Women",
        price:"$123.00",
        image:image_15,
        like:<FaRegHeart color='#807D7E'/>,
        heading:"Raven Shirt With Red Colored Design",
    },
    {
        id:17,
        image:image_16,
        category:"Combos",
        name:"Knitted Joggers",
        heading:"Raven Shirt With Red Colored Design",
    },
    {
        id:18,
        image:image_17,
        category:"Combos",
        name:"Full Sleeve",
        heading:"Raven Shirt With Red Colored Design",
    },
    {
        id:19,
        image:image_18,
        category:"Combos",
        name:"Active T-Shirts",
        heading:"Raven Shirt With Red Colored Design",
    },
    {
        id:20,
        image:image_19,
        category:"Combos",
        name:"Urban Shirts",
        heading:"Raven Shirt With Red Colored Design",
    },
    {
        id:21,
        image:image_16,
        category:"Combos",
        name:"Knitted Joggers",
        heading:"Raven Shirt With Red Colored Design",
    },
    {
        id:22,
        image:image_17,
        category:"Combos",
        name:"Full Sleeve",
        heading:"Raven Shirt With Red Colored Design",
    },
    {
        id:23,
        image:image_18,
        category:"Combos",
        name:"Active T-Shirts",
        heading:"Raven Shirt With Red Colored Design",
    },
    {
        id:24,
        image:image_19,
        category:"Combos",
        name:"Urban Shirts",
        heading:"Raven Shirt With Red Colored Design",
    },
    {
        id: 25,
        name: "Activewear",
        category:"joggers",
        image: image_7,
        heading:"Raven Shirt With Red Colored Design",
    },
    {
        id:26,
        image:image_6,
        category:"joggers",
        name:"Knitted Joggers",
        heading:"Raven Shirt With Red Colored Design",
    },
    
];
export default all_products;