import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import {AppContext} from '../AppContext';
import {useState} from 'react';
import {images} from '../components/ProductData';

function MyApp({ Component, pageProps }: AppProps) {
  const [number, setNumber] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [imgCount, setImgCount] = useState<number>(0);
  const [image, setImage] = useState(images[0].fullsize)
  const [popUp, setPopUp] = useState(false);
  const [addItem, setAddItem] = useState(false);

  const ClickAdd = () => {
      if(!addItem) {
        setNumber(prev => prev + 1 )
      }
    }

  const ClickMinus = () => {
        if(!addItem) {
          setNumber(prev => prev === 0 ? 0 : prev-1)
        }
    }

  const ImagePopUp = () => {
      setPopUp(!popUp)
  }

  const toggleCart = () => {
    setCartOpen(!cartOpen);
}

  const value = {
    number,
    setNumber,
    menuOpen,
    setMenuOpen,
    cartOpen,
    setCartOpen,
    ClickAdd,
    ClickMinus,
    imgCount,
    setImgCount,
    image,
    setImage,
    popUp,
    setPopUp,
    ImagePopUp,
    addItem,
    setAddItem,
    toggleCart,
  }

  return (
    <AppContext.Provider 
      value={value}
    >
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
