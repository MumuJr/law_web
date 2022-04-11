export const Faq = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="70326c9b-4a0f-429b-9c76-792941e326d5"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">A</span>
              </span>{' '}Virtual Immigration Law Firm</h2>
            <p className="text-base text-gray-700 md:text-lg">
            Focusing on both high-quality legal services and excellent client experiences.
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                Why virtual?
                </p>
                <p className="text-gray-700">
                Individuals seeking assistance in U.S. immigration processes reside all over the U.S. and the world.  
                  <br />
                  <br />
                  A virtual practice allows for flexibility in meeting times and locations which allows for speedier communication and work.
                </p>
              </div>
              
              
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                Can we still meet in person?
                </p>
                <p className="text-gray-700">
                If you reside in or near New Orleans or Kansas City, in-person appointments and consultations can be arranged by appointment only.
                  <br />
                  <br/>
                  There are no walk-ins available.
                  <br />
                  Please contact us to set one up as there are limited dates and times. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };