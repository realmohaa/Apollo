import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"/>
        <p className="text-center">Create your webapp with the latest technologies</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-9xl font-bold text-center md:text-[300px]">Apollo</h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-20px]">
          <Image
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            src={'/assets/cover.jpg'}
            width={1200}
            height={1200}
            alt="Apollo"
          />
          <div className="absolute z-10 bottom-0 top-[50%] left-0 right-0 bg-gradient-to-t dark:from-background"></div>
        </div>
      </section>
    </>
  );
}
