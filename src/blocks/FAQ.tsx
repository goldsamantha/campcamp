import Toggle from "../Toggle";


const FAQ = () => {
  return (
    <div>
      <Toggle title="FAQs">
        <div className="text-xl">
          <p>
             🏕️ Accommodations:
          </p>
          <p className="text-base pb-4"> 
            We have use of the beautiful 34 acre Camp Gregory which includes lake access, a host of communal cabins and bunk beds with communal bathrooms. We can’t accommodate pets in the cabins. We welcome you to stay with us at the camp or come for the day!
          </p>


          <p>
            🌯 Food:
          </p>
          <p className="text-base pb-4"> 
            We will provide breakfast and dinner meals through the weekend (see schedule for exact timings) along with snacks and lunch supplies 
          </p>

          
          <p>
🎨 Events
          </p>
          <p className="text-base pb-4"> 
Camp Camp is choose your own adventure, while you can attend any of the events on the schedule you’re also welcome to take time at your own pace and rest in the camp woods or in the lake.
          </p>



          <p>
            🧳Packing
          </p>
          <p className="text-base pb-4">
            We will have rustic bunk bed cabins so think of anything you might need for a kids camp weekend: a bathing suit for end of summer lake dips, a sleeping bag, sunscreen. Use the following list:
          </p>
          <ul className="list-disc pl-6">
            <li>Sleeping bag, pillow</li>
            <li>Towel, toiletries </li>
            <li>Bathing suit </li>
            <li>Headlamp and/or flashlight </li>
            <li>warm socks, sweatshirt, and jammies for cool nights </li>
            <li>Rain shell in case </li>
            <li>(optional) Washed cotton/wool to dye with indigo </li>
            <li>(optional) camping chair to pull up by the fire and/or hammock </li>
            <li>BYOB – we will have plenty of food for meals and snacking, and a variety of beverages but feel free to bring your own </li>
            as well and we can store in the industrial fridge
            <li>A piece of art that you want to show! We can accommodate outdoor and indoor art! Reach out to Goldsam individually if </li>
            you want to install something!
          </ul>
        </div>
      </Toggle>
    </div>
  );
}

export default FAQ;