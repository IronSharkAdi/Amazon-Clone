import React from 'react'
import './home.css'
import Product from '../components/Product'


// title , image , price , rating

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                
                <img className="home__image" src="http://wap.tigo.com.hn/sites/tigowebcorp.hn/files/amazon-prime-banner-junio2020.png" alt=""/>  {/*the Amazon Banner */}

                <div className="home__row">     {/* First row with 2 columns */}
                <Product id="1111" title="Head First Java" image="https://kbimages1-a.akamaihd.net/3e0d975f-67ab-462a-89b2-c50c5c70632a/1200/1200/False/head-first-php-mysql.jpg" price={5} rating={3} />
                <Product id="1112" title="Head First Python" image="https://cf.shopee.com.my/file/dc88260c3ae67180c2cb1fa8162823c5" price={6} rating={4} />
                </div>
                <div className="home__row">      {/* First row with 3 columns */}
                <Product id="1113" title="Apple Watch" image="https://www.startech.com.bd/image/cache/catalog/smart-watch/apple/series-6/series-6-500x500.jpg" price={40} rating={5} />
                <Product id="1114" title="Macbook" image="https://zdnet4.cbsistatic.com/hub/i/r/2020/11/16/37e33024-2892-4bb7-9d21-6ac6f7544def/thumbnail/770x433/5f1b7f881bfb80a9f2bbe02bc6d64b49/apple-macbook-pro-m1-2020-5.jpg" price={100} rating={5} />
                <Product id="1116" title="Apple Desktop" image="https://cdn.vox-cdn.com/thumbor/t-lI9dfnzfxIl_XJrihE8L2Ykho=/0x0:1020x680/1400x1050/filters:focal(394x217:556x379):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/52370901/apple-imac-0130.0.0.0.jpeg" price={100} rating={5} />
                </div>
                <div className="home__row">    {/* First row with 1 columns */}
                <Product id="1115" title="Monitor" image="https://cdn.mos.cms.futurecdn.net/TDeiGtdHdVXNCVd53oNF8i-1200-80.jpg" price={70} rating={3} />
                </div>
            </div>
        </div>
    )
}

export default Home
