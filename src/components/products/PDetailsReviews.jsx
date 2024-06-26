import { calculateRates, dateFormat } from "@/utils/helper";
import React from "react";

const PDetailsReview = ({ review }) => {
  return (
    <div className="">
      <p className="mt-5 mb-3">⭐⭐⭐⭐⭐ ({review.rating}) Stars</p>
      <p className="font-semibold ">{review.comment}</p>
      <div className="flex flex-wrap items-center gap-2 text-sm tracking-tight text-gray-500">
        <p>{review.reviewerName}</p>
        <p>{dateFormat(review.date)}</p>
      </div>
    </div>
  );
};

export default PDetailsReview;
