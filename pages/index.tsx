import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import ProductCard from "../components/Product/productCard";
import DetailsCard from "../components/Product/detailsCard";
import SliderCard from "../components/Product/sliderProduct";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [pokemonList, setpokemonList] = useState<any>([]);

  const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        url
        name
        image
      },
    }
  }`;

  const gqlVariables = {
    limit: 10,
    offset: 1,
  };
  useEffect(() => {
    const res = async () => {
      try {
        const res = await fetch("https://graphql-pokeapi.graphcdn.app/", {
          credentials: "omit",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: gqlQuery,
            variables: gqlVariables,
          }),
          method: "POST",
        }).then((res) => res.json());
        setpokemonList(res?.data?.pokemons?.results);
      } catch (error) {}
    };
    res();
  }, []);

  return (
    <>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.main1}>
          <div className="flex justify-center mb-5">
            <Image
              src={"/assets/images/Logo.png"}
              alt="logo"
              width={200}
              height={200}
            />
          </div>
          <div className={styles.productView}>
            <ProductCard arr={pokemonList} />
          </div>

          <div className={styles.sliderView}>
            <SliderCard arr={pokemonList} />
          </div>
        </div>
      </div>
      <div className={styles.detailsView}>
        <DetailsCard />
      </div>
      <div className={styles.detailsMobileView}>
        <div className={` bg-white  ${styles.main2}`}>
          <div className="relative">
            <div className="flex justify-center w-[350px] h-[100px] mx-auto">
              <Image
                className=""
                src={"/assets/images/Brush.png"}
                alt="logo"
                fill
              />
            </div>
            <p className="text-center text-[40px] text-blue-900 absolute font-bold xs:text-[30px] top-0">
              Ash & Pikachu Arrive in Pokemon Universe
            </p>
          </div>
          <div className="p-1">
            <div>
              <p className="text-justify font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                corporis, laborum aliquam magni earum libero nesciunt fugit
                excepturi! Iusto dolor vitae sint commodi quibusdam nemo
                explicabo. Repellat ab praesentium quam minima quia illum id
                exercitationem reprehenderit minus, accusamus iste! Quia dolor,
                molestiae ducimus sapiente quos pariatur in labore obcaecati
                maiores?
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1 h-[350px] items-center">
              <div className="">
                <Image
                  src={"/assets/images/Image04.png"}
                  alt="Image04"
                  width={180}
                  height={200}
                />
              </div>
              <div className="">
                <Image
                className="pb-2"
                  src={"/assets/images/Image03.png"}
                  alt="Image04"
                  width={180}
                  height={200}
                />
                <Image
                  src={"/assets/images/Image02.png"}
                  alt="Image04"
                  width={180}
                  height={200}
                />
              </div>
              <div className="flex items-end justify-end mx-auto h-full">
              <div className="">
                <Image
                className="pb-2"
                  src={"/assets/images/Image05.png"}
                  alt="Image04"
                  width={180}
                  height={200}
                />
                <Image
                  src={"/assets/images/Image01.png"}
                  alt="Image04"
                  width={180}
                  height={200}
                />
              </div>
              </div>
            </div>
            <div className="pt-5">
              <p className="text-justify font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim maiores molestias consectetur delectus deleniti veritatis et, quisquam animi odit? Fugit nisi, modi praesentium corporis et nam esse repellat sed, perferendis ipsam possimus corrupti alias delectus dolorem, quidem dolor quasi cupiditate voluptates. Placeat consectetur incidunt, consequatur totam quisquam itaque nostrum alias qui. Perspiciatis, voluptas modi architecto maiores ab eos cupiditate, quidem distinctio exercitationem reiciendis quis repudiandae assumenda consectetur eaque, quas necessitatibus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
