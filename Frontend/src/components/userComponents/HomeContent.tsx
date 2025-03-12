import { Button } from "@headlessui/react";
import Seperator from "../Seperator";

const HomeContent = () => {
  return (
    <div>
      <section>
        <div className="flex flex-col md:flex-row text-justify mx-16 my-5 md:mx-20">
          <div className="md:w-1/2">
            <h5 className="text-xs sm:text-sm">Are you seeking support?</h5>
            <p>
              Facing a medical emergency and need help with hospital expenses?
              Don’t face it alone. Start your fundraiser today, share your
              story, and connect with compassionate donors who can make a
              difference. Whether it's for surgery, treatment, or recovery, we
              are here to support you every step of the way. Your journey to
              recovery begins with a single step.
            </p>
            <Button className="ml-auto rounded bg-brand-orange py-2 px-4 text-sm text-white data-[hover]:bg-orange-600 data-[active]:bg-orange-600">
              Start a fundraiser
            </Button>
          </div>
          <div className="my-4 md:w-1/2">
            <img
              src="/src/assets/nurse-helping-handicapped-man.svg"
              alt="img"
              className="w-2/3 md:w-1/2 h-auto object-cover mx-auto"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row text-justify mx-16 my-5 md:mx-20">
          <div className="my-4 md:w-1/2">
            <img
              src="/src/assets/helping-others.svg"
              alt="img"
              className="w-2/3 md:w-1/2 h-auto object-cover mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h5 className="text-left sm:text-justify">
              Extend a helping hand to those in need
            </h5>
            <p>
              Join hands to support medical emergencies. Your contribution can
              be the reason someone gets a second chance at life.
            </p>
            <Button className="ml-auto rounded bg-brand-orange py-2 px-16 text-sm text-white data-[hover]:bg-orange-600 data-[active]:bg-orange-600">
              Donate
            </Button>
          </div>
        </div>
      </section>
      {/* live datas */}
      <Seperator />
      <section className="flex items-center justify-center  text-brand-orange">
        <div className="m-3 sm:m-5 text-center">
          <h5>Rs.1000000</h5>
          <p className="text-brand-darkGreen">Total funds raised</p>
        </div>
        <div className="m-3 sm:m-5 text-center">
          <h5>100</h5>
          <p className="text-brand-darkGreen">Number of lives saved</p>
        </div>
        <div className="m-3 sm:m-5 text-center">
          <h5>10000</h5>
          <p className="text-brand-darkGreen">Total Donors</p>
        </div>
        <div className="m-3 sm:m-5 text-center">
          <h5>100</h5>
          <p className="text-brand-darkGreen">Ongoing campaigns</p>
        </div>
      </section>
      <Seperator />
      <h5 className="text-center mt-5 mb-3">Why Choose Us?</h5>
      <section className="w-full md:w-1/2 md:flex justify-center mx-auto">
        <div className="md:w-3/4 lg:w-1/2 flex justify-center items-center bg-brand-blue rounded m-2 p-3">
          <img src="/src/assets/money-plant.svg" alt="image" className="w-10" />
          <p className="text-left mx-3">
            Starting a fundraiser on Lifeboat is absolutely free.
          </p>
        </div>
        <div className="md:w-3/4 lg:w-1/2 flex justify-center items-center bg-brand-blue rounded m-2 p-3">
          <img src="/src/assets/phone.svg" alt="image" className="w-10" />
          <p className="text-left mx-3">
            24x7 assistance from dedicated fundraiser managers throughout your
            fundraising journey.
          </p>
        </div>
      </section>
      <section className="w-full md:w-1/2 md:flex justify-center mx-auto">
        <div className="md:w-3/4 lg:w-1/2 flex justify-center items-center bg-brand-blue rounded m-2 p-3">
          <img
            src="/src/assets/multiple-currency.svg"
            alt="image"
            className="w-10"
          />
          <p className="text-left mx-3">
            We accept donations in multiple currencies from anywhere in the
            world.
          </p>
        </div>
        <div className="md:w-3/4 lg:w-1/2 flex justify-center items-center bg-brand-blue rounded m-2 p-3">
          <img
            src="/src/assets/money-transfer.svg"
            alt="image"
            className="w-10"
          />
          <p className="text-left mx-3">
            You can withdraw your funds at any point during the course of your
            fundraiser.
          </p>
        </div>
      </section>
      <section className="w-full md:w-1/2 md:flex justify-center mx-auto">
        <div className="md:w-3/4 lg:w-1/2 flex justify-center items-center bg-brand-blue rounded m-2 p-3">
          <img src="/src/assets/update.svg" alt="image" className="w-10" />
          <p className="text-left mx-3">
            Get instant updates on your fundraiser's progress on a real-time
            dashboard.
          </p>
        </div>
        <div className="md:w-3/4 lg:w-1/2 flex justify-center items-center bg-brand-blue rounded m-2 p-3">
          <img
            src="/src/assets/multiple-transfer.svg"
            alt="image"
            className="w-10"
          />
          <p className="text-left mx-3">
            Accepts donations all cards, net banking, UPI and online wallets.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
