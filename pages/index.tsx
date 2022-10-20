import type { NextPage } from 'next';

import { Navbar } from '../components/Navbar';
import { AboutWorkSentence } from '../components/sentence/AboutWorkSentence';
import { CalculateSentence } from '../components/sentence/CalculateSentence';
import { InitialSentence } from '../components/sentence/InitialSentence';
import Contact from './Contact';
import BenefitsCalculate from './BenefitsCalculate';

const Home: NextPage = () => {
  return (
    <div className="w-11/12 md:w-8/12">
      <Navbar />
      <InitialSentence />
      <BenefitsCalculate />
      <CalculateSentence />
      <AboutWorkSentence />
      <article className="text-left border-t-2 border-[#1E2678] my-8">
        <div className="flex text-xl py-2 mt-8 mb-5">
          <div className="border-b-8 border-yellow-500 rotate-90 w-7"></div>
          <h2>まとめ</h2>
        </div>
        <section>
          <div>
            育児休業給付金は育児に伴う休業期間中に国から給付金を受け取れるだけでなく、社会保険料の支払いも免除される制度です。
            <br />
            <div className="mt-6">
              給付金を受け取るためには、以下の受給要件を満たしている必要があります。
            </div>
            <div className="rounded-lg border-2 border-yellow-500 mt-8 p-5 space-y-4">
              <p>➀ 雇用保険の被保険者であること</p>
              <p>➁ 過去2年間で就業日が11日以上ある月が12ヵ月以上あること</p>
              <p>➂ 育児休業中の就業日数が月10日以下であること</p>
              <p>
                ➃
                育児休業中に賃金月額（休業開始前の賃金）のうち8割以上の金額が支払われていないこと
              </p>
            </div>
            <div className="mt-8">
              <p>
                なお、育児休業給付金申請の手順は、勤務先によって異なる場合があります。場合によっては、申請を各個人で行うというケースがあるかもしれません。そのため、育児休業の取得が必要となった場合には、できるだけ早い段階で会社側に相談しておくと安心です。
              </p>
            </div>
          </div>
        </section>
      </article>
      <Contact />
    </div>
  );
};

export default Home;
