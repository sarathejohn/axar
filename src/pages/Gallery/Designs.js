import React from "react";
import Images from "../../assets/img";
import DesignCard from "../../components/common/cards/DesignCard";
import Hero from "../../components/common/Hero";
import ThickLine from "../../components/common/lines/ThickLine";
import SubTitle from "../../components/common/SubTitle";

function Designs() {
  return (
    <div className="bg-neutral-focus">
      <Hero
        homeImage={Images.hero4}
        image={Images.videoMain}
        title={"Designs"}
        subTitle={"Designs"}
        description1={
          "There are four key features of inclusion which can be used to set expectations and evaluate inclusive practice in schools and early learning and childcare settings. These are present, participating, achieving and supported."
        }
        description2={
          "Contractors often need to make quick decisions or come up with creative solutions. Having a diverse group of individuals can bring up different perspectives that may lead to faster resolutions. This innovation can help employers outperform other companies."
        }
      />
      <div>
        <div className="px-4 py-14 lg:px-28 lg:py-14 ">
          <div className="flex flex-col gap-6">
            <SubTitle text={"Design Gallery"} />
            <ThickLine />
            <div className="flex flex-wrap items-center justify-center p-10 ">
              <DesignCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designs;
