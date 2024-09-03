import img_1 from'../Assets/img-12.jpg'
import img_2 from'../Assets/img-14.jpg'
import img_3 from '../Assets/img-5.jpg'
import img_4 from '../Assets/img-6.jpg'
import arrow from '../Assets/arrow-right.svg'
import { FaRegHeart } from 'react-icons/fa'




let products = [
    {
        id: 1,
        name:"Hoodies & Sweetsshirt",
        category:'similar',
        title: "Explore Now !",
        image:img_1,
        arrow:arrow,
        price:"$123.00",
        like:<FaRegHeart color='#807D7E'/>,
    },
    {
        id: 2,
        name:"Coats & parkas",
        title: "Explore Now !",
        category:'similar',
        image:img_2,
        arrow:arrow,
        price:"$123.00",
        like:<FaRegHeart color='#807D7E'/>,
    },
    {
        id: 3,
        name: "Shirts",
        title: "Explore Now !",
        category:"similar",
        image: img_3,
        arrow: arrow,
        price:"$123.00",
        like:<FaRegHeart color='#807D7E'/>,
    },
    {
        id: 4,
        name: "Plain T-Shirts",
        title: "Explore Now !",
        category:"similar",
        image: img_4,
        arrow: arrow,
        price:"$123.00",
        like:<FaRegHeart color='#807D7E'/>,
    },
]
export default products