import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
// import {GlobalStyle1} from '../../static/iconfont/iconfont'
class Header extends Component {
  render() {
    return (
      <div>
        {/* <GlobalStyle1 /> */}
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className="left active"> 首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登陆</NavItem>
            <NavItem className="right">
              {/* <span className="iconfont iconxxx"></span> */}
              Aa1
            </NavItem>
            <SearchWrapper>
              <NavSearch></NavSearch>
            </SearchWrapper>
          </Nav>
          <Addition>

            <Button className="writting">写文章</Button>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }
}

export default Header