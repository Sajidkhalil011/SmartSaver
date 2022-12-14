import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import Paystack from "../../../../../public/Paystack_Logo1.png";
import Capricon from "../../../../../public/capricon2.png";
import Sterling from "../../../../../public/sterling2.png";
import Providous from "../../../../../public/providous.png";
import Firstcapitol from "../../../../../public/FirstCapitol2.png";
import HeaderUnderline from "../../../../../public/Underline.png";
import HeroImage from "../../../../../public/HomeHero Image2.png";
import SmartImage from "../../../atoms/SmartImage";
import Button from "../../../atoms/Button";
import Star from "../../../../../public/starBg.png";
import { motion } from "framer-motion";

export const HomeHero = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 pt-8  relative heroContainer mb-16 md:mb-32">
      <div className="bg-smartGrayBg space-y-10 md:space-y-28 xl:space-y-32  pt-16 md:pt-24 xl:pt-52 xl:col-span-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="containerBox space-y-4 md:space-y-8 cautionClass  relative"
        >
          <div className="absolute hidden md:block -top-8 xl:-top-24 xl:w-[427px]   md:right-[25%] xl:right-[35%]">
            <SmartImage src={Star} alt="star back ground" />
          </div>
          <div className="relative">
            <Heading
              level={1}
              className="font-extrabold max-w-md relative z-[8]"
            >
              Smarter Than your Bank
            </Heading>
            <div className="absolute z-[4] bottom-[39px] right-[9.5rem] md:right-auto md:bottom-[44px] lg:bottom-[50px] w-44 md:w-48 lg:w-60">
              <div className="w-32 md:w-auto">
                <SmartImage src={HeaderUnderline} alt="text underline" />
              </div>
            </div>
          </div>
          <Text className="max-w-[500px] text-center md:text-left" level={1}>
            Get a free Bank account; unlock the power of savings & investment,
            earn high interest on your savings, pay bills and access cheap
            loans.
          </Text>
          <div className="space-x-4 flex items-center justify-center md:justify-start">
            <Button variant="appleOrange" />
            <Button variant="playOrange" />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="w-full bg-white  xl:pr-16   containerBox cautionClass"
        >
          <div className="flex items-center gap-2 md:gap-4 xl:gap-16 py-4">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ ease: "easeOut" }}
              className=""
            >
              <SmartImage src={Paystack} alt="paystack logo" />
            </motion.div>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ ease: "easeOut" }}
            >
              <SmartImage src={Capricon} alt="capricon logo" />
            </motion.div>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ ease: "easeOut" }}
            >
              <SmartImage src={Sterling} alt="sterling bank logo" />
            </motion.div>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ ease: "easeOut" }}
            >
              <SmartImage src={Providous} alt="providous bank logo" />
            </motion.div>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ ease: "easeOut" }}
            >
              <SmartImage src={Firstcapitol} alt="first capitol logo" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-smartOrange flex justify-end items-end "
      >
        <div className="absolute bottom-0 right-0 w-[680px] hidden xl:block  ">
          <SmartImage src={HeroImage} priority={true} alt="smart app image" />
        </div>
        <div className="xl:hidden  flex items-center justify-end">
          <div className="ml-auto w-80 md:w-auto">
            <SmartImage src={HeroImage} priority={true} alt="smart app image" />
          </div>
        </div>
        <div></div>
      </motion.div>
    </div>
  );
};
