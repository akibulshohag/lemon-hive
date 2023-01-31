import Image from "next/image";
import styles from '../../styles/Home.module.css'
import { Router, useRouter } from "next/router";
import Carousel from "react-elastic-carousel";


export default function SliderCard({ arr }) {
    const router = useRouter();

    const redirect = async (val)=>{
        router.push(`/pokemon/${val?.name}`)
        localStorage.setItem("url", JSON.stringify(val?.name));
       }

     
    
  
  return (
    <div>
              <Carousel>
              {arr?.map((item, index) => (
                  <div
                  onClick={()=>redirect(item)}
                    key={index}
                    className={`h-[320px] w-[235px] bg-white rounded-md items-center justify-center overflow-hidden hover:bg-blue-100 hover:shadow-lg ${styles.productContainer}`}
                  >
                    <div className="p-2 relative">
                      <div className="h-[220px] w-[235] overflow-hidden  bg-gray-200 z-5 hover:bg-white">
                        <Image
                          className={styles.imageZoom}
                          alt="product"
                          width={220}
                          height={235}
                          src={item?.image}
                        />
                        <span className="absolute font-semibold p-3 top-1">#010</span>
                      </div>
                    </div>
                    <div className={`px-2 ${styles.textHover}`}>
                      <span className="text-[16px] font-bold text-black">
                        {item?.name}
                      </span>
                    </div>
                    <div className="p-2 flex">
                      <button className="px-3 bg-green-500 rounded-sm text-white">
                        Grass
                      </button>
                      <button className="px-3 ml-4 bg-purple-500 rounded-sm text-white">
                        Poison
                      </button>
                    </div>
                  </div>
              ))}
              </Carousel>
              </div>
  );
}
