import LandingContent from "@/components/landing-main";

export default function Home() {
  return (
    <main className="container h-screen w-screen flex   items-center justify-center mx-auto py-10">
      <div
        className="bg-scroll"
        style={{
          backgroundImage: `url('/images/cinema-01.jpg')`,
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
<LandingContent />
      </div>
    </main>
  );
}
