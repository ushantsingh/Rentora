import React from 'react'
import Card from '../card/Card'
import "../houses/Houses.css"

import ski from "../../assets/ski.avif"
import ski1 from "../../assets/ski1.avif"
import ski2 from "../../assets/ski2.avif"
import room from "../../assets/room.jpg"
import room1 from "../../assets/room1.jpg"
import room2 from "../../assets/room2.jpg"
import farmhouse from "../../assets/farmhouse2.jpg"
import farmhouse1 from "../../assets/farmhouse1.jpg"
import farmhouse2 from "../../assets/farmhouse.jpg"
import huthouse from "../../assets/huthouse.jpg"
import huthouse1 from "../../assets/huthouse1.jpg"
import huthouse2 from "../../assets/huthouse2.jpg"
import old from "../../assets/old.avif"
import old1 from "../../assets/old2.avif"
import old2 from "../../assets/old3.avif"
import flat from "../../assets/roomhouse.avif"
import flat1 from "../../assets/roomhouse1.avif"
import flat2 from "../../assets/roomhouse3.avif"
import village from "../../assets/village1.avif"
import village1 from "../../assets/village2.avif"
import village2 from "../../assets/village3.avif"
import poolhouse from "../../assets/poolhouse.jpg"
import poolhouse2 from "../../assets/poolhouse2.jpg"

export const Trending = () => (
  <div id='houses'>
    <Card image1={ski} image2={ski1} image3={ski2} title={"1BHK flat in Manali"} price={"60,000"} />
  </div>
)

export const Rooms = () => (
  <div id='houses'>
    <Card image1={room} image2={room1} image3={room2} title={"1BHK flat in Jhansi"} price={"20,000"} />
  </div>
)

export const FarmHouses = () => (
  <div id='houses'>
    <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title={"1BHK Farmhouse in Lucknow"} price={"60,000"} />
  </div>
)

export const PoolHouses = () => (
  <div id='houses'>
    <Card image1={poolhouse} image2={poolhouse2} image3={poolhouse} title={"Luxury Pool House in Goa"} price={"100,000"} />
  </div>
)

export const TentHouses = () => (
  <div id='houses'>
    <Card image1={huthouse2} image2={huthouse} image3={huthouse1} title={"1BHK Hut house in Kasol"} price={"70,000"} />
  </div>
)

export const Cabins = () => (
  <div id='houses'>
    <Card image1={old} image2={old1} image3={old2} title={"1BHK house in Manali"} price={"60,000"} />
  </div>
)

export const Shops = () => (
  <div id='houses'>
    <Card image1={flat} image2={flat1} image3={flat2} title={"1BHK Modern Flat in Kanpur"} price={"30,000"} />
  </div>
)

export const ForestHouses = () => (
  <div id='houses'>
    <Card image1={village} image2={village1} image3={village2} title={"2BHK house in Jhansi"} price={"30,000"} />
  </div>
)
