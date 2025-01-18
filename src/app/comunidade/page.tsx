import MemberCard, { Member } from "@/components/member-card";

const member: Member = {
  name: "Fufu da Silva",
  city: "RJ",
  image: "/foto.png",
  link_linkedin: "https://www.linkedin.com/???????????????????????",
  link_github: "https://github.com/???????????????????????",
  link_perfil: "???????????????????????",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const members: Member[] = Array.from({ length: 3 * 3 }, () => member);

export default function comunidade() {
  return (
    <section>
      <div className="mx-20 mt-9 p-5">
        <hr className="flex border-black border-t" />
        <p className="mt-9 text-6xl">
          Encontre as Profissionais que <br />
          <span className="text-emphasis font-normal">Transformam</span> a
          Tecnologia
        </p>
      </div>

      <div className="container mx-auto flex flex-wrap gap-16">
        {members.map((member, index) => (
          <MemberCard {...member} key={index} className="w-1/3" />
        ))}
      </div>

      <div className="p-6 justify-end grid grid-rows-2">
        <p className="uppercase">leia abaixo</p>
        <hr className="flex border-black border-t" />
        <p>
          Somos uma comunidade de mais de 150 mulheres na tecnologia, de áreas{" "}
          <br /> como programação, análise de dados, UX/UI, DevOps e engenharia
          de <br /> requisitos. Todas aqui estão dedicadas a aumentar a presença
          feminina no <br /> setor. Conheça nossas integrantes por área de
          atuação:
        </p>
      </div>
    </section>
  );
}
