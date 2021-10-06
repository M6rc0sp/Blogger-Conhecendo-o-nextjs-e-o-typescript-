import { CardType } from "../../pages/Types";
import Date from '../date'
import Link from 'next/link'
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText
} from "./CardStyles";
import Tilt from "react-parallax-tilt";

export const Card = ({ href, title, date, abstract, imgUrl }: CardType) => {
  return (
    <Tilt>
      <Link href={href}>
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CardTextDate><Date dateString={date} /></CardTextDate>
          <CardTextTitle>
          {title}
          </CardTextTitle>
          <CardTextBody>
            {abstract}
          </CardTextBody>
        </CardTextWrapper>
        {/* <CardStatWrapper>
          <CardStats>
            <div>
              1<sup>m</sup>
            </div>
            <div>read</div>
          </CardStats> 
          <CardStats>
            <LinkText href="#">website</LinkText>
          </CardStats>
          <CardStats>
            <LinkText href="#">github</LinkText>
          </CardStats>
        </CardStatWrapper>*/}
      </CardWrapper>
      </Link>
    </Tilt>
  );
};
