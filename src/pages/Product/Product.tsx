import { FC, ComponentPropsWithoutRef, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface ProductProps extends ComponentPropsWithoutRef<"main"> {}

const Product: FC<ProductProps> = ({ ...props }) => {
  const [product, setProduct] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productt, id } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchProducts() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/${productt}/${id}`,
          { signal }
        );

        if (!response.ok) {
          throw new Error("error");
        }

        const products = await response.json();
        console.log(products);

        setProduct(product);
        setError(null);
      } catch (err) {
        setError(error);
        setProduct([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, []);

  return (
    <main {...props}>
      <section>
        <div className="my-container">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div>
              <div className="mb-10">
                <div className="font-semibold text-[24px]">Kənd yumurtası</div>
                <div className="mt-7 flex justify-between">
                  <div className="flex gap-10">
                    <div className="w-[400px] h-auto">
                      <img src="/kend-egg.jpg" alt="kend-yumurtasi" />
                    </div>
                    <div>
                      <div className="text-[32px]">15 ₼ - 25 ₼</div>
                      <div className="bg-green-300 p-1 opacity-24 rounded-xl mt-2">
                        STOKDA
                      </div>
                      <div className="flex mt-4 items-center">
                        <div className="mr-2 rounded-md border-slate-400 p-1">
                          Seçimlər:{" "}
                        </div>
                        <div className="mr-2 p-1">500 qr.</div>
                        <div>1 kq</div>
                      </div>
                      <div className="mt-6 text-[32px]">25 ₼</div>
                      <div className="text-[12px]">STOKDA</div>
                      <div className="flex gap-3 mt-3 items-center">
                        <div className="rounded-full bg-slate-200 p-1 px-3">
                          -
                        </div>
                        <div>1</div>
                        <div className="mr-20 rounded-full bg-slate-200 p-1 px-3">
                          +
                        </div>
                        <div className="py-2 px-3 rounded-md bg-[#0f7012] text-[#ffffff]">
                          Səbətə at
                        </div>
                      </div>
                      <div className="flex gap-3 mt-5 rounded-md border-green-600 p-2">
                        <img src="/heart.svg" alt="heart-icon" />
                        <div>Seçilmişlərə əlavə et</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-[#EFF1FB] max-w-[350px] h-[250px]">
                    <div className="mb-7">
                      Pulsuz Çatdırılma 45 AZN yuxarı bütün sifarişlərə şamil
                      olunur
                    </div>
                    <div className="mb-7">
                      Təbii təsərrüfatlardan 100% organik zəmanət verilir
                    </div>
                    <div>Fikrinizi dəyişsəniz 1 gün ərzində qaytarılır</div>
                  </div>
                </div>
              </div>
              <div className="p-4 mb-12">
                <div className="flex gap-16 border-b-950 mb-8">
                  <div>AÇIQLAMA</div>
                  <div className="text-gray-500">ƏLAVƏ MƏLUMAT</div>
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    Tərkibi: pasterizə edilmiş təbii inək südündən qaymaq.
                    Saxlama müddəti: t 0 – 5 °C – də 30 gün, t -10°C – 3 ay.
                  </div>
                  <div>
                    Bu məhsulu hər bir insan hər gün qəbul etməlidir. Kərə
                    yağının tərkibində bir çox əvəzsiz vitaminlər (A, D, E, C,
                    B, K), kalsium, kalium, fosfor, yağlı turşular və
                    aminoturşular var. Nehrə yağı həzm proseslərinə yaxşı təsir
                    edir, allergik və nəfəsalma sistemi xəstəliklərinin (hətta
                    vərəmin və astmanın) profilaktikasında böyük rol oynayır,
                    immun sistemini möhkəmləndirir, sinir sisteminin fəaliyyəti
                    üçün olduqca vacibdir, insanın iş qabiliyyətini və beyinin
                    fəaliyyətini yaxşılaşdırır. Bundan əlavə nehrə yağı dərinin,
                    dişlərin, gözlərin sağlamlığında da böyük rol oynayır.
                  </div>
                  <div>
                    Əsas məqsədimiz kəndlə şəhər arasında “sağlam qida
                    körpüsü”-nü yaradaraq şəhərdə yaşayan insanlara kənd
                    ləzzətini daşımaqdır. Azərbaycan bazarında yalnız
                    keyfiyyətli və 100% təbii, yerli məhsulları təqdim edən eko
                    – brenddir. İstehsal zamanı konservantlardan,
                    əvəzləyicilərdən, süni əlavələrdən istifadə olunmur. Sizin
                    sağlamlğınız bizim məqsədimizdir!
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export { Product };
