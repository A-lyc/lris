import './index.scss';
import webmap from 'jason-webmap'

webmap({
  // 激活 map 的按钮选择器
  openSelector: 'a[open-map="webmap"]',
  // 跟随者 map 一同移动的内容选择器
  moveSelector: '.comp-root'
})