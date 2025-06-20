import CountUp from "./Counter"; 

type StatItem = {
  value: number;
  label: string;
};

const stats: StatItem[] = [
  { value: 380, label: "Projects Completed" },
  { value: 420, label: "Satisfied Clients" },
  { value: 2000, label: "Positive Reviews" },
];

export default function Stats() {
  return (
     <section className="max-w-4xl mx-auto py-3">
      <div className="flex flex-col lg:flex-row justify-around gap-10 text-center border-gray-700 py-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 px-4 lg:border-l lg:first:border-none border-gray-700"
          >
            <h2 className="text-6xl font-extrabold text-[#e0f11f]">
              <CountUp
                from={0}
                to={stat.value}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </h2>
            <p className="font-medium text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
