import { formatDate } from "date-fns";

import { useGetTransaction } from "@/queries/transactions";
import { formatToLocaleNaira } from "@/lib/helpers";

import { Empty } from "../empty";
import { ErrorComponent } from "../error-component";
import { LoadingComponent } from "../loading";

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

const d = [
  {
    transaction_id: "cc3fde64-e6ca-4cf2-b39e-cb026be56dcf",
    amount: "56.00",
    charges: "0.00",
    date: "2026-01-21T12:08:23.455Z",
    type: "pickup",
    status: "fulfilled",
  },
  {
    transaction_id: "2ccebe55-7db4-4961-8783-086ac0058611",
    amount: "28.00",
    charges: "0.00",
    date: "2026-01-21T12:08:21.305Z",
    type: "dropoff",
    status: "fulfilled",
  },
  {
    transaction_id: "29740383-aea9-490d-8a91-433a0ef53447",
    amount: "1630.00",
    charges: "0.00",
    date: "2026-01-21T12:07:55.809Z",
    type: "redemption",
    status: "pending",
  },
  {
    transaction_id: "089e11c9-befd-42bf-a99c-dcd411dfafcf",
    amount: "163.00",
    charges: 0,
    date: "2026-01-21T11:07:55.104Z",
    type: "airtime",
    status: "pending",
  },
  {
    transaction_id: "6ea89e7a-0c00-424f-b7e5-ddbd32423650",
    amount: "183.00",
    charges: "0.00",
    date: "2026-01-21T12:07:16.505Z",
    type: "donation",
    status: "fulfilled",
  },
  {
    transaction_id: "12bbcc38-b566-4722-8f46-b6da4f1a2a1a",
    amount: "187.00",
    charges: "0.00",
    date: "2026-01-21T12:07:14.849Z",
    type: "donation",
    status: "fulfilled",
  },
  {
    transaction_id: "d5ac6dc7-9a91-4517-b33f-fc63d815f926",
    amount: "348.00",
    charges: "0.00",
    date: "2026-01-21T12:07:13.107Z",
    type: "donation",
    status: "fulfilled",
  },
];

export default function History() {
  const { data, isPending, isError, error, refetch } = useGetTransaction();
  const historyData = data?.data;

  return (
    <div className="mt-7">
      <p className="text-base md:text-xl font-bold mb-3">History</p>

      {isPending ? (
        <div className="flex flex-col justify-center items-center border border-grey-10 rounded-[10px] p-2 space-y-3 h-[30vh] sm:h-[40vh] md:h-[50vh] xl:h-[70vh] xl:max-h-[70vh] xl:overflow-y-auto">
          <LoadingComponent description="Loading Transaction History..." />
        </div>
      ) : isError ? (
        <div className="flex flex-col justify-center items-center border border-grey-10 rounded-[10px] p-2 space-y-3 h-[30vh] sm:h-[40vh] md:h-[50vh] xl:h-[70vh] xl:max-h-[70vh] xl:overflow-y-auto">
          <ErrorComponent error={error} refetch={refetch} />
        </div>
      ) : historyData && historyData.length === 0 ? (
        <div className="flex flex-col justify-center items-center border border-grey-10 rounded-[10px] p-2 space-y-3 h-[30vh] sm:h-[40vh] md:h-[50vh] xl:h-[70vh] xl:max-h-[70vh] xl:overflow-y-auto">
          <Empty
            type="bill"
            description="You have no transaction history at the moment."
          />
        </div>
      ) : (
        <div className="border border-grey-10 rounded-[10px] p-2 space-y-3 flex-1 xl:max-h-[80vh] xl:overflow-y-auto">
          {historyData?.map(
            ({ description, date, amount, status, type }, index) => (
              <div
                key={index}
                className={`border-b border-grey-20 pb-2 last:border-0 flex flex-col`}
              >
                <div className="flex justify-between gap-3">
                  <p className="text-sm md:text-base font-semibold">
                    {description}
                  </p>
                  <p
                    className={`text-sm md:text-base font-bold ${type === "cash" || type === "airtime" ? "text-red-500" : "text-[rgb(0,177,91)]"}`}
                  >
                    -{formatToLocaleNaira(amount)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-grey-50 text-[9px] md:text-[13px] leading-loose">
                    {formatDate(new Date(date), "MMM d, yyyy")} at{" "}
                    {formatDate(new Date(date), "hh:mm a")}
                  </p>
                  <span
                    className={`h-fit mt-auto text-xs font-medium px-1.5 py-0.8 rounded-full uppercase ${status === "paid" ? "bg-green-100 text-green-800" : status === "pending" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}
                  >
                    {status}
                  </span>
                </div>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
}
