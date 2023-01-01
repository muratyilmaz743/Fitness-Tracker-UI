import React from "react";

export default function trackersStudents() {
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
                {/* <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  />
                </div> */}
                <div class="flex-1 min-w-0">
                  <p class="text-xl font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Gender: Female
                  </p>

                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Weight: 80
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Height:190
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Garth: 180
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Hip Cirfumference: 170
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neck Girth: 170
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Basal Metabolism: 27
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Body Mass Index: 27
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Smoking: Yes
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Sport Description: fsdfddsf
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Target: Lose Weight
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
