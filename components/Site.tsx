import { getDict, type Locale } from "@/lib/i18n";
import Header from "./Header";
import Hero from "./Hero";
import Marquee from "./Marquee";
import { Admissions, Campus, Faculty, Programs } from "./Sections";
import Footer from "./Footer";

export default function Site({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  return (
    <>
      <Header locale={locale} dict={dict} />
      <main>
        <Hero dict={dict} />
        <Marquee items={dict.marquee} />
        <Programs dict={dict} />
        <Faculty dict={dict} />
        <Campus dict={dict} />
        <Admissions dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
