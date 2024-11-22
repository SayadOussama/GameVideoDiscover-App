import React from "react";
//calling icons for what we need in the project in font awesome
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
//icons from metrial design library
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../Hooks/useGames";
import { HStack, Icon, IconButton, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

const PlatfromIconList = ({ platforms }: Props) => {
  //You Must Import that "{[key:string]:IconType}="
  // Important Key string Value Replace by Icon Type
  const iocnMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaXbox,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={"10px"}>
        {platforms.map((platform) => (
          <Icon
            onClick={() => console.log(platform)}
            key={platform.id}
            as={iocnMap[platform.slug]}
            color="gray.500"
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatfromIconList;
