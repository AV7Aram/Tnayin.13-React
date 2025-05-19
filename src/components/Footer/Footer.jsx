import style from './Footer.module.css';
import { Foot } from '../Foot/Foot';
import { FooterContent } from '../FooterContent/FooterContent';
import paymentMethods from '../../assets/payment-methods-footer.svg';

export function Footer({ footerInfo, footerIcons, footerSpan, footerA }) {
    return (
        <footer className={[style.containerFluid, style.footer].join(' ')}>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.footerMenu}>
                        <ul>
                            {
                                footerInfo.map((foot, index) => {
                                    return (
                                        <Foot foot={foot} key={index}/>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <FooterContent footerIcons={footerIcons} footerSpan={footerSpan} footerA={footerA} />
                    <div className={style.colԼg12}>
                        <div className={style.copyright}>
                            <div className={style.paymentMethods}>
                                <img src={paymentMethods} alt="Payment Methods" />
                            </div>
                            © 2025 MobileCentre Art LLC.  All Rights Reserved. (AM)
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}