import Link from "next/link";

const Button = ({ containerStyle }) => {
  return (
    <Link href={"#"}>
      <button
        className={`${containerStyle} h-[50px] bg-ascent rounded-[10px] text-lg text-white shadow-btn `}
      >
        Commander ma page
      </button>
    </Link>
  );
};

export default Button;
