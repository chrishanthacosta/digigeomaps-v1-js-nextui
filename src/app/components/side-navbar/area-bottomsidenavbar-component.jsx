"use client";

import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";

import { useDispatch, useSelector } from "react-redux";
import { setIsAreaSideNavOpen } from "../../../store/map-selector/map-selector-slice";
import { useRouter } from "next/navigation";

const AreaBottomSideNavbar = () => {
 const isAreaSideNavOpen = useSelector(
    (state) => state.mapSelectorReducer.isAreaSideNavOpen
  );
  

  let pathname = "";
  const dispatch = useDispatch();
  const router = useRouter();
  try {
    pathname = window.location.href;
  } catch (error) {}

  if (pathname) {
    const r = pathname.indexOf("/", 9);
    if (r !== -1) {
      pathname = pathname.substring(0, r);
    }
  }

 
 console.log("isSideNavOpen2",isAreaSideNavOpen)
  const currentSearchString = useSelector(
    (state) => state.mapSelectorReducer.currentSearchString
  );
  // const [isAreaSideNavOpen, setOpen] = useState(isAreaSideNavOpen);

  useEffect(() => {
    // console.log("dsdsdfsd", isAreaSideNavOpen);
    router.push(currentSearchString, undefined, { shallow: true });
  }, [currentSearchString]);
 


  // useEffect(() => {
  //   console.log("!isAreaSideNavOpen", isAreaSideNavOpen);
  // }, [isAreaSideNavOpen]);

  const collapsibleBtnHandler = () => {
    // setOpen(!isAreaSideNavOpen);
    dispatch(setIsAreaSideNavOpen(!isAreaSideNavOpen));
  };

  return (
    <section className="flex gap-6">
      <div className={`duration-500 flex w-auto`}>
        <div
          className={`
        ${isAreaSideNavOpen ? "bg-white dark:bg-black " : ""} 
        h-[90vh] ml-2 mt-2
        ${isAreaSideNavOpen ? "w-80 sm:w-96 mr-2" : "w-0"} 
        duration-500`}
        >
          <div
            className={`${
              isAreaSideNavOpen ? "py-0.1 flex flex-col" : "hidden"
            }`}
          >
            <div className="ml-2 mr-2">
              Area map
              {/* <AreaFeaturedCompanyAccordion /> */}
            </div>
            <div className="ml-2 mr-2">
              {/* <Accordion type="single" collapsible className="w-full py-0.1">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="mt-2 flex h-10 w-full rounded-md border border-black bg-white dark:border-white dark:bg-black px-3 py-2 text-sm">
                    Companies
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion> */}
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4 relative"></div>
        </div>
        <div className="w-12">
          <div className="flex flex-col gap-4 mt-4">
            <Button isIconOnly>
              <BsFillArrowLeftSquareFill
                size={26}
                className={`cursor-pointer ${
                  isAreaSideNavOpen ? "" : "rotate-180"
                }`}
                onClick={() => collapsibleBtnHandler()}
              />
            </Button>
            <Button isIconOnly>
              <GiEarthAmerica className={`cursor-pointer h-6 w-6`} />
            </Button>
            <Button isIconOnly>
              <AiFillPlusSquare className={`cursor-pointer h-6 w-6`} />
            </Button>
            <Button isIconOnly>
              <AiFillMinusSquare className={`cursor-pointer h-6 w-6`} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AreaBottomSideNavbar;
