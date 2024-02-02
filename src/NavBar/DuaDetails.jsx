import React from "react";
import details_logo from "../images/details_logo.png";
import {TbCopy} from "react-icons/tb";
import {BsBookmark} from "react-icons/bs";
import {HiOutlineLightBulb} from "react-icons/hi2";
import {MdOutlineReportGmailerrorred} from "react-icons/md";
import {FaPlay} from "react-icons/fa6";

function DuaDetails({item}) {
  const {
    dua_name_en,
    dua_id,
    top_en,
    dua_arabic,
    transliteration_en,
    translation_en,
    refference_en,
    audio,
  } = item;
  return (
    <>
      <div className=" my-8">
        {/* details */}
        <div className="flex flex-col p-6 bg-white rounded-xl">
          {/* details title  */}
          <div>
            <div className="flex items-center justify-start font-medium ">
              <img
                src={details_logo}
                className="w-[35px] h-[35px] mr-3"
                alt="details logo"
              />
              <div className="font-semibold text-[16px] text-[#1FA45B] flex items-center ">
                {dua_id !== null && <p className="mr-1">{`${dua_id}.`}</p>}
                {dua_name_en !== null && <p>{`${dua_name_en}`}</p>}
              </div>
            </div>
          </div>
          {/* details paragraph  */}
          <div>
            <div className="w-full flex flex-col gap-5 ">
              {top_en !== null && (
                <p className="mt-5 text-justify font-normal leading-8">
                  {`${top_en}`}
                </p>
              )}

              {dua_arabic !== null && (
                <p className=" text-right text-[26px] ">{dua_arabic}</p>
              )}

              {transliteration_en !== null && (
                <p className=" text-[16px] font-medium text-justify leading-8 italic">
                  Transliteration:{" "}
                  <span className="font-normal">{transliteration_en}</span>{" "}
                </p>
              )}

              {translation_en !== null && (
                <p className=" text-[16px] font-medium text-justify ">
                  Translation:
                  <span className="font-normal">{translation_en}</span>{" "}
                </p>
              )}

              {/* details reference  */}
              <div className=" flex flex-col justify-start items-start">
                <p className="font-semibold text-[16px] text-[#1FA45B]">
                  Reference:
                </p>
                {refference_en !== null && (
                  <p className="font-medium text-[16px]">{`${refference_en}`}</p>
                )}
              </div>
              {/* details icons  */}
              <div className=" mt-5 flex justify-between items-center">
                {audio !== null ? (
                  <div className="w-[44px] h-[44px] rounded-full bg-[#1FA45B] flex items-center justify-center">
                    <a href={`${audio}`} target="_blank">
                      <FaPlay className="text-white w-[23px] h-[23px]" />
                    </a>
                  </div>
                ) : (
                  <div className="w-[44px] h-[44px] "></div>
                )}
                <div className="flex gap-x-8 items-center">
                  <div className="cursor-pointer">
                    <TbCopy size={24} className="text-[#868686]" />
                  </div>
                  <div className="cursor-pointer">
                    <BsBookmark size={20} className="text-[#868686]" />
                  </div>
                  <div className="cursor-pointer">
                    <HiOutlineLightBulb size={24} className="text-[#868686]" />
                  </div>
                  <div className="cursor-pointer">
                    <MdOutlineReportGmailerrorred
                      size={24}
                      className="text-[#868686]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DuaDetails;
