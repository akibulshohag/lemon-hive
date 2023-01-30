import Image from "next/image";
import styles from '../../styles/Home.module.css'

export default function ProductCard() {
  
  return (
    <div className={`${styles.main3}`}>
    <div className={` bg-white  ${styles.main2}`}>
      <div className="flex justify-center relative w-[500px] h-[150px] mx-auto">
        <Image className="" src={"/assets/images/Brush.png"} alt="logo" fill />
        <p className="text-center text-[40px] text-blue-900 absolute font-bold">
          Ash & Pikachu Arrive in Pokemon Universe
        </p>
      </div>
      <div className=" grid grid-cols-12 gap-3">
        <div className="col-span-7">
          <div className="flex justify-between">
            <div className="w-[700px]">
              <span className="text-justify w-[500px] font-semibold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt reprehenderit nesciunt amet perferendis pariatur
                qui culpa error, ducimus modi, commodi facilis delectus
                earum a mollitia quae blanditiis deserunt deleniti minima,
                id aut expedita molestias tempore? Cum eos facilis nisi non!
              </span>
              <div className="flex py-2">
                <span className="text-justify w-[500px] font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque labore placeat unde nesciunt repellat, animi iusto
                  dolores reiciendis, earum, doloremque debitis dolor
                  aspernatur. Quo deserunt corrupti, nesciunt quis quod modi
                  aliquam mollitia consectetur. Atque eaque sapiente, illum
                  molestias expedita dolore omnis culpa impedit architecto
                  nemo fuga expedita dolore omnis culpa impedit architecto
                  nemo fuga expedita dolore omnis culpa impedit architecto
                  nemo fuga
                </span>
                <div className="px-2">
                  <Image
                    src={"/assets/images/Image04.png"}
                    alt="Image04"
                    width={200}
                    height={250}
                  />
                </div>
              </div>

              <p className="text-justify  py-2 font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet voluptatum modi quia reiciendis quae fuga, alias
                iusto cupiditate fugit laboriosam dolore velit atque tenetur
                adipisci voluptate eum voluptates quisquam recusandae. Animi
                dolor hic labore fugit sequi consequatur minima accusamus
                odit amet ipsa aliquid error commodi aliquam, asperiores
                perspiciatis velit. Repellendus non sunt, deleniti rerum aut
                officiis nisi! Error culpa consectetur non explicabo, nisi
                corrupti reiciendis accusantium amet nulla voluptatibus
                voluptatum?
              </p>
            </div>
            <div className="p-3">
              <Image
                src={"/assets/images/Image03.png"}
                alt="Image05"
                width={200}
                height={250}
              />
              <Image
                className="py-3 mt-3"
                src={"/assets/images/Image02.png"}
                alt="Image05"
                width={200}
                height={300}
              />
            </div>
          </div>
          <p className="text-justify py-2 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            eveniet asperiores molestiae, aliquid explicabo consequuntur
            totam tempora perspiciatis minus quibusdam, commodi harum
            voluptatum eum tempore illo praesentium? Aliquid minima
            perferendis cupiditate, ipsum ipsa tempora nemo corporis modi
            labore explicabo molestiae ex at nisi, similique suscipit dolor
            culpa dolore voluptates sint recusandae?
            <br /> Nisi animi voluptate nesciunt quidem quas, ipsum harum,
            commodi recusandae optio sint molestias laborum ex cum nemo
            voluptates eos ut assumenda. Repellat temporibus omnis
            consequuntur ipsa aut hic, libero sed sequi animi perferendis
            fugit maiores velit accusantium! Ipsam expedita nam perferendis
            in a? Eos inventore expedita architecto impedit eligendi.
          </p>
        </div>
        <div className=" col-span-5">
          <div>
            <div>
              <p className="text-justify font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores eveniet asperiores molestiae, aliquid explicabo
                consequuntur totam tempora perspiciatis minus quibusdam,
                commodi harum voluptatum eum tempore illo praesentium?
                Aliquid
              </p>
            </div>
            <div className="flex justify-between mt-5">
              <Image
                src={"/assets/images/Image05.png"}
                alt="Image05"
                width={180}
                height={180}
              />
              <p className="text-justify ml-3 w-[420px] font-semibold">
                Lorem ippisicing elit. Maiores eveniet asperiores molestiae,
                aliquid explicabo consequuntur totam tempora perspiciatis
                minus quibusdam, commodi harum voluptatum eum tempore ilsum
                dolor sit amet consectetur adilo praesentium? Aliquid
                Maiores eveniet asperiores molestiae, aliquid explicabo
                consequuntur totam tempora perspiciatis consequuntur totam
                tempora perspiciatis
              </p>
            </div>
            <div className="flex justify-between mt-5">
              <Image
                src={"/assets/images/Image01.png"}
                alt="Image05"
                width={180}
                height={180}
              />
              <p className="text-justify ml-3 w-[420px] font-semibold">
                Lorem ippisicing elit. Maiores eveniet asperiores molestiae,
                aliquid explicabo consequuntur totam tempora perspiciatis
                minus quibusdam, commodi harum voluptatum eum tempore ilsum
                dolor sit amet consectetur adilo praesentium? Aliquid
                Maiores eveniet asperiores molestiae, aliquid explicabo
                consequuntur totam tempora perspiciatis consequuntur totam
                tempora perspiciatis
              </p>
            </div>
            <div>
              <p className="text-justify mt-2 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores eveniet asperiores molestiae, aliquid explicabo
                consequuntur totam tempora perspiciatis minus quibusdam,
                commodi harum voluptatum eum tempore illo praesentium?
                <br /> Aliquid Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cupiditate, a facere non ipsum delectus
                ea. At earum magni rem minima consequuntur vitae voluptatum
                in? Porro
                <br /> delectus, tenetur nulla explicabo doloribus
                voluptatibus id officiis suscipit{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
    
