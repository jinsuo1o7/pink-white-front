import React from "react";
const features = [
  { name: "Spring Boot", description: "Spring Boot " },
  {
    name: "Data JPA + QueryDsl",
    description: "리포지토리 계층에서 Spring Data Jpa와 QueryDsl을 접목하여 ",
  },
  { name: "React JS", description: '6.25" x 3.55" x 1.15"' },
  {
    name: "Tailwind CSS",
    description: "Hand sanded and finished with natural oil",
  },
  { name: "Mockaroo", description: "Wood card tray and 3 refill packs" },
  {
    name: "Git hub",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

const descriptions = [
  "- 게시물 CRUD",
  "- 검색, 정렬, 페이징",
  "- 회원가입, 로그인",
];

export default function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Portfolio
          </h2>
          <ul className="mt-2">
            {descriptions.map((des) => (
              <li className="text-gray-500">{des}</li>
            ))}
          </ul>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
