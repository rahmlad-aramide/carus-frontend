"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import History from "@/components/transaction-history";
import ConvertPoints from "@/components/convert-points";
import RedeemPoints from "@/components/redeem-points";
import { useDonationCampaigns } from "@/queries/donation";
import { Donation } from "@/types/donation";
import { LoadingComponent } from "@/components/loading";
import { Empty } from "@/components/empty";
import { useWallet } from "@/queries/wallet";

export default function Wallet() {
  const [showConvertPoints, setShowConvertPoints] = useState(false);
  const [showRedeemPoints, setShowRedeemPoints] = useState(false);

  const { data: wallet, isLoading: loadingWallet, error } = useWallet();
  const { data, isLoading, isError } = useDonationCampaigns();
  const campaigns: Donation[] = data?.data || [];
  const topCampaigns = campaigns.slice(0, 3);

  if (loadingWallet) {
    return (
      <div className="col-span-full mt-25 flex flex-col justify-center items-center border border-grey-10 rounded-[10px] p-2 space-y-3 h-[250px] text-center py-10">
        <LoadingComponent description="Fetching wallet..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">
            Failed to fetch wallet. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative bg-gradient-to-r from-[rgba(255,237,193,0.3)] to-[rgba(171,205,188,1)] h-[148px] lg:h-[232px] w-full rounded-[22px] lg:rounded-[30px] p-5 lg:p-8 overflow-hidden mt-22 md:mt-32">
        <div className="absolute top-0 left-0 w-[250px] md:w-[318px] h-[148px] lg:h-[232px] lg:w-[500px] xl:w-[700px]">
          <Image src="/Line.svg" alt="wave" fill className="object-cover" />
        </div>

        <div className="flex flex-col justify-between h-28 lg:h-45 relative z-10">
          <div className="flex items-center justify-between">
            <p className="text-[9px] lg:text-xl text-primary-80">
              Points
              <br />{" "}
              <span className="text-[11px] lg:text-2xl font-black">
                {wallet?.data?.points ?? 0}
              </span>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Button
              onClick={() => setShowRedeemPoints(true)}
              className="py-5 lg:py-6 w-[150px] lg:w-[180px] text-[13px] lg:text-base text-white bg-[rgb(2,105,55)] rounded-[10px] cursor-pointer flex items-center justify-center gap-2"
            >
              <Image
                src="/import.svg"
                alt="import-icon"
                width={16}
                height={16}
                className="object-contain w-4 h-4 lg:w-5 lg:h-5"
              />
              Redeem Points
            </Button>
            <p className="text-[11px] lg:text-base text-primary-80 text-right">
              Total Balance <br />
              <span className="text-2xl lg:text-[33px] font-black">
                ₦{wallet?.data.naira_amount?.toLocaleString() ?? 0}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="xl:flex gap-12">
        <div className="xl:w-3/7">
          <div className="bg-[rgb(251,247,231)] rounded-[30px] w-full min-h-[123px] lg:min-h-[165px] p-5 lg:p-8 mt-8">
            <p className="text-base lg:text-[28px] font-bold lg:font-black">
              Convert Points to Giftcard
            </p>
            <p className="text-[9px] lg:text-sm">
              Powered by{" "}
              <span className="text-sm lg:text-base font-bold">Bitgifty</span>
            </p>
            <div className="flex items-end justify-end">
              <Button
                onClick={() => setShowConvertPoints(true)}
                className="py-5 lg:py-3 w-[193px] lg:w-[180px] text-sm text-white bg-[rgb(2,105,55)] rounded-[10px] cursor-pointer flex items-center justify-center gap-2 mt-1 lg:mt-3"
              >
                <Image
                  src="/convertshape-2.svg"
                  alt="convert-shape"
                  width={16}
                  height={16}
                  className="object-contain w-4 h-4 lg:w-5 lg:h-5"
                />
                Convert Points
              </Button>
            </div>
          </div>
          <div className="hidden xl:block sticky mt-10">
            <History />
          </div>
        </div>

        <div className="mt-7 md:mt-10 xl:mt-8 xl:w-4/7">
          <div className="flex items-center justify-between mb-3">
            <p className="text-grey-90 text-base lg:text-xl font-bold">
              Donate
            </p>
            <Link
              href="/wallet/donate"
              className="text-primary-60 text-sm xl:text-base"
            >
              See All
            </Link>
          </div>

          {(isError || isLoading || topCampaigns.length === 0) && (
            <div className="flex flex-col items-center justify-center border border-grey-10 rounded-[10px] p-2 h-[250px] space-y-3 xl:overflow-y-auto w-full">
              {isError && (
                <div className="text-center">
                  <p className="text-red-500">
                    Failed to load campaigns. Please try again later.
                  </p>
                </div>
              )}

              {isLoading && (
                <LoadingComponent description="Loading campaigns..." />
              )}

              {!isLoading && !isError && topCampaigns.length === 0 && (
                <Empty description="No donation campaigns available at the moment." />
              )}
            </div>
          )}

          {!isLoading && !isError && topCampaigns.length > 0 && (
            <div className="mt-4 grid grid-cols-1 gap-4">
              {topCampaigns.map((campaign) => {
                const target = Number(campaign.target) || 0;
                const raised = Number(campaign.amountRaised) || 0;

                const progress = target > 0 ? (raised / target) * 100 : 0;

                return (
                  <div
                    key={campaign.id}
                    className="bg-[rgb(243,243,243)] rounded-[10px] xl:rounded-[18px] px-4 py-5 xl:py-6 mb-4 lg:mb-6 w-full xl:w-[560px]"
                  >
                    <div className="flex items-center gap-4 lg:gap-5 xl:gap-8">
                      <Image
                        src={campaign.image || "/Frame91.svg"}
                        alt={campaign.title}
                        width={96}
                        height={96}
                        className="object-cover rounded-[10px] xl:w-[152px] xl:h-[152px]"
                      />

                      <div className="flex-1">
                        <p className="text-sm lg:text-base xl:text-xl font-bold lg:leading-loose">
                          {campaign.title}
                        </p>

                        <p className="text-[9px] lg:text-sm xl:text-base font-bold">
                          ₦{raised.toLocaleString()}{" "}
                          <span className="text-grey-40 font-regular">
                            Raised
                          </span>
                        </p>

                        <div className="flex items-center gap-5 mt-2 w-full">
                          <div className="w-full h-[4px] bg-primary-10 rounded-[20px]">
                            <div
                              className="h-full bg-[rgb(86,155,122)] rounded-[20px]"
                              style={{ width: `${Math.min(progress, 100)}%` }}
                            />
                          </div>
                          <p className="text-grey-90 text-[9px] lg:text-sm float-right">
                            {Math.round(progress)}%
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end mt-1 lg:mt-1">
                      <Link
                        href={`/wallet/donate-earnings/${campaign.id}`}
                        className="cursor-pointer bg-primary-60 rounded-[10px] w-[174px] xl:gap-2 h-10 flex items-center justify-center gap-2 hover:bg-primary-50"
                      >
                        <Image
                          src="/gift2.png"
                          alt="gift-icon"
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                        <span className="text-white text-[13px]">
                          Donate Earnings
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="xl:hidden mt-8">
            <History />
          </div>

          {showConvertPoints && (
            <ConvertPoints onBack={() => setShowConvertPoints(false)} />
          )}
          {showRedeemPoints && (
            <RedeemPoints onBack={() => setShowRedeemPoints(false)} />
          )}
        </div>
      </div>
    </div>
  );
}
