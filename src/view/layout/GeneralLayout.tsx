import React from 'react';
import Header from 'src/view/layout/Header';
import Menu from 'src/view/layout/Menu';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RightSidebarMenu from "./RightSidebarMenu";

function GeneralLayout(props) {
  const match = useRouteMatch();
  const menuVisible = useSelector(
    layoutSelectors.selectMenuVisible,
  );

  return (
    <div className="flex h-full dark:bg-gray-600">
        <Menu url={match.url} />
      <div
        className={`${
          menuVisible ? 'hidden' : 'flex'
        } sm:flex md:flex lg:flex bg-gray-100 dark:bg-gray-600 flex-col flex-auto min-h-screen overflow-x-hidden`}
      >
        <Header />
        <div className="">{props.children}</div>
      </div>
      <RightSidebarMenu url={match.url} />
    </div>
  );
}

export default GeneralLayout;
