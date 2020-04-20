import React from "react";
import Main from "./categories/main";
import CategoryVehicles from "./categories/car/vehicles";
import RealStateCategory from "./categories/real-estate/realEstate";
import SingleItem from "./singleItem";
import ElectronicDevicesCategory from "./categories/electronic-devices/electronicDevices";
import HomeAndKitchenCategory from "./categories/home-and-kitchen/homeAndKitchen";
import ServiceCategory from "./categories/services/services";
import PersonalGoods from "./categories/personal-goods/personalGoods";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Entertainment from "./categories/entertainment/entertainment";
import SocialServices from "./categories/social-services/socialServices";
import Businesses from "./categories/businesses/businesses";
import Jobs from "./categories/jobs/jobs";
import BuyResidential from "./categories/real-estate/buyResidential";
import RentResidential from './categories/real-estate/rentResidential';
import BuyCommercialProperty from './categories/real-estate/buyCommercialProperty';
import RentCommercialProperty from './categories/real-estate/rentCommercialProperty'
import RealEstateServices from './categories/real-estate/realEstateServices'
import RentTemporary from './categories/real-estate/rentTemporary'
import BuyApartment from './categories/real-estate/buyApartment'
import BuyVilla from './categories/real-estate/buyVilla'
import BuyOldHouse from './categories/real-estate/buyOldHouse'
import RentApartment from './categories/real-estate/rentApartment'
export default function CenteredGrid() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          {/* shingle item */}
          <Route exact path="/item" component={SingleItem} />
          {/* main categories */}
          <Route exact path="/vehicles">
            <CategoryVehicles />
          </Route>
          <Route exact path="/real-estate">
            <RealStateCategory />
          </Route>
          <Route exact path="/electronic-devices">
            <ElectronicDevicesCategory />
          </Route>
          <Route exact path="/home-and-kitchen">
            <HomeAndKitchenCategory />
          </Route>
          <Route exact path="/services">
            <ServiceCategory />
          </Route>
          <Route exact path="/personal-goods">
            <PersonalGoods />
          </Route>
          <Route exact path="/entertainment">
            <Entertainment />
          </Route>
          <Route exact path="/social-services">
            <SocialServices />
          </Route>
          <Route exact path="/businesses">
            <Businesses />
          </Route>
          <Route exact path="/jobs">
            <Jobs />
          </Route>
          {/* real-estate category */}
          <Route exact path="/buy-residential">
            <BuyResidential />
          </Route>
          <Route exact path="/rent-residential">
            <RentResidential />
          </Route>
          <Route exact path="/buy-commercial-property">
            <BuyCommercialProperty />
          </Route>
          <Route exact path="/rent-commercial-property">
            <RentCommercialProperty />
          </Route>
          <Route exact path="/rent-temporary">
            <RentTemporary />
          </Route>
          <Route exact path="/real-estate-services">
            <RealEstateServices />
          </Route>
          {/* real-estate => buy-residential category */}
          <Route exact path="/buy-apartment">
            <BuyApartment />
          </Route>
          <Route exact path="/buy-villa">
            <BuyVilla />
          </Route>
          <Route exact path="/buy-old-house">
            <BuyOldHouse />
          </Route>
          {/*  */}
          <Route exact path="/rent-apartment">
            <RentApartment />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
