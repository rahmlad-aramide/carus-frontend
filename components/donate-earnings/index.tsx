import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Donation } from "@/types/donation";
import { useContributeToCampaign } from "@/queries/donation";

type DonateEarningsProps = {
  onBack: () => void;
  campaign: Donation;
};

export default function DonateEarnings({
  onBack,
  campaign,
}: DonateEarningsProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const contributeMutation = useContributeToCampaign();

  const progress =
    campaign.goal_amount > 0
      ? (campaign.collected_amount / campaign.goal_amount) * 100
      : 0;

  const handleDonate = () => {
    const amount = selected || parseInt(customAmount);

    if (!amount || amount <= 0) {
      return;
    }

    contributeMutation.mutate(
      { campaignId: campaign.id, amount },
      {
        onSuccess: () => {
          onBack();
        },
      },
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/10 flex items-center justify-center">
      <div className="relative bg-white shadow-md w-[90%] max-w-md lg:max-w-3xl max-h-screen overflow-y-auto md:rounded-[20px] p-5 lg:p-8 xl:px-10 xl:py-7">
        {/* Header */}
        <div className="flex items-center gap-3 mb-7 lg:mb-2">
          <button
            onClick={onBack}
            className="md:hidden bg-[#F3F3F3] rounded-[10px] text-[#292D32] p-2"
            aria-label="Go Back"
          >
            <ArrowLeft />
          </button>

          <p className="text-base md:text-xl font-black">Donate</p>
        </div>

        {/* Close Button */}
        <button
          onClick={onBack}
          className="absolute top-3 right-2 flex items-center justify-center text-[#FF6161] bg-white text-xl hover:bg-[#FF6161]/10 rounded-full w-8 h-8 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT COLUMN */}
          <div>
            <div className="rounded-[10px] xl:rounded-[18px]">
              <Image
                src={campaign.image || "/Frame90.svg"}
                alt={campaign.title}
                width={340}
                height={200}
                className="object-cover rounded-[9px] w-full h-auto max-h-[150px] md:max-h-[220px] lg:max-h-[200px]"
              />

              <div className="space-y-2 mt-2">
                <p className="text-sm lg:text-base xl:text-xl font-bold">
                  {campaign.title}
                </p>

                <div className="flex justify-between">
                  <p className="text-[9px] lg:text-[11px] text-grey-40 leading-normal">
                    Raised
                    <br />
                    <span className="text-[11px] lg:text-sm text-grey-100 font-bold">
                      ₦{(campaign.collected_amount ?? 0).toLocaleString()}
                    </span>
                  </p>

                  <p className="text-[9px] lg:text-[11px] text-grey-40 leading-normal">
                    Target
                    <br />
                    <span className="text-[11px] lg:text-sm text-grey-100 font-bold">
                      ₦{(campaign.goal_amount ?? 0).toLocaleString()}
                    </span>
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-[4px] bg-primary-10 rounded-[20px] mt-3">
                  <div
                    className="h-full bg-[rgb(86,155,122)] rounded-[20px]"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>

                {/* Donation Count + Days Left */}
                <div className="flex items-center gap-8 mt-3">
                  {campaign.donations_count && (
                    <div className="flex items-center gap-1 lg:gap-2">
                      <div className="bg-[rgba(232,232,232)] w-4 h-4 lg:w-6 lg:h-6 rounded-full flex items-center justify-center">
                        <Image
                          src="/profile-2user.svg"
                          alt="profile-icon"
                          width={10}
                          height={10}
                          className="object-contain lg:w-3 lg:h-3"
                        />
                      </div>
                      <p className="text-[9px] lg:text-[11px] text-grey-90">
                        {campaign.donations_count} Donations
                      </p>
                    </div>
                  )}

                  {campaign.days_left && (
                    <div className="flex items-center gap-1 lg:gap-2">
                      <div className="bg-[rgba(232,232,232)] w-4 h-4 lg:w-6 lg:h-6 rounded-full flex items-center justify-center">
                        <Image
                          src="/clock.svg"
                          alt="clock-icon"
                          width={10}
                          height={10}
                          className="object-contain lg:w-3 lg:h-3"
                        />
                      </div>
                      <p className="text-[9px] lg:text-[11px] text-grey-90">
                        {campaign.days_left} Days left
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Powered By */}
            <div className="bg-[rgb(243,243,243)] rounded-[10px] flex items-center gap-6 p-3 mt-3 lg:mt-5 mb-3">
              <div className="bg-white rounded-[8px] p-3 flex items-center justify-center">
                <Image
                  src="/pngwing.svg"
                  alt="png-icon"
                  width={35}
                  height={35}
                  className="object-contain"
                />
              </div>

              <div className="space-y-1">
                <p className="text-[9px] lg:text-[11px] text-[rgb(109,109,109)]">
                  Powered by
                </p>
                <p className="text-sm lg:text-base font-bold">
                  Lawma Trash Center
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-[11px] md:text-sm text-justify leading-normal md:leading-snug mt-6">
              {campaign.description ||
                "By donating your earnings, you can support the efforts of these organizations and contribute to a cleaner and healthier environment for everyone."}
            </p>
          </div>

          {/* RIGHT COLUMN (SELECT POINT + DONATE BUTTON) */}
          <div>
            <p className="text-sm md:text-base mt-5">Select Point</p>

            <div className="grid grid-cols-3 gap-3 lg:gap-y-8 mt-3 mb-10">
              {[1000, 2000, 3000, 4000, 5000, 6000].map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelected(amount);
                    setCustomAmount("");
                  }}
                  className={`rounded-[10px] w-full py-5 lg:py-6 border ${
                    selected === amount
                      ? "border-primary-50 text-primary-60 font-bold"
                      : "border-grey-10 text-grey-40"
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>

            <label htmlFor="points" className="text-sm md:text-base block">
              Enter Point
              <input
                id="points"
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelected(null);
                }}
                placeholder="Enter point manually"
                className="rounded-[10px] w-full border-none p-3 bg-[rgb(243,243,243)] mt-2"
              />
            </label>

            <Button
              onClick={handleDonate}
              disabled={
                contributeMutation.isPending || (!selected && !customAmount)
              }
              className="cursor-pointer rounded-[10px] w-full h-10 flex items-center justify-center mt-8"
            >
              <Image
                src="/gift2.png"
                alt="gift-icon"
                width={16}
                height={16}
                className="object-contain"
              />
              <span className="text-white text-sm">
                {contributeMutation.isPending ? "Processing..." : "Donate Now"}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
