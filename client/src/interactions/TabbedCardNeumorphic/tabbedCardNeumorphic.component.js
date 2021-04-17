//Basics
import React, { useState } from "react";

//Styles
import { Row, Underline, Button, Content, Card, Tab, Image } from "./tabbedCardNeumorphic.styles";


import mongoSVG from 'assets/Logos/mongodb.svg';
import nodeSVG from 'assets/Logos/nodejs.svg';
import reactSVG from 'assets/Logos/react.svg';


// import {Row, Avatar, Name, Card, List} from './tabbedCard.styles';


export const tabs = ["Goal", "Challenge", "Stack"];
export const tabHeaders = ["Vibrant", "Pretty", "Awesome"];

//Code
export const Tabs = ({active, setActive}) => (
  <Row>
    <Underline active={active} />
    {tabs.map((tab, index) => (
      <Button active={active === index} onClick={() => setActive(index)}>
        {tab}
      </Button>
    ))}
  </Row>
);


export const TabbedCard = () => {
  const [active, setActive] = useState(0);

  return (
    <Card className="tabbedcard__container">
      <Content active={active} className="tabbedcard__content">
        <Tab className="tabbedcard__text--goal">
          This project was an effort to better understand human behaviour.
        </Tab>
        <Tab className="tabbedcard__text--challenge">
          The most challenging part is mapping the real complex cognitive
          problem into a functional code.
        </Tab>
        <Tab className="tabbedcard__text--stack">
          Server-Side:
          <div style={{ display: "flex", marginButtom: "1vw" }}>
            <Image src={reactSVG} />
            <Image src={nodeSVG} />
            <Image src={mongoSVG} />
          </div>
          Logic:
          <div style={{ display: "flex" }}>
            <Image src={reactSVG} />
            <Image src={nodeSVG} />
            <Image src={mongoSVG} />
          </div>
        </Tab>
      </Content>
      <Tabs
        active={active}
        setActive={setActive}
        className="tabbedcard__tabs"
      />
    </Card>
  );
};

export default TabbedCard;
// //Code
// const LazyLoadRow = ({ name, likes, background }) => (
//   <>
//     <Row isLoading>
//       <Avatar />
//       <Name />
//     </Row>
//     <LazyLoad height={56}>
//       <Row>
//         <Avatar style={{ background }}>
//           {name.split(" ", 2)[0].substring(0, 1)}
//           {name.split(" ", 2)[1].substring(0, 1)}
//         </Avatar>
//         <Name>{name}</Name>
//       </Row>
//     </LazyLoad>
//   </>
// );

// const LazyLoadCard = () => (
//   <Card>
//     <List>
//       <Row>
//         <Avatar style={{ background: "lightyellow", color: "black" }}>
//           AK
//           {/* {name} */}
//         </Avatar>
//         <Name>Aftofl Big5</Name>
//       </Row>
//       <Row>
//         <Avatar style={{ background: "pink", color: "black" }}>
//           JAMA
//           {/* {name} */}
//         </Avatar>
//         <Name>DR JAMA FelFel</Name>
//       </Row>
//       <Row>
//         <Avatar style={{ background: "lightblue", color: "black" }}>
//           PLPO
//           {/* {name} */}
//         </Avatar>
//         <Name>POLPO Nanaj</Name>
//       </Row>
//       {json.map((obj) => (
//         <LazyLoadRow key={obj.id} name={obj.name} background={obj.background} />
//       ))}
//     </List>
//   </Card>
// );



//Export
// export default LazyLoadCard;
