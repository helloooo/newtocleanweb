function HomePage() {
  return (
    <div className="text-white bg-white-100 font-sans">

      {/* Hero Section */}
      <section className="container bg-gray-500 py-20 mt-8 mb-16 rounded-3xl mx-auto p-8 flex items-center justify-between">
        <div className="container mx-auto ">
          <h1 className="text-4xl font-bold mb-4"></h1>
          <div>
            <p className="mb-4 text-4xl font-bold"> ToClean platform</p>
            <p className="mb-4 text-xl font-bold">Discover the best and most affordable cleaning services</p>
            <p className="mb-4 text-xl font-bold">With our top-notch solutions, your space will sparkle like never before.</p>
          </div>
          <div className="mt-32 flex items-end justify-start space-x-4 mt-8">
            <img src="/assets/people.png" alt="Image" className="h-8 w-auto rounded-xl" />
            <p className="text-s">Happy clients are increasing.</p>
          </div>
        </div>
        <div>
          <img src="/assets/office.png" alt="Image" className="h-80 w-screen rounded-xl" />
        </div>
      </section>

      <section className="container bg-gray-500 py-10 mt-8 mb-6 rounded-3xl mx-auto p-8 flex flex-col items-center justify-center">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <p className="mb-4 text-4xl font-bold">GET FREE QUOTE FREE BOOKING </p>
          <p className="text-xl">Book 100+ professional service providers from ToClean app.</p>
          <p className="mt-8 text-4xl font-bold">Download App</p>


        </div>
        <div className="mt-2 flex items-center justify-center space-x-4 mt-8">
          <a href="https://apps.apple.com/us/app/toclean/id6476808708" target="_blank" rel="noopener noreferrer">
            <img src="/assets/app-store-dark.webp" alt="App Store" className="h-12 w-auto rounded-xl" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=au.com.toclean&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
            <img src="/assets/google-play-dark.webp" alt="Google Play" className="h-12 w-auto rounded-xl" />
          </a>
        </div>

      </section>



      <section className="bg-gray-500 mt-5 py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Item 1 */}
            <div className="p-4 bg-white text-black rounded-3xl shadow-current shadow-md">
              <h3 className="text-xl font-semibold mb-4">Appliance Cleaning</h3>
              <div className="flex items-center mb-2">
                <img src="/assets/air.png" alt="Air Conditioner" className="h-6 w-6 mr-2" />
                <p>Air Conditioner</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/bbq.png" alt="BBQ and Oven" className="h-6 w-6 mr-2" />
                <p>BBQ and Oven</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/washing.png" alt="Washing Machine" className="h-6 w-6 mr-2" />
                <p>Washing Machine</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/fridge.png" alt="Fridge Freezer" className="h-6 w-6 mr-2" />
                <p>Fridge Freezer</p>
              </div>
            </div>
            {/* Feature Item 2 */}
            <div className="p-4 bg-white text-black rounded-3xl shadow-current shadow-md">
              <h3 className="text-xl font-semibold mb-4">Roof Gutter Cleaning</h3>
              <div className="flex items-center mb-2">
                <img src="/assets/gutter.png" alt="Fridge Freezer" className="h-6 w-6 mr-2" />
                <p>Gutters</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/roof.png" alt="Fridge Freezer" className="h-6 w-6 mr-2" />
                <p>Roof</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/skylight.png" alt="Fridge Freezer" className="h-6 w-6 mr-2" />
                <p>Skylights</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/eco.png" alt="Fridge Freezer" className="h-6 w-6 mr-2" />
                <p>Solar Panels</p>
              </div>

            </div>
            {/* Feature Item 3 */}
            <div className="p-4 bg-white text-black rounded-3xl shadow-current shadow-md">
              <h3 className="text-xl font-semibold mb-4">Pressure Cleaning</h3>
              <div className="flex items-center mb-2">
                <img src="/assets/paving.png" alt="Air Conditioner" className="h-6 w-6 mr-2" />
                <p>Paving</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/brick.png" alt="BBQ and Oven" className="h-6 w-6 mr-2" />
                <p>Brick walls</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/sand.png" alt="Washing Machine" className="h-6 w-6 mr-2" />
                <p>Sand stone</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/conc.png" alt="Fridge Freezer" className="h-6 w-6 mr-2" />
                <p>Concrete</p>
              </div>
            </div>
            {/* Feature Item 4 */}
            <div className="p-4 bg-white text-black rounded-3xl shadow-current shadow-md">
              <h3 className="text-xl font-semibold mb-4">Office Cleaning</h3>
              <div className="flex items-center mb-2">
                <img src="/assets/workspace.png" alt="Air Conditioner" className="h-6 w-6 mr-2" />
                <p>Floor desks</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/lobby.png" alt="BBQ and Oven" className="h-6 w-6 mr-2" />
                <p>Lobby</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/kitchen.png" alt="Washing Machine" className="h-6 w-6 mr-2" />
                <p>Kitchen</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/lavatory.png" alt="Fridge Freezer" className="h-6 w-6 mr-2" />
                <p>Bathrooms</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Item 1 */}
            <div className="p-4 bg-white text-black rounded-3xl shadow-current shadow-md">
              <h3 className="text-xl font-semibold mb-4">Home Cleaning</h3>
              <div className="flex items-center mb-2">
                <img src="/assets/mop.png" alt="Air Conditioner" className="h-6 w-6 mr-2" />
                <p>Mop Floors</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/vacuum.png" alt="BBQ and Oven" className="h-6 w-6 mr-2" />
                <p>Vacuum Floors</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/kitchen.png" alt="Washing Machine" className="h-6 w-6 mr-2" />
                <p>Kitchen</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/toilet.png" alt="Fridge Freezer" className="h-6 w-6 mr-2" />
                <p>Bathrooms</p>
              </div>
            </div>
            {/* Feature Item 2 */}
            <div className="p-4 bg-white text-black rounded-3xl shadow-current shadow-md">
              <h3 className="text-xl font-semibold mb-4">Windows Mirrors Cleaning</h3>
              <div className="flex items-center mb-2">
                <img src="/assets/glass.png" alt="Air Conditioner" className="h-6 w-6 mr-2" />
                <p>Mirrors</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/window.png" alt="BBQ and Oven" className="h-6 w-6 mr-2" />
                <p>Windows </p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/shower.png" alt="Washing Machine" className="h-6 w-6 mr-2" />
                <p>Shower Screens</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/doors.png" alt="Fridge Freezer" className="h-6 w-6 mr-2" />
                <p>Glass Doors</p>
              </div>
            </div>
            {/* Feature Item 3 */}
            <div className="p-4 bg-white text-black rounded-3xl shadow-current shadow-md">
              <h3 className="text-xl font-semibold mb-4">Carpet Mattress Cleaning</h3>
              <div className="flex items-center mb-2">
                <img src="/assets/carpet.png" alt="Air Conditioner" className="h-6 w-6 mr-2" />
                <p>Carpet Steam Cleaning</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/carp.png" alt="BBQ and Oven" className="h-6 w-6 mr-2" />
                <p>Carpet Dry Cleaning</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/was.png" alt="Washing Machine" className="h-6 w-6 mr-2" />
                <p>Carpet Stain Remove</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/layers.png" alt="Fridge Freezer" className="h-6 w-6 mr-2" />
                <p>Mattress Cleaning</p>
              </div>
            </div>
            {/* Feature Item 4 */}
            <div className="p-4 bg-white text-black rounded-3xl shadow-current shadow-md">
              <h3 className="text-xl font-semibold mb-4">Construction Cleaning</h3>
              <div className="flex items-center mb-2">
                <img src="/assets/houses.png" alt="Air Conditioner" className="h-6 w-6 mr-2" />
                <p>After Builders Cleaning</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/house.png" alt="BBQ and Oven" className="h-6 w-6 mr-2" />
                <p>Post-renovation Cleaning</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/was.png" alt="Washing Machine" className="h-6 w-6 mr-2" />
                <p>Initial Cleaning</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/list.png" alt="Fridge Freezer" className="h-6 w-6 mr-2" />
                <p>Final Detailed Cleaning</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Item 1 */}
            <div className="p-4 bg-white text-black rounded-3xl shadow-current shadow-md">
              <h3 className="text-xl font-semibold mb-4">Pool Service Cleaning</h3>
              <div className="flex items-center mb-2">
                <img src="/assets/sport.png" alt="Air Conditioner" className="h-6 w-6 mr-2" />
                <p>Green Pool Cleaning</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/pool.png" alt="BBQ and Oven" className="h-6 w-6 mr-2" />
                <p>Reqular Cleaning</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/clean.png" alt="Washing Machine" className="h-6 w-6 mr-2" />
                <p>Pool Servicing</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/filter.png" alt="Fridge Freezer" className="h-6 w-6 mr-2" />
                <p>Pool Equipment Repair</p>
              </div>
            </div>
            <div className="p-4 bg-white text-black rounded-3xl shadow-current shadow-md">
              <h3 className="text-xl font-semibold mb-4">Car Detail Cleaning</h3>
              <div className="flex items-center mb-2">
                <img src="/assets/car.png" alt="Air Conditioner" className="h-6 w-6 mr-2" />
                <p>Mobile Car Wash Cleaning</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/car-service.png" alt="BBQ and Oven" className="h-6 w-6 mr-2" />
                <p>Exterior Detail Cleaning</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/steering.png" alt="Washing Machine" className="h-6 w-6 mr-2" />
                <p>Interior Detail Cleaning</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/car-wash.png" alt="Fridge Freezer" className="h-6 w-6 mr-2" />
                <p>Car Paint Protection</p>
              </div>
            </div>
            <div className="p-4 bg-white text-black rounded-3xl shadow-current shadow-md">
              <h3 className="text-xl font-semibold mb-4">Bond Back Cleaning</h3>
              <div className="flex items-center mb-2">
                <img src="/assets/rent.png" alt="Air Conditioner" className="h-6 w-6 mr-2" />
                <p>Bedrooms</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/deal.png" alt="BBQ and Oven" className="h-6 w-6 mr-2" />
                <p>Toilets and Laundry </p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/agreement.png" alt="Washing Machine" className="h-6 w-6 mr-2" />
                <p>Kitchen and Appliance </p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/car-wash.png" alt="Fridge Freezer" className="h-6 w-6 mr-2" />
                <p>All Cabinets and drawers</p>
              </div>
            </div>
            <div className="p-4 bg-white text-black rounded-3xl shadow-current shadow-md">
              <h3 className="text-xl font-semibold mb-4">ECO Green Cleaning</h3>
              <div className="flex items-center mb-2">
                <img src="/assets/mop.png" alt="Air Conditioner" className="h-6 w-6 mr-2" />
                <p>No Chemical Mop Floors</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/vacuum.png" alt="BBQ and Oven" className="h-6 w-6 mr-2" />
                <p>Vacuum Floors</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/kitchen.png" alt="Washing Machine" className="h-6 w-6 mr-2" />
                <p>No Chemical Kitchen</p>
              </div>
              <div className="flex items-center mb-2">
                <img src="/assets/toilet.png" alt="Fridge Freezer" className="h-6 w-6 mr-2" />
                <p>No Chemical Bathrooms</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Footer */}
      <footer className="bg-gray-500 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2016 www.tobuild.com.au All rights reserved.</p>
        </div>
      </footer>
    </div>

  );
}

export default HomePage;
