import Footer from "./main/Footer/Footer";
import CompleteSec1 from "./main/Section1/CompleteSec1";
import Section3 from "./main/Section3/Section3";
import Section4 from "./main/Section4/Section4";
import CompleteSection5 from "./main/Section5/CompleteSection5";

import CommonQuestion from "./main/commonQuestion/CommonQuestion";

export default function Home() {
  return (
    <div className="container mx-auto mt-20 my-6">
      <div className="mb-16">
        <CompleteSec1 />
      </div>
      <div className="mb-16">
        <Section3 />
      </div>
      <div className="mb-16">
        <Section4 />

      </div>
      <div className="mb-16">
        <CompleteSection5 />

      </div>
      <div className="mb-16">
        <CommonQuestion />

      </div>
      <Footer />
    </div>
  );
}
