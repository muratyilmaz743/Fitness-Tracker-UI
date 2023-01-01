import React from "react";

export default function trackersStudents({
  fullName,
  weight,
  height,
  garth,
  hip,
  neck,
  basal,
  massIndex,
  smoking,
  sportDesc,
  target,
  gender
}) {
  return (
    // className="w-full flex justify-center"
    <div className="flex">
      <div class=" max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          {/* <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            My Students
          </h5> */}
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p class="text-xl font-medium text-gray-900 truncate dark:text-white">
                    {fullName}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Gender: {gender}
                  </p>

                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Weight: {weight}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Height:{height}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Garth: {garth}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Hip Cirfumference: {hip}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neck Girth: {neck}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Basal Metabolism: {basal}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Body Mass Index: {massIndex}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Smoking: {smoking}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Sport Description: {sportDesc}
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Target: {target}
                  </p>
                </div>
                {/* <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
                </div> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
