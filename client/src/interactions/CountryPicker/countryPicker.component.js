//Basics
import React, { useState, useEffect } from "react";
//Libraries
import LazyLoad from "react-lazy-load";
//JSON
import countriesLoadedfromDisk from './countryCodes.json';
//Components
import InputMaterial from '../InputMaterial/inputMaterial.component';

import MaskedInput from '../InputMaterial/MaskedInput';
import {Skeleton, SkeletonRow} from './countryPicker.styles';

import InputDropDown from "interactions/InputDropDown/inputDropDown.component";
import { Textfit } from "react-textfit";


//Styles
import {
  Dialog,
  DropDown,
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
  Overlay,
  CountryName,
  CountryCode,
} from "./countryPicker.styles";
// import LazyLoadRow from '../LazyCard/lazyCard.component';


//Code
export const getFlag = (code) => {
  let ApiReadyCode = code.toLowerCase(); 
  // return `https://flagcdn.com/64x48/${ApiReadyCode}.png`;
  // return `https://flagcdn.com/h40/${ApiReadyCode}.png`;
  // return `https://flagcdn.com/${ApiReadyCode}.svg`;
  // return `https://flagcdn.com/w80/${ApiReadyCode}.png`;
  // return `https://flagcdn.com/h80/${ApiReadyCode}.png`;
  return `https://flagcdn.com/${ApiReadyCode}.svg`;
  // return `https://restcountries.eu/rest/v2/alpha/${ApiReadyCode}`;
};
export const getFlag2 = (code) => `https://countryflags.io/${code}/flat/64.png`;
export const getFlagNew = (code) => `https://flagcdn.com/64x48/za.png`;

// export const CountryDialog = ({ open, setOpen, setCountry }) => (
//   <Dialog open={open}>
//     {countriesLoadedfromDisk.map((country) => (
//       <Row
//         onClick={() => {
//           setOpen(false);
//           setCountry({ name: country.name, dialCode: country.dialCode, code: country.code,
//            } );
//         }}
//       >
//         <Flag src={getFlag(country.code)} />
//         <span>{country.name}</span>
//       </Row>
//     ))}
//   </Dialog>
// );
const handleVisible = (e) => {
  console.log("look ma I have been lazyloaded!");
  // var elementsArray = document.getElementsByClassName("is-visible");
  
  // for (let el of elementsArray) {
    // var elParent = el.parentNode;
    // var elSkel = elParent.getElementsByClassName("SkeletonRow")[0];
    // var elSkel = elParent.getElementsByClassName("SkeletonRow");
    // [].slice.call(elSkel).map((e) => console.log(e));
    // [...elSkel].map(e => console.log('wow this is skeleton ', e));
    // elSkel.style.display = "none";
  };
  
  // console.log(elementsArray);
  // element.classList.contains("myclass");
  // var element = document.getElementsById("SkeletonRow");
  // if (element) {element.style.display = "none";}
// };

export const LazyLoadRow = ({
  updateCustomerCountry,
  dialCode,
  code,
  name,
  open,
  setOpen,
  setCountry,
}) => {
  //  
  return (
  <>
    {/* Here is the loading section, Absolute positioned */}
    <SkeletonRow className="SkeletonRow">
      <Skeleton
        width="30px"
        height="30px"
        borderRadius="50%"
        margin="1rem 1rem 0 2rem"
      />
      <div>
        {/* <Skeleton width="130px" margin="0 0 0.6rem" /> */}
        <Skeleton margin="1rem 0 0 .5rem" width="80px" />
      </div>
    </SkeletonRow>
    {/* Here is the loaded section, Relative positioned */}
    <LazyLoad
      className="LazyLoad"
      height={50}
      // onContentVisible={() => console.log("look ma I have been lazyloaded!")}
      onContentVisible={handleVisible}
    >
      <RowLazy
        className="RowLazy"
        onClick={() => {
          setOpen(false);
          setCountry(name);
          updateCustomerCountry({ name, dialCode, code });
        }}
      >
        {/* <Image style={{ background: `url(${getFlag(code)})` }} /> */}
        <FlagContainer>
          <Flag src={getFlag(code)} />
        </FlagContainer>

        <CountryName>
          {/* {name.length >= 15 ? name.substring(0, 15) + " . . ." : name} */}
          <Textfit mode="single" forceSingleModeWidth={true} max={"12"}>
            {name.split(',')[0]}
            {/* {name.length >= 15 ? name.substring(0, 15) + " . . ." : name} */}
          </Textfit>
        </CountryName>
        <CountryCode>{code}</CountryCode>
      </RowLazy>
    </LazyLoad>
  </>
)};

export const HashGenerator = (key) => {
  let hash = 0;
  if (key) {
      for (let i = 0; i < key.length; i++) {
        hash = Math.floor(hash + key.charCodeAt(i) * 10*i) + Math.floor(Math.random() * (10000 - 10 + 1)) + 10;
        hash = Math.floor(hash + Math.floor(Math.random() * (10000 - 10 + 1)) + 10 )
      }
    }
    return hash;
};

export const CountryDialogLazy = ({ open, setOpen, setCountry, updateCustomerCountry }) => (
  <>
    <Overlay isOpen={open} onClick={() => setOpen(false)} />
    {/* <DropDown /> */}
    <Dialog open={open}>
      <List>
        {countriesLoadedfromDisk.map((country) => (
          <LazyLoadRow
            key={country.dial_code}
            dialCode={country.dial_code}
            code={country.code}
            name={country.name}
            open={open}
            setOpen={setOpen}
            setCountry={setCountry}
            updateCustomerCountry={updateCustomerCountry}
          />
        ))}
      </List>
    </Dialog>
  </>
);


const CountryPicker = ({ customerCountry, updateCustomerCountry, grid }) => {
  const [isOpen, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  
  // useEffect(() => {}, [country]);

  return (
    <Card grid>
      <CountryDialogLazy
        open={isOpen}
        setOpen={setOpen}
        setCountry={setCountry}
        updateCustomerCountry={updateCustomerCountry}
      />
      {/* <MaskedInput /> */}
      <InputDropDown country={country} setOpen={setOpen} isOpen={isOpen}/>
      {/* <Input onClick={() => setOpen(!isOpen)}>
        <Placeholder>{country === "" ? "Country" : country}</Placeholder>
      </Input> */}
    </Card>
  );
};



//Export
export default CountryPicker;
