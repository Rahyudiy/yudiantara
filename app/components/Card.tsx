interface Props {
  alt: string;
  title: string;
  image: string;
  description: string;
  link: string;
}

export const Card = ({ alt, title, image, description, link }: Props) => {
  return (
    <div className="min-w-full p-4 bg-white rounded-md h-full  ">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full h-70 rounded-sm overflow-hidden">
          {/* Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            aria-label={alt}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-white to-transparent" />
        </div>

        <h4 className="font-semibold mt-3">{title}</h4>
        <p className="text-[#7c7c7c] mt-1 leading-7">{description}</p>
      </a>
    </div>
  );
};
