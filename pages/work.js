import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Portfolio from "@/components/Portfolio";

const work = () => {
    return (
        <Layout>
            <div>
                <Hero heading="MY Work" message="This is some of my recent work traveling the world." />
                <Portfolio></Portfolio>
            </div>
        </Layout>
    );
};

export default work;