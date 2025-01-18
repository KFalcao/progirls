import { Image } from "../Image";
import { TiSocialLinkedin } from "react-icons/ti";
import { SocialIcon } from "../social-icon";
import { MdPerson2 } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import clsx from "clsx";

export type Member = {
  name: string;
  city: string;
  image: string;
  description: string;
  link_linkedin: string;
  link_github: string;
  link_perfil: string;
  className?: ClassName;
};

type MemberCardProps = Readonly<Member>;

export default function MemberCard({
  name,
  city,
  image,
  description,
  link_linkedin,
  link_github,
  link_perfil,
  className,
}: MemberCardProps) {
  return (
    <article
      className={clsx(
        "relative flex flex-col max-w-96 p-8 rounded-2xl shadow-xl gap-7 overflow-hidden",
        "transition-all duration-300 ease-in-out",
        "hover:shadow-2xl hover:scale-[1.01]",
        className
      )}
    >
      <h3 className="text-5xl font-bold">
        {name} <br /> | {city}
      </h3>

      {/* circle */}
      <div
        className="absolute top-0 right-[-120px] bg-black rounded-full w-80 h-80"
        style={{
          background: "radial-gradient(circle, #F13579 0%, #00000000 75%)",
          zIndex: -1,
        }}
      />

      <Image
        src={image}
        alt="foto"
        width={128}
        height={128}
        className="rounded-full mx-auto"
      />

      <p className="">{description}</p>

      <div className="flex gap-4 justify-center">
        <Link href={link_linkedin}>
          <SocialIcon>
            <TiSocialLinkedin size={30} />
          </SocialIcon>
        </Link>

        <Link href={link_github}>
          <SocialIcon>
            <FiGithub size={30} />
          </SocialIcon>
        </Link>

        <Link href={link_perfil}>
          <SocialIcon>
            <MdPerson2 size={30} />
          </SocialIcon>
        </Link>
      </div>
    </article>
  );
}
