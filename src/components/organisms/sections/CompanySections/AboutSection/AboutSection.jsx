import Heading from "../../../../atoms/Heading";
import Text from "../../../../atoms/Text";
import SmartImage from "../../../../atoms/SmartImage";
import Button from "../../../../atoms/Button";
import AboutImage from "../../../../../../public/Smart About .jpeg";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <div className=" pb-20 mt-8">
      <div className="containerBox grid xl:grid-cols-2 gap-16">
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-6">
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: "true" }}
            >
              <Heading level={4}>
                What is <span className="text-smartOrange">Smart</span>
                <span className="text-smartSaver">Saver</span> ?
              </Heading>
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: "true" }}
            >
              {" "}
              <Text level={1}>
                SmartSaver is a FinTech service built to help people save and
                invest smartly and enjoy enormous benefits like access to loans
              </Text>
              <Text level={1}>
                With a unique and secured platform, SmartSaver provides flexible
                and disciplined saving and investment products suited to every
                individual.
              </Text>
            </motion.div>
          </div>

          <div className="md:flex gap-8 xl:block space-y-4 md:space-y-0 xl:space-y-8">
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: "true" }}
              className="space-y-2 "
            >
              <Heading level={5}>Our Vision</Heading>
              <Text level={1}>
                SmartSaver aims to revolutionize FinTech services provided to
                the people; giving them easy, smarter and better living options.
                Helping people grow wealth and the financial inclusion of all,
                including the unbanked all over the countries we serve.
              </Text>
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: "true" }}
              className="space-y-2 "
            >
              <Heading level={5}>Our Culture</Heading>
              <Text level={1}>
                Our services at Smartsaver are delivered in a targeted way that
                puts into consideration our corporate relationships and client
                and staff preferences because we place great importance in
                sustaining lasting relationships with our clients, our staff
                throughout their financial lives.
              </Text>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            viewport={{ once: "true" }}
            className="space-x-4"
          >
            <Button variant="appleOrange" />
            <Button variant="playOrange" />
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1.3 }}
          viewport={{ once: "true" }}
          className="flex items-start  justify-center"
        >
          <SmartImage src={AboutImage} alt="about smart saver image" />
        </motion.div>
      </div>
    </div>
  );
};
