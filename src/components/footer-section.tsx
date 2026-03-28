import Logo from "./logo";
import GithubIcon from "./icon/github";

const medsos = [
  {
    Icon: GithubIcon,
    href: "https://github.com/adamandp",
  },
];

export default function FooterSection() {
  return (
    <main className="main-container">
      <div className="py-c-12-5 flex flex-col place-items-center justify-items-center gap-c-10 px-c-10 lg:grid lg:grid-cols-3">
        <p className="font-syne text-c-6">
          © 2025 Winfulence. All rights reserved
        </p>
        <div className="w-fit">
          <Logo />
        </div>
        <div className="flex flex-wrap gap-c-12-5">
          {medsos.map((item, index) => (
            <div key={index} className="p-c-5 bg-[#4271FF] rounded-full">
              <item.Icon href={item.href} className="size-c-10 stroke-black" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
