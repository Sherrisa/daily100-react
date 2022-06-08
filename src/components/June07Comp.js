import React from 'react';
import { Image } from "react-bootstrap";
import chelanKinsley from "../assets/images/DSC04861.JPG";
import chelanBrooklyn from "../assets/images/DSC04902.JPG";
import chelanFishing from "../assets/images/DSC04906.JPG";
import zooBrooklyn from "../assets/images/DSC05048.JPG";
import zooJaxs from "../assets/images/DSC05074.JPG";

function June07() {
  return (
    <div>
        <Image fluid src={chelanKinsley} alt="Kinsley in Chelan" />
        <Image fluid src={chelanBrooklyn} alt="Brooklyn in Chelan" />
        <Image fluid src={chelanFishing} alt="Jaxs and Kinsley Fishing in Chelan" />
        <Image fluid src={zooBrooklyn} alt="Brooklyn on the Mosaic Lizard" />
        <Image fluid src={zooJaxs} alt="Jaxs at Woodland Park Zoo" />
    </div>
  )
}

export default June07