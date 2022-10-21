import SmartImage from "../../../atoms/SmartImage";
import CardText from "../../../molecules/CardText";
import LoanImage from "../../../../../public/Loan.png";
import Text from "../../../atoms/Text";

export const InstantLoan = () => {
  return (
    <div className="containerBox grid md:grid-cols-2 gap-4 md:gap-16">
      <div className="bg-smartOrange pt-4 px-4 rounded-lg">
        <SmartImage src={LoanImage} alt="loan image" />
      </div>
      <div className="flex justify-center items-center">
        <CardText title="Access to Instant Loans.">
          <Text level={1} color="black">
            Apply 24/7 and receive funds in your SmartSaver wallet within
            minutes. Unlock higher loan amounts and lower interest rates by
            repaying loans on time.
          </Text>
        </CardText>
      </div>
    </div>
  );
};
