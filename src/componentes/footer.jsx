import { InstagramOutlined, TwitterOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';
import Logo from '../assets/img/aceite-esencial.png'
import './footer.scss'

function Footer(){
    return(
        <div className="footer">
            <div className="contenedorFooter">
                <div className="enlaces">
                    <a href=""> Nosotros </a>
                    <a href=""> Necesitas Ayuda? </a>
                    <a href=""> Guia de uso </a>
                    <a href=""> Trabaja con nosotros </a>
                    <a href=""> Contacto </a>
                </div>
                <div className="redes">
                    <a href="https://twitter.com/" target="_blank"> <InstagramOutlined style={{ fontSize: '20px'}} /> </a>
                    <a href="https://www.facebook.com" target="_blank"> <FacebookOutlined style={{ fontSize: '20px'}} /> </a>
                    <a href="https://www.youtube.com"target="_blank" > <YoutubeOutlined style={{ fontSize: '20px'}} /> </a>
                    <a href="https://twitter.com/" target="_blank"> <TwitterOutlined style={{ fontSize: '20px'}} /> </a>
                </div>
            </div>
            <div className="by">
                <h2>© 2023 - <a href=""> Fausto Scarmato </a> </h2>
                <div className="logoFooter">
                    <a href='index.js'>
                        <img alt='logotipo' src={Logo}></img>
                        <p className='nombreBrandFooter'> BachShop </p>
                    </a>
                </div>
                <img src="https://i.ibb.co/Dt68MbH/visamastercard.png" alt="metodo-de-pago-visa-mastercard" />
            </div>
        </div>
    );
}

export default Footer;