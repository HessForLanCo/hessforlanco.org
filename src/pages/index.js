import TwoColumnImageLayout from '../layouts/TwoColumnImageLayout';

import marqueeImage from '../static/img/ChrisShakingHands.jpg';
const marqueeImageAlt = "Chris out in Lancaster meeting constituents";

export default function Home() {
  return (
    <TwoColumnImageLayout imageUrl={marqueeImage} imageAlt={marqueeImageAlt}>
      <main>
        <h1>Lancaster County has a choice for Controller for the first time in 20 years.</h1>
        <h2>Chris Hess is the better choice.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim tortor at auctor urna nunc. Eu mi bibendum neque egestas congue quisque egestas. Integer feugiat scelerisque varius morbi enim. Condimentum vitae sapien pellentesque habitant morbi tristique. Est ante in nibh mauris. Pretium vulputate sapien nec sagittis. Leo vel fringilla est ullamcorper eget. Erat velit scelerisque in dictum. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Ornare aenean euismod elementum nisi. Amet consectetur adipiscing elit duis.
        </p>
      </main>
    </TwoColumnImageLayout>
  );
}
