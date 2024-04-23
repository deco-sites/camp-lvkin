export interface CouponProps {
  coupon: string;
}

const Coupon = ({ coupon }: CouponProps) => {
  return (
    <section class="coupon-section mx-auto my-5 block w-fit rounded-lg border-2 border-black py-6 px-16 max-w-sm">
      <h4 class="coupon-cta text-center font-light text-[#333]">
        Utilize o cupom:
      </h4>
      <h1 class="coupon-text font-bold text-[#3e3e89] text-4xl uppercase text-center mb-6">
        {coupon}
      </h1>
      <p class="coupon-descritive mb-4 text-black  text-lg">
        Para receber 50% de desconto na sua primeira compra acima de R$ 350,00!
      </p>
      <div class="coupon-benefits">
        <h6 class="benefits-title text-[#3f3f3f] mb-4">
          além disso você também recebe:
        </h6>
        <ul class="benefits-list px-2">
          <li className="benefit-item text-[#3f3f3f] mb-2">- Frete grátis</li>
          <li className="benefit-item text-[#3f3f3f] mb-2">
            - 5% de cashback na próxima compra
          </li>
          <li className="benefit-item text-[#3f3f3f] mb-2">
            - Acesso a promoções com 6 horas de antecedência
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Coupon;
