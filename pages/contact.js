import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

const contact = () => {
    return (
        <Layout>
            <div>
                <Hero heading='Contact' message='Submit the form below for more work and quotes.'></Hero>
                <Contact></Contact>
            </div>
        </Layout>
    );
};

export default contact;