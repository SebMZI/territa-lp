import Link from "next/link";

const Button = ({ containerStyle }) => {
  return (
    <Link href={"https://buy.stripe.com/8wM9Ds7xQ2oo8GA8wx"} target="_blank">
      <button
        className={`${containerStyle} h-[50px] bg-[linear-gradient(93deg,#E66B0E_32.87%,#EE7519_71.91%)] rounded-[10px] text-lg text-white shadow-btn active:shadow-btnHover active:text-[#FFFFFF] active:bg-[linear-gradient(152deg,#D76006_-23.13%,#FB8F3D_103.83%)]`}
      >
        Je commande ma page
      </button>
    </Link>
  );
};

export default Button;
