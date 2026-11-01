import react from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "../../layouts/Header.jsx";
import heroImage from "../../assets/img/hero-2.jpg";
import ProductCard from "./components/Products.jsx";
import FeatureCard from "./components/Features.jsx";
import "./Home.css";

function Home(props) {
    const handleShopNow = () => {
        console.log("Shop Now button clicked!");
    }
    return (
        <>
            <Navbar brandName="MyBrand" />
            <main>
                <Hero
                    title="Upgrade Your Setup Today"
                    subtitle="Discover premium accessories, smart audio, and everyday tech designed to enhance your work and leisure."
                    buttonText="Shop Now"
                    imageUrl={heroImage}
                    onActionClick={handleShopNow}
                />
                <section id="products" className="section-container">
                    <h2 className="section-title">Featured Products</h2>
                    <p className="section-subtitle">Top-rated items handpicked for quality and durability</p>
                    <div className="products-grid">
                        <ProductCard
                            name="Nike Air Max 270"
                            category="Snikers"
                            price={850}
                            inStock={true}
                            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                        />
                        <ProductCard
                            name="Smart Fitness Watch"
                            category="Wearables"
                            price={1200}
                            inStock={true}
                            image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
                        />
                        <ProductCard
                            name="White Coffee Cup"
                            category="Kitchenware"
                            price={650}
                            inStock={false}
                            image="https://plus.unsplash.com/premium_photo-1719289799376-d3de0ca4ddbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                        />
                        <ProductCard
                            name="Coconut Oil Hair Mask"
                            category="Beauty & Fashion"
                            price={499}
                            inStock={true}
                            image="https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                        />
                    </div>
                </section>
                <section id="why-us" className="section-container">
                    <h2 className="section-title">Why Choose Us</h2>
                    <p className="section-subtitle">Customer satisfaction and reliable service across Morocco</p>
                    <div className="features-grid">
                        <FeatureCard
                            icon="🚚"
                            title="Fast Nationwide Delivery"
                            description="Quick and reliable delivery to all cities across Morocco in 24 to 48 hours."
                        />
                        <FeatureCard
                            icon="🛡️"
                            title="100% Genuine Products"
                            description="Every item in our collection is backed by our official 1-year product warranty."
                        />
                        <FeatureCard
                            icon="💬"
                            title="24/7 Dedicated Support"
                            description="Direct customer support via phone, email, and live messaging whenever you need help."
                        />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
