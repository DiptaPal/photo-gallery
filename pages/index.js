import { SliderData } from "@/Utilities/SliderData";
import Hero from "@/components/Hero";
import Instagram from "@/components/Instagram";
import Layout from "@/components/Layout";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
        <Layout title={'Home Page'}>
          <Hero heading="Capture Photography" message="I capture moments in nature and keep them alive."/>
          <Slider slides={SliderData}/>
          <Instagram></Instagram>
        </Layout>
    </>
  )
}
