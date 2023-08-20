import React, { useEffect, useState } from 'react';
import {data} from "../data/data";

import Card from "../components/Menu/MenuCard/Card";
import FilterButton from '../components/Menu/Buttons/FilterButton';
import { CalculatePrice } from '../util/CalculatePrice';

const Filter = () => {

    const [foods, setFoods] = useState(data);
    const [categoryName, setCategoryName] = useState("All");
    const [price, setPrice] = useState("All");

    // Filter By Category
    const filterByType = (category) => {
        setCategoryName(category);
    }

    // Filter By Price
    const filterByPrice = (priceRange) => {
        setPrice(priceRange);
    }

    // category filter 
    useEffect(() => {
            if(categoryName === "All") {
                setFoods(data.filter((item) => {
                    return CalculatePrice(price, item.price);
                }))
            } else if(categoryName === "All" && price === "All") {
                setFoods(data);
            } else if(categoryName !== "All" || price !== "All") {
                const categoryData = data.filter((item) => {
                    return (item.category === (categoryName.toLowerCase()) && CalculatePrice(price, item.price))
                });

                setFoods(categoryData);
            }   
    }, [categoryName, price])


  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-start lg:justify-between flex-wrap'>
                    <FilterButton newActivation={categoryName} onClick={filterByType}>All</FilterButton>
                    <FilterButton newActivation={categoryName} onClick={filterByType}>Burger</FilterButton>
                    <FilterButton newActivation={categoryName} onClick={filterByType}>Pizza</FilterButton>
                    <FilterButton newActivation={categoryName} onClick={filterByType}>Salad</FilterButton>
                    <FilterButton newActivation={categoryName} onClick={filterByType}>Chicken</FilterButton>
                </div>
            </div>
            {/* Filter Price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-start lg:justify-between max-w-[400px] w-full'>
                    <FilterButton newActivation={price} onClick={filterByPrice}>All</FilterButton>
                    <FilterButton newActivation={price} onClick={filterByPrice}>Low</FilterButton>
                    <FilterButton newActivation={price} onClick={filterByPrice}>Medium</FilterButton>
                    <FilterButton newActivation={price} onClick={filterByPrice}>Expensive</FilterButton>
                </div>
            </div>
        </div>


        {/* Display Images */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {
                foods.map((item, index) => (
                    <Card key={index} name={item.name} price={item.price} image={item.image} id={index} />
                ))
            }
        </div>
    </div>
  )
}

export default Filter