type PreviewCardProps = {
  category: string;
  image: string;
  price: number;
  title: string;
};

export default function PreviewCard({
  category,
  image,
  price,
  title,
}: PreviewCardProps) {
  return (
    <div>
      {category} {price}
    </div>
  );
}
