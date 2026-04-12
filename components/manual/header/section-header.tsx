type HeaderType = {
  heading: string;
  subHeading: string;
};
export default function SectionHeader({ heading, subHeading }: HeaderType) {
  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">{subHeading}</p>
      </div>
    </div>
  );
}
