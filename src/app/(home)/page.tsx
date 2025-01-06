import Footer from "@/components/global/footer";
import Features from "@/components/sections/home/features";
import Terminal from "@/components/sections/home/terminal";

export default function Home() {
  return (
    <main className="relative min-h-screen hero-video flex flex-col items-center p-3 justify-center overflow-hidden">
      <Terminal />
      <Features />
      <Footer/>
    </main>
  );
}
