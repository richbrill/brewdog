import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadBeers } from './containers/Beers/actions';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SwipeableViews from 'react-swipeable-views';
import { FaMugHot, FaRegCircle, FaSearch } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import Beers from './containers/Beers';
import { selectAllBeers, selectPizzaBeers, selectSteakBeers, selectLoading, selectError } from './containers/Beers/selectors';
import Basket from './containers/Basket';
import { addItem } from './containers/Basket/actions';

// TODO make it DRYer (if possible)
const App = () => {
  const [ drawerOpen, setDrawerOpen ] = useState(false);
  const [ childIndex, setChildIndex ] = useState(0);
  const allBeers = useSelector(selectAllBeers);
  const pizzaBeers = useSelector(selectPizzaBeers);
  const steakBeers = useSelector(selectSteakBeers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO refactor these dispatches into each of the tab views (so they lazy load independently) ideally if they lived in separate components
    dispatch(loadBeers());
    dispatch(loadBeers('pizza'));
    dispatch(loadBeers('steak'));
  }, []);

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleChange = (index) => {
    setChildIndex(index);
  };

  const handleChangeChildIndex = index => {
    setChildIndex(index);
  };

  return (
    <Fragment>
      <h1>Brewdog app</h1>
      <Tabs forceRenderTabPanel defaultIndex={0}>
        <TabList className="main-tabs">
          <Tab><FaMugHot /></Tab>
          <Tab><GiKnifeFork /></Tab>
          <Tab><FaRegCircle /></Tab>
          <Tab><FaSearch /></Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel selectedIndex={childIndex} onSelect={handleChange}>
            <TabList className="child-tabs">
              <Tab>ALL</Tab>
              <Tab>PIZZA</Tab>
              <Tab>STEAK</Tab>
            </TabList>
            <SwipeableViews index={childIndex} onChangeIndex={handleChangeChildIndex}>
              <TabPanel className="overflow">
                <Beers beers={allBeers} onSubmit={beer => dispatch(addItem(beer))} />
              </TabPanel>
              <TabPanel className="overflow">
                <Beers beers={pizzaBeers} onSubmit={beer => dispatch(addItem(beer))} />
              </TabPanel>
              <TabPanel className="overflow">
                <Beers beers={steakBeers} onSubmit={beer => dispatch(addItem(beer))} />
              </TabPanel>
            </SwipeableViews>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList className="child-tabs">
              <Tab>Extras</Tab>
            </TabList>
            <SwipeableViews>
              <TabPanel>
                Extras
              </TabPanel>
            </SwipeableViews>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList className="child-tabs">
              <Tab>Stuff</Tab>
            </TabList>
            <SwipeableViews>
              <TabPanel>
                Stuff
              </TabPanel>
            </SwipeableViews>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList className="child-tabs">
              <Tab>Search</Tab>
            </TabList>
            <SwipeableViews>
              <TabPanel>
                Search
              </TabPanel>
            </SwipeableViews>
          </Tabs>
        </TabPanel>
      </Tabs>
      <Basket anchor="bottom" open={drawerOpen} onClose={toggleDrawer(false)} >
          Drawer stuff bla bla<br />
          nmorefgwhgferui
      </Basket>
    </Fragment>
  )
}

export default App

