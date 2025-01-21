const SubscribeBlock = () => {
  return (
    <>
      <section className="text-center text-black">
        <h2 className="text-4xl mb-8 font-semibold">
          Subscribe to our newsletter
        </h2>
        <p className="text-gray-500 mb-4">
          By signing up, you agree to receive awesome emails and updates.
        </p>
        <div className="bg-gray-200 flex justify-between  mx-auto rounded-full w-fit">
          <input
            className="bg-gray-200 px-6 py-2 rounded-full max-w-[30vw] w-100"
            type="text"
            placeholder="your email address"
          />
          <button className="bg-black text-white py-2 px-4 rounded-full">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
};

export default SubscribeBlock;
