import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Button
} from "@material-tailwind/react";
import tax from "../images/tax.png"
export const CardComp = () => {
  return (
    <div className="flex space-x-20 items-center justify-center md:mx-5 md:flex-wrap flex-wrap">
      {/* Rate Service */}
      <Card className="w-64 my-20  shadow-xl transform hover:translate-y-2 hover:scale-x-125 hover:shadow-xl transition duration-300 ">
        <CardHeader color="red" className="relative h-8">
        <span></span>

        </CardHeader>
        <CardBody className="text-center flex items-center justify-center mx-auto space-x-4">
          <Typography variant="h5" className="mb-2">
            Rate Service
          </Typography>
          {/* image material ui */}
          {/* <img src={tax} alt="tax" className="w-full h-auto" /> */}
          {/* <Avatar className="mx-auto" src={tax} alt="tax" /> */}
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Button className="text-white mx-auto w-20 items-center justify-center shadow-[0_5px_0px_rgba(255,0,0,0.8)] active:shadow-none active:translate-y-5px" variant="contained" color="red" >
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
            </svg> */}
           <span className='-ml-1'> Enter</span>
          </Button>
        </CardFooter>
      </Card>
      {/* Rating Offring */}
      <Card className="w-64 my-20  shadow-xl transform hover:translate-y-2 hover:scale-x-125 hover:shadow-xl transition duration-300 ">
        <CardHeader color="red" className="relative h-8">
         <span></span>
        </CardHeader>
        <CardBody className="text-center flex items-center justify-center mx-auto space-x-4">
          <Typography variant="h5" className="mb-2">
           Rating Offring  
          </Typography>
          {/* image material ui */}
          {/* <img src={tax} alt="tax" className="w-full h-auto" /> */}
          <Avatar className="mx-auto" src={tax} alt="tax" />
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
        <Button className="text-white mx-auto w-20 items-center justify-center "  variant="contained" color="red" >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
            </svg>
          </Button>
        </CardFooter>
      </Card>
      {/* Rate Record */}
      <Card className="w-64 my-20    shadow-xl transform hover:translate-y-2 hover:scale-x-125 hover:shadow-xl transition duration-300 ">
        <CardHeader color="red" className="relative h-8">
        <span></span>
        </CardHeader>
        <CardBody className="text-center flex items-center justify-center mx-auto space-x-4">
          <Typography variant="h5" className="mb-2">
            Rate Record 
          </Typography>
          {/* image material ui */}
          {/* <img src={tax} alt="tax" className="w-full h-auto" /> */}
          <Avatar className="mx-auto" src={tax} alt="tax" />
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
        <Button className="text-white mx-auto w-20 items-center justify-center" variant="contained" color="red" >
            <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
            </svg>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
