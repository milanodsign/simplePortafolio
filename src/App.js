import React, { useState, useEffect } from 'react';
import './assets/css/App.css';
import $ from 'jquery';

// img
import logoT from './assets/images/logo.png';
import search from './assets/images/Search-Icon.png';
import facebook from './assets/images/Facebook.png';
import twitter from './assets/images/Tweeter.png';
import dribble from './assets/images/Dribble.png';
import google from './assets/images/Google-.png';
import youtube from './assets/images/Youtube.png';
import blockIcon from './assets/images/Block-Icon.png';
import columnIcon from './assets/images/Column-Icon.png';
import { arrayExpression } from '@babel/types';



const idClient = 'HJd-nnk_NJEVTk72nIuuxITvuuCGJYpXUuENiZkIP4I'
const url = 'https://api.unsplash.com/photos/'
const urlSearch = 'https://api.unsplash.com/search/photos/'
const query = 'web branding app photografy'
var numPage = 1


function App() {

  const [photos, setPhotos] = useState([])
  const [searchPhoto, setSearchPhoto] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${urlSearch}?client_id=${idClient}&per_page=30&query=${query}&page=${numPage}`)
        .then(response => response.json())
        .then(json => setPhotos(json))
        .catch(error => console.log(error))
    }
    fetchData()
    console.log(photos.results)
  }, [])

  function showMore() {
    numPage++
    fetch(`${urlSearch}?client_id=${idClient}&per_page=30&query=${query}&page=${numPage}`)
      .then(response => response.json())
      .then(json => setPhotos(json))
      .catch(error => console.log(error))
  }

  function OpenMenuResponsive() {
    console.log('aja');
    $('.menuResponsive').addClass('active');
    $('.close, .menuResponsive ul').show();
    $('#inputSearch').removeClass('active');
  }
  function CloseMenuResponsive() {
    $('.menuResponsive').removeClass('active');
    $('.close, .menuResponsive ul').hide();
  }

  function fetchData() {
    $('.all').addClass('active');
    $('.branding').removeClass('active');
    $('.web').removeClass('active');
    $('.photografy').removeClass('active');
    $('.app').removeClass('active');
    console.log('aja');
    fetch(`${urlSearch}?client_id=${idClient}&per_page=30&page=${numPage}&query=${query}`)
      .then(response => response.json())
      .then(json => setPhotos(json))
      .catch(error => console.log(error))
  }
  function fetchBranding() {
    $('.all').removeClass('active');
    $('.branding').addClass('active');
    $('.web').removeClass('active');
    $('.photografy').removeClass('active');
    $('.app').removeClass('active');
    fetch(`${urlSearch}?client_id=${idClient}&per_page=30&query=branding`)
      .then(response => response.json())
      .then(json => setPhotos(json))
      .catch(error => console.log(error))
  }
  function fetchWeb() {
    $('.all').removeClass('active');
    $('.branding').removeClass('active');
    $('.web').addClass('active');
    $('.photografy').removeClass('active');
    $('.app').removeClass('active');
    fetch(`${urlSearch}?client_id=${idClient}&per_page=30&query=web`)
      .then(response => response.json())
      .then(json => setPhotos(json))
      .catch(error => console.log(error))
  }
  function fetchPhotografy() {
    $('.all').removeClass('active');
    $('.branding').removeClass('active');
    $('.web').removeClass('active');
    $('.photografy').addClass('active');
    $('.app').removeClass('active');
    fetch(`${urlSearch}?client_id=${idClient}&per_page=30&query=photografy`)
      .then(response => response.json())
      .then(json => setPhotos(json))
      .catch(error => console.log(error))
  }
  function fetchApp() {
    $('.all').removeClass('active');
    $('.branding').removeClass('active');
    $('.web').removeClass('active');
    $('.photografy').removeClass('active');
    $('.app').addClass('active');
    fetch(`${urlSearch}?client_id=${idClient}&per_page=30&query=app`)
      .then(response => response.json())
      .then(json => setPhotos(json))
      .catch(error => console.log(error))
  }
  function searchApp() {
    if ($('#inputSearch').hasClass('active')) {
      $('#inputSearch').removeClass('active');
      $('#inputSearch input').val('');
    }
    else {
      $('#inputSearch').addClass('active');
      $('#inputSearch input').focus();
    }
  }

  function handleChange(event) {
    setSearchPhoto(event.target.value);
    if (event.keyCode === 13) {
      handleSubmit();
    }
  }
  function handleSubmit(event) {
    $('#inputSearch').removeClass('active');
    $('#inputSearch input').val('');
    fetch(`${urlSearch}?client_id=${idClient}&per_page=30&query=${searchPhoto}`)
      .then(response => response.json())
      .then(json => setPhotos(json))
      .catch(error => console.log(error))
  }

  function columnView() {
    $('.portfolio').addClass('column')
  }
  function gridView() {
    $('.portfolio').removeClass('column')
  }

  function viewImg(value) {
    $('span.pics > div.' + value).addClass('active');
  }
  function CloseImg(value) {
    $('span.pics > div.' + value).removeClass('active');
  }
  function paralaxOn(value){
    $('#'+value+' span.parallax').addClass('active');
  }
  function paralaxOff(value){
    $('#'+value+' span.parallax').removeClass('active');
  }




  return (
    <div className="App">
      <div id="menuResponsive">
        <div className='menuResponsive'>
          <span className="close" onClick={CloseMenuResponsive}></span>
          <ul>
            <li>
              <span className='active all' onClick={fetchData}>All</span>
            </li>
            <li>
              <span className="branding" onClick={fetchBranding}>Branding</span>
            </li>
            <li>
              <span className="web" onClick={fetchWeb}>Web</span>
            </li>
            <li>
              <span className="photografy" onClick={fetchPhotografy}>Photografy</span>
            </li>
            <li>
              <span className="app" onClick={fetchApp}>App</span>
            </li>
          </ul>
        </div>
      </div>
      <header className="App-header">
        <div className='boxed'>
          <div className="logoTop">
            <img src={logoT} title="Search" />
          </div>
          <div className='menuNavigate'>
            <nav className="top-menu">
              <ul>
                <li>
                  <span className='active all' onClick={fetchData}>All</span>
                </li>
                <li>
                  <span className="branding" onClick={fetchBranding}>Branding</span>
                </li>
                <li>
                  <span className="web" onClick={fetchWeb}>Web</span>
                </li>
                <li>
                  <span className="photografy" onClick={fetchPhotografy}>Photografy</span>
                </li>
                <li>
                  <span className="app" onClick={fetchApp}>App</span>
                </li>
                <span>
                  <img src={search} onClick={searchApp} />
                </span>
                <span className="menu_on" onClick={OpenMenuResponsive}>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div id="inputSearch">
        <input type="text" placeholder="Enter Search" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>Search</button>
      </div>
      <div className="App-content">
        <div>
          <div>
            <h1>EXPLORE BEYOND HORIZON</h1>
            <h3>Magna mundi referrentur quo, no rebum dignissim qui.</h3>
            <h3>Per quodsi accusata id, agam labores.</h3>
            <div className="contentBtn">
              <button className="btnPortfolio btnWhite">VIEW OUR WORK</button>
            </div>
          </div>
        </div>
        <div>
          <div className="boxed1170">
            <div className="">
              <img id="blockGallery" src={blockIcon} onClick={gridView} />
              <img id="ColumnGallery" src={columnIcon} onClick={columnView} />
            </div>
            <div className="menuPortfolio">
              <nav className="top-menu">
                <ul>
                  <li>
                    <span className='active all' onClick={fetchData}>All</span>
                  </li>
                  <li>
                    <span className="branding" onClick={fetchBranding}>Branding</span>
                  </li>
                  <li>
                    <span className="web" onClick={fetchWeb}>Web</span>
                  </li>
                  <li>
                    <span className="photografy" onClick={fetchPhotografy}>Photografy</span>
                  </li>
                  <li>
                    <span className="app" onClick={fetchApp}>App</span>
                  </li>
                  <span className="menu_on" onClick={OpenMenuResponsive}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span onClick={searchApp}>
                    <img src={search} />
                  </span>
                </ul>
              </nav>
            </div>
            <div className="portfolio">
              {photos.results && photos.results.map(results => (
                <span className='pics' key={results.id} id={results.id}>
                  <div className={results.id}>
                    <span className="closeContImg" onClick={() => CloseImg(results.id)}></span>
                    <span>
                      <img src={results.urls.regular} key={results.id} />
                      <label><b>Category:</b> {results.tags[0].title}</label>
                      <label><b>Title:</b> {results.alt_description}</label>
                    </span>
                  </div>
                  <span className='parallax' onClick={() => viewImg(results.id)} onMouseLeave={()=>paralaxOff(results.id)}>
                    <span>
                      <span>
                        <label>{results.alt_description}</label>
                        <hr />
                        <label>{results.tags[0].title}</label>
                      </span>                      
                    </span>
                  </span>
                  <img src={results.urls.small} title={results.alt_description} key={results.id} onMouseEnter={()=>paralaxOn(results.id)} onClick={() => viewImg(results.id)} />
                </span>
              ))}
              {console.log(photos.results)}
            </div>
            <div className="">
              <div className="contentBtn">
                <button className="btnPortfolio btnPink" onClick={showMore}> Show Me More </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="App-footer">
        <div>
          <p className="tfooter">
            © 2016 - <span className="pink">Sneak</span> All Right Reserved
          </p>
          <div className="socialIconContent">
            <img src={facebook} />
            <img src={twitter} />
            <img src={dribble} />
            <img src={google} />
            <img src={youtube} />
          </div>
        </div>
      </footer>
    </div >
  );
}

export default App;
