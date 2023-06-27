import React from 'react'
import Banner from './Banner'
import "./homescreen.css"
import Nav from './Nav'
import requests from './requests'
import Row from './Row'

export default function Homescreen() {
  return (
    <div className='homescreen'>
        <Nav />
        <Banner />
        <Row 
          title = 'TRENDING NOW'
          fetchUrl = {requests.fetchTrending}
          isLargeRow
          
        />
        <Row 
          title = 'NETFLIX ORIGINALS'
          fetchUrl = {requests.fetchNetflixOriginals}
        />
       
      
         
        <Row 
          title = 'TOP RATED'
          fetchUrl = {requests.fetchTopRated}
          
        />
        
        <Row 
          title = 'ACTION MOVIES'
          fetchUrl = {requests.fetchActionMovies}
         
          />
          
        <Row 
          title = 'COMEDY MOVIES'
          fetchUrl = {requests.fetchComedMovies}
      
        />
       
        <Row 
          title = 'HORROR MOVIES'
          fetchUrl = {requests.fetchHorrorMovies}
      
        />
        <Row 
          title = 'DOCUMENTARIES'
          fetchUrl = {requests.fetchDocumentaries}
      
         />
         
        {/* <Row 
          title = 'ROMANTIC MOVIES'
          fetchUrl = {requests.fetchRomanceMovies}
      
        /> */}
        
         
          
    </div>
  )
}
