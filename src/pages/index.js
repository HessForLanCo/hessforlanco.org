import Layout from '../components/Layout';

import logoImage from '../static/img/HessForController.svg'

export default function Home() {
  return (
    <Layout>
      <main>
        <img src={logoImage} alt="Hess for Controller logo" />
      </main>
    </Layout>
  );
}
