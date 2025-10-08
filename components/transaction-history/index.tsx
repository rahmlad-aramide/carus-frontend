import { useGetTransaction } from "@/queries/transactions";
import { LoadingComponent } from "../loading";
import { Empty } from "../empty";
import { ErrorComponent } from "../error-component";

const history = [
  {
    description: "You funded your wallet",
    date: "Fri, Feb 17 2023",
    time: "7:00am",
    amount: "N5,000",
    textColor: "text-[rgb(0,177,91)]",
  },

  {
    description: "Point converted to Airtime",
    date: "Fri, Feb 17 2023",
    time: "7:00am",
    amount: "N500",
    textColor: "text-[rgb(255,0,0)]",
  },

  {
    description: "You funded your wallet",
    date: "Tue, Feb 31 2023",
    time: "7:00am",
    amount: "N5,000",
    textColor: "text-[rgb(0,177,91)]",
  },

  {
    description: "You Withdrew",
    date: "Fri, Feb 17 2023",
    time: "7:00am",
    amount: "N3,000",
    textColor: "text-[rgb(255,0,0)]",
  },

  {
    description: "You funded your wallet",
    date: "Tue, Feb 31 2023",
    time: "7:00am",
    amount: "N5,000",
    textColor: "text-[rgb(0,177,91)]",
  },

  {
    description: "You funded your wallet",
    date: "Tue, Feb 31 2023",
    time: "7:00am",
    amount: "N5,000",
    textColor: "text-[rgb(0,177,91)]",
  },

  {
    description: "You funded your wallet",
    date: "Tue, Feb 31 2023",
    time: "7:00am",
    amount: "N5,000",
    textColor: "text-[rgb(0,177,91)]",
  },

  {
    description: "You funded your wallet",
    date: "Tue, Feb 31 2023",
    time: "7:00am",
    amount: "N5,000",
    textColor: "text-[rgb(0,177,91)]",
  },

  {
    description: "You funded your wallet",
    date: "Tue, Feb 31 2023",
    time: "7:00am",
    amount: "N5,000",
    textColor: "text-[rgb(0,177,91)]",
  },

  {
    description: "You funded your wallet",
    date: "Tue, Feb 31 2023",
    time: "7:00am",
    amount: "N5,000",
    textColor: "text-[rgb(0,177,91)]",
  },

  {
    description: "You funded your wallet",
    date: "Tue, Feb 31 2023",
    time: "7:00am",
    amount: "N5,000",
    textColor: "text-[rgb(0,177,91)]",
  },

  {
    description: "You funded your wallet",
    date: "Tue, Feb 31 2023",
    time: "7:00am",
    amount: "N5,000",
    textColor: "text-[rgb(0,177,91)]",
  },
];

export default function History() {
  const { data, isPending, isError, error, refetch } = useGetTransaction();
  const historyData = data?.data;

  return (
    <div className="mt-7">
      <p className="text-base md:text-xl font-bold mb-3">History</p>
      {isPending && (
        <div className="flex flex-col justify-center items-center border border-grey-10 rounded-[10px] p-2 space-y-3 h-[30vh] sm:h-[40vh] md:h-[50vh] xl:h-[70vh] xl:max-h-[70vh] xl:overflow-y-auto">
          <LoadingComponent description="Loading Transaction History..." />
        </div>
      )}
      {isError && (
        <div className="flex flex-col justify-center items-center border border-grey-10 rounded-[10px] p-2 space-y-3 h-[30vh] sm:h-[40vh] md:h-[50vh] xl:h-[70vh] xl:max-h-[70vh] xl:overflow-y-auto">
          <ErrorComponent error={error} refetch={refetch} />
        </div>
      )}
      {historyData && historyData.length === 0 && (
        <div className="flex flex-col justify-center items-center border border-grey-10 rounded-[10px] p-2 space-y-3 h-[30vh] sm:h-[40vh] md:h-[50vh] xl:h-[70vh] xl:max-h-[70vh] xl:overflow-y-auto">
          <Empty
            type="bill"
            description="You have no transaction history at the moment."
          />
        </div>
      )}
      {/* If there's data, use this */}
      {historyData && historyData.length > 0 && (
        <div className="border border-grey-10 rounded-[10px] p-2 space-y-3 xl:max-h-[70vh] xl:overflow-y-auto">
          {/* {history.map(
            ({ description, date, time, amount, textColor }, index) => (
              <div key={index} className="border-b border-grey-20 pb-2">
                <div className="flex justify-between">
                  <p className="text-sm md:text-base font-bold">{description}</p>
                  <p className={`text-sm md:text-base font-bold ${textColor}`}>
                    {amount}
                  </p>
                </div>
                <p className="text-grey-50 text-[9px] md:text-[13px] leading-loose">
                  {date} at {time}
                </p>
              </div>
            ),
          )} */}
        </div>
      )}
    </div>
  );
}
