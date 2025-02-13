import React from 'react'
const bg = '/people.jpg';

export default function Home() {
  return (
    <div
    className={`bg-cover bg-center bg-no-repeat h-[100vh] w-full`}
    style={{ backgroundImage: `url(${bg})` }}>
      Home
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quod laudantium dolor odit minima placeat, sit incidunt veritatis in tempora soluta dignissimos neque fugit similique aperiam ipsa rerum ea voluptatem!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quod laudantium dolor odit minima placeat, sit incidunt veritatis in tempora soluta dignissimos neque fugit similique aperiam ipsa rerum ea voluptatem!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quod laudantium dolor odit minima placeat, sit incidunt veritatis in tempora soluta dignissimos neque fugit similique aperiam ipsa rerum ea voluptatem!Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
  )
}
