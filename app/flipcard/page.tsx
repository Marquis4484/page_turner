// app/page.tsx (Next.js App Router)
import FlipCard from "@/components/FlipCard";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-8 bg-neutral-100">
      <FlipCard
        frontSrc="/cards/front.jpg"
        backSrc="/cards/back.jpg"
        width={360}
        height={220}
        roundedClass="rounded-2xl"
        className="hover:scale-[1.02] transition-transform duration-200"
      />
    </main>
  );
}
