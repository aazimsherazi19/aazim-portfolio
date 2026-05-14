import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../components/common/Container.jsx";
import {assets} from "../assets/assets.js"
import Marquee from "../components/ui/Marquee.jsx";

const Hero = () => {
  return (
    <section className="container-custom pt-6 relative overflow-hidden">

      <Container>
        <div className="grid lg:grid-cols-2 items-center gap-12 px-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-heading  mb-4">
              Hey There
            </h4>

            <h1 className="font-heading mb-6">
              I'm{" "}
              <span className="text-[var(--color-primary)]">
                Aazim
              </span>
              <br />
              Web Designer
              <br />
              Based in Pak
            </h1>

            <p className="mb-8 max-w-xl">
              Transforming visions into vibrant, functional websites with creativity,
              innovation, and seamless design tailored to captivate your audience.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center px-6 py-2 font-medium transition-all duration-300 text-black bg-transparent border border-[#B4B4B4] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] trasntion-primary flex items-center gap-2">
                Our Portfolio
                <ArrowRight size={18} />
              </button>

              <button className="btn-secondary flex items-center gap-2 hover:bg-[var(--color-accent)] hover:text-black transition-primary">
                Hire Me
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={assets.hero}
                alt="Profile"
                className="rounded-[var(--radius-primary)] shadow-xl w-[500px] object-cover"
              />

              {/* Decorative Shape */}
              <div className="absolute -right-8 top-10 w-40 h-96 bg-[var(--color-primary)]/20 -z-10 " />
              <div className="absolute -left-8 bottom-15 w-40 h-96 bg-[var(--color-primary)]/20 -z-10 " />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;