//Basics
import React, { useState } from "react";
//Libraries
import LazyLoad from "react-lazy-load";
//JSON
import json from './countryCodes.json';
//Components
import {Skeleton, SkeletonRow} from './countryPicker.styles';
//Styles
import {
  Dialog,
  List,
  Row,
  RowLazy,
  Flag,
  FlagContainer,
  Image,
  Card,
  Input,
  Placeholder,
  Avatar,
  Name,
} from "./countryPicker.styles";
// import LazyLoadRow from '../LazyCard/lazyCard.component';


//Code
export const getFlag = (code) => `https://countryflags.io/${code}/flat/64.png`;

export const CountryDialog = ({ open, setOpen, setCountry }) => (
  <Dialog open={open}>
    {json.map((country) => (
      <Row
        
        onClick={() => {
          setOpen(false);
          setCountry(country.name);
        }}
      >
        <Flag src={getFlag(country.code)} />
        <span>{country.name}</span>
      </Row>
    ))}
  </Dialog>
);

export const LazyLoadRow = ({ code, name, open, setOpen, setCountry }) => (
  <>
    {/* <RowLazy isLoading>
      <Avatar />
      <Name />
    </RowLazy> */}
    <SkeletonRow>
      <Skeleton width="40px" height="40px" margin="0 1rem 0 1rem" />
      <div>
        {/* <Skeleton width="130px" margin="0 0 0.6rem" /> */}
        <Skeleton width="80px" />
      </div>
    </SkeletonRow>

    <LazyLoad height={50}>
      <RowLazy
        onClick={() => {
          setOpen(false);
          setCountry(name);
        }}
      >
        {/* <Image style={{ background: `url(${getFlag(code)})` }} /> */}
        <FlagContainer>
          <Flag src={getFlag(code)} />
        </FlagContainer>
        <span>{name.substring(0, 15)}</span>
      </RowLazy>
    </LazyLoad>
  </>
);

export const CountryDialogLazy = ({ open, setOpen, setCountry }) => (
  <Dialog open={open}>
    <List>
      {json.map((country) => (
        <LazyLoadRow
          key={country.dial_code}
          code={country.code}
          name={country.name}
          open={open}
          setOpen={setOpen}
          setCountry={setCountry}
        />
      ))}
    </List>
  </Dialog>
);


const CountryPicker = () => {
  const [isOpen, setOpen] = useState(false);
  const [country, setCountry] = useState("");


  return (
    <Card>
      <CountryDialogLazy
        open={isOpen}
        setOpen={setOpen}
        setCountry={setCountry}
      />
      <Input onClick={() => setOpen(!isOpen)}>
        <Placeholder>{country === "" ? "Country" : country}</Placeholder>
      </Input>
    </Card>
  );
};



//Export
export default CountryPicker;
