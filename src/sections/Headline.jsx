import React from 'react'
import Card from '../components/HeadlineCards/Card/Card'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <Card 
            title={"Sun's Out, BOGO's Out"} 
            description={"Through 8/26"} 
            img={"https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
        />
        <Card 
            title={"New Restaurants"} 
            description={"Added Daily"} 
            img={"https://images.pexels.com/photos/5908229/pexels-photo-5908229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}  
        />
        <Card 
            title={"We Delivered Desserts Too"} 
            description={"tasty Treats"} 
            img={"https://images.pexels.com/photos/6249501/pexels-photo-6249501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}  
        />
    </div>
  )
}

export default HeadlineCards