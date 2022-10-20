import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import Paystack from "../../../../../public/Paystack_Logo1.png";
import Capricon from "../../../../../public/capricon2.png";
import Sterling from "../../../../../public/sterling2.png";
import Providous from "../../../../../public/providus2.png";
import Firstcapitol from "../../../../../public/FirstCapitol2.png"

import HeroImage from "../../../../../public/HomeHero Image2.png";
import SmartImage from "../../../atoms/SmartImage";
import Button from "../../../atoms/Button";

export const HomeHero = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3  relative heroContainer">
      <div className="bg-smartGrayBg space-y-16 md:space-y-28 xl:space-y-32  pt-16 md:pt-24 xl:pt-52 xl:col-span-2">
        <div className="containerBox space-y-4 md:space-y-8 cautionClass">
          <Heading level={1} className="font-extrabold max-w-md">
            Smarter Than your Bank
          </Heading>
          <Text className="max-w-[500px]" level={1}>
            Get a free Bank account with earn high interest ans unlock the power
            of savings, Investment and get access cheap Loans.
          </Text>
          <div className="space-x-4">
            <Button variant="appleOrange" />
            <Button variant="playOrange" />
          </div>
        </div>
        <div className="w-full bg-white h-16  md:pr-32 md:h-28 flex items-center gap-2 md:gap-8 containerBox cautionClass">
          <SmartImage src={Paystack} />
          <SmartImage src={Capricon} />
          <SmartImage src={Sterling} />
          <SmartImage src={Providous} />
          <SmartImage src={Firstcapitol} />
        </div>
      </div>
      <div className="bg-smartOrange flex items-end ">
        <div className="absolute bottom-0 right-0">
          <SmartImage src={HeroImage} className=" hidden xl:block " />
        </div>
        <SmartImage src={HeroImage} className="xl:hidden" />
      </div>
    </div>
  );
};
