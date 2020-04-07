import './index.scss'

import Swiper from 'swiper/js/swiper.min'
import 'swiper/css/swiper.min.css'
/*
*banner
*使用sweper
*/
!(function(){
        var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
        });
        
})()