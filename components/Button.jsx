import Link from "next/link";

const Button = ({ containerStyle }) => {
  return (
    <Link href={"#"}>
      <button
        className={`${containerStyle} h-[50px] bg-[linear-gradient(93deg,#E66B0E_32.87%,#EE7519_71.91%)] rounded-[10px] text-lg text-white shadow-btn active:shadow-btnHover active:text-[#FFFFFF] active:bg-[linear-gradient(152deg,#D76006_-23.13%,#FB8F3D_103.83%)]`}
      >
        Commander ma page
      </button>
    </Link>
  );
};

export default Button;
