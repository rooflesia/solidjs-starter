import { Title } from "@solidjs/meta";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <div class="p-1 text-center">
        <h1 class="text-xl font-bold text-red -500">Halo Solid + Tailwind!</h1>
        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-active btn-accent">Click Me</button>
      </div>
    </main>
  );
}
