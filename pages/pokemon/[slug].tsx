import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../../styles/Pokemon.module.css";
import Link from "next/link";
import { AiTwotoneHome } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let arr = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  const [first, setfirst] = useState('')

  const queryVar = `query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }`;

  const gqlVariables = {
    limit: 2,
    offset: 1,
  };


  useEffect( () => {
    const url = JSON.parse(localStorage.getItem("url") || "{}");
    console.log('.........',url);

    try {
        const res = fetch(`${'https://graphql-pokeapi.graphcdn.app/'}`, {
          credentials: 'omit',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: queryVar,
            variables:{
                name: "ditto"
              },
          }),
          method: 'POST',
        }).then((res) => res.json())
        console.log('.......res',res);
        
      } catch (error) {
        
      }



    // const res =async ()=>{
    //     const response = await axios.get(`${url}`)
    //     console.log('..........res',response?.data);
        
    // }
    // res()
    
  }, []);
  return (
    <>
  
      <div className={styles.main}>
        <div className="bg-white h-[100vh]">
          <div className="flex justify-center py-10 ">
            <Image
              src={"/assets/images/Logo.png"}
              alt="logo"
              width={200}
              height={200}
            />
          </div>
          <div className="grid grid-cols-12 gap-10 mt-5 mx-auto bg-white p-20">
            <div className="col-span-4 w-full p-10">
              <div className="">
                <p className="text-[45px] text-bold text-blue-700">
                  Bullbasur #001
                </p>
              </div>
              <div className="">
                <p className="text-[20px] text-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, fuga est quasi ea quam ex!
                </p>
              </div>
              <div
                className={`bg-white w-[350px] p-5 mt-10 flex justify-around ${styles.box}`}
              >
                <div className="mt-5">
                  <p className="text-[25px] text-bold">Height</p>
                  <p className="text-[16px] text-bold">2.04"</p>
                  <p className="text-[25px] text-bold mt-5">Weight</p>
                  <p className="text-[16px] text-bold">15.2 lbs</p>
                </div>
                <div className="mt-5">
                  <p className="text-[25px] text-bold">Category</p>
                  <p className="text-[16px] text-bold">Seed</p>
                  <p className="text-[25px] text-bold mt-5">Abilities</p>
                  <p className="text-[16px] text-bold">Overflow</p>
                  <p className="text-[16px] text-bold">Blaze</p>
                </div>
              </div>
            </div>
            <div
              className={`col-span-4 w-full h-[85%] p-10 relative overflow-hidden ${styles.image}`}
            >
              <div className="overflow-hidden p-2">
                <Image
                  className={styles.imageZoom}
                  src={"/assets/images/dragon.png"}
                  alt="logo"
                  fill
                />
              </div>
            </div>
            <div className="col-span-4 w-full p-10">
              <div className="">
                <p className="text-[20px] text-bold">Type</p>
                <div className="flex mt-2">
                  <button className="px-3 py-2 bg-green-500 rounded-md text-white">
                    Grass
                  </button>
                  <button className="px-3 py-2 ml-4 bg-purple-500 rounded-md text-white">
                    Poison
                  </button>
                </div>
              </div>
              <div className="pt-8">
                <p className="text-[20px] text-bold">Weakness</p>
                <div className="flex mt-2">
                  <button className="px-3 py-2 bg-green-500 rounded-md text-white">
                    Fire
                  </button>
                  <button className="px-3 py-2 ml-4 bg-pink-500 rounded-md text-white">
                    Psychic
                  </button>
                  <button
                    style={{
                      background:
                        "linear-gradient(to bottom, #3DC7EF 50%, #BDBDBD 50%)",
                    }}
                    className="px-3 py-2 ml-4 bg-purple-500 rounded-md text-white"
                  >
                    Flying
                  </button>
                  <button className="px-3 py-2 ml-4 bg-blue-300 rounded-md text-white">
                    Ice
                  </button>
                </div>
              </div>
              <div>
                <p className="text-[20px] text-bold mt-5">Stats</p>
                <div className="mt-5">
                  <p className="text-[16px] text-bold mt-2">Hp</p>

                  <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-1 rounded-full"
                      style={{ width: "42%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-bold mt-2">Attack</p>

                  <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-1 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-bold mt-2">Defense</p>

                  <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-1 rounded-full"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-bold mt-2">Special attack</p>

                  <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-1 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-bold mt-2">Special defense</p>

                  <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-1 rounded-full"
                      style={{ width: "42%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] text-bold mt-2">Speed</p>

                  <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-1 rounded-full"
                      style={{ width: "15%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/">
            <div className="flex justify-center mx-auto cursor-pointer">
              <div className="px-3 py-2 bg-yellow-500 rounded-sm text-white flex justify-center items-center space-x-2 border-solid border-4 border-indigo-600">
                <AiTwotoneHome size={25} />
                <p className="text-[20px]">Back To Homapage</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}