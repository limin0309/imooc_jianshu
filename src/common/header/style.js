import styled from 'styled-components';
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  height:58px;
  border-bottom:1px solid #F0F0F0;
  `
export const Logo = styled.a.attrs({
  href: "/"   // 点击简书logo调到主页  
})`
  position:absolute;
  top:0;
  left:0;
  display:block; // a标签需要设置宽高 设置为block
  height:56px;
  width:100px;
  background:url(${logoPic}); // 引入图片
  background-size:contain;
`
export const Nav = styled.div`
  width:960px;
  height:100%;
  margin:0 auto;
  padding-right:70px;
  box-sizing:border-box;
`
export const NavItem = styled.div`
line-height:56px;
padding:0 15px;
font-size:17px;
color:#333;
  &.left{ // 如果当前是NavItem组件 同时NavItem组件有left，那么向左浮动
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`

export const SearchWrapper = styled.div` 
  float:left;// 需要让其浮动。因为其他的item已经浮动，不加浮动样式会影响到整个Nav
  position:relative;
  iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    // border-radius:15px;
    text-align:center;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:240px;
  height:38px;
  margin-top:9px;// 56-38=18/2=9
  margin-left:20px;
  padding:0 20px;
  box-sizing:border-box;// box-sizing https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing
  border:none;
  outline:none;
  border-radius:19px;// https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius
  background:#eee;
  font-size:14px;
  &:placeholder{
    color:#999;
  }
`

export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
`

export const Button = styled.div`
  float:right;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  fonnt-size:14px;
  &.reg{
    color:#ec6149
  }
  &.writting{
    color:#fff;
    background:#ec6149;
  }
`

