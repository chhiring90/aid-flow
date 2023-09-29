import React, { useState, useEffect } from 'react'
import DonationHub from '../components/donation-hub';
// import CashHub from '../components/cash-hub';
import { Tab } from '@headlessui/react';
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
import classNames from '../helpers/class-names';

// const stripePromise = loadStripe("pk_test_51IshmUGA76ACgMclqLJaIUaB2fo8rU1k4iN4RcEBIUMJOb4rcQEq43p2fBtHdpdZIadsEuNzpdU5ybkym64VnIfv00gOnExXn3");

function Donation() {
  let [categories] = useState({
    cash: 'cash hub',
    goods: <DonationHub />
  })

  // const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  // const appearance = {
  //   theme: 'stripe',
  // };

  // const options = {
  //   clientSecret,
  //   appearance,
  // };

  return (<>
    <section className="flex min-h-full flex-1 flex-col justify-center mx-auto max-w-5xl px-12 py-12 lg:px-8">
      <div className="w-full px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-black-300 hover:bg-white/[0.12] hover:text-teal'
                  )
                }
              >
                {category.toUpperCase()}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((cat, idx) =>
              <Tab.Panel key={idx}>{cat}</Tab.Panel>
            )}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </section>
  </>)
}

export default Donation;