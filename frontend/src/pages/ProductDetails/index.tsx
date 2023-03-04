import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import { Link } from 'react-router-dom';
import './styles.css';

const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <div className="base-card product-details-card">
        <Link to="/products">
          <div className="goback-container">
            <ArrowIcon />
            <h2>Voltar</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img
                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                alt="Nome produto"
              />
            </div>
            <div className="name-price-container">
              <h1>Nome do produto</h1>
              <ProductPrice price={2343.32} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do produto</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis eligendi eveniet deleniti. Animi architecto vero
                quos. Minus exercitationem esse quisquam, perspiciatis culpa
                dolores nulla voluptas maiores. Repellat numquam eaque delectus
                hic similique, expedita quisquam. Repellat accusamus soluta
                nihil provident ea impedit? Ut reiciendis atque vel nostrum
                aliquid quam eos, incidunt aspernatur ex deleniti impedit
                quaerat beatae! Ratione qui consequatur perferendis repellendus
                aut rem tenetur nesciunt dolorum ex exercitationem, fugiat
                quaerat voluptatem consectetur nostrum et excepturi mollitia
                tempore soluta magni, sint praesentium ipsa quod non! Tempore
                itaque provident necessitatibus maxime, fuga ab dicta
                accusantium accusamus alias adipisci quas consectetur expedita
                suscipit repellendus distinctio nobis, delectus quisquam quasi
                dolore officiis cum. Ab blanditiis deserunt optio eveniet autem
                nostrum id alias ex? Porro beatae est quod voluptatem
                exercitationem a labore itaque nesciunt, tempore at consectetur
                dolore nobis quia hic ratione laudantium deserunt eos
                consequuntur! Nostrum omnis dolores cum ullam mollitia, non ea
                enim. Maiores, laboriosam omnis hic dignissimos adipisci
                accusamus dolorum corrupti commodi porro alias perspiciatis
                consequuntur aperiam libero nostrum reiciendis mollitia?
                Deserunt ea consequuntur aut, quaerat consectetur architecto.
                Maxime impedit voluptate porro, accusamus ullam sit vero
                obcaecati error, minus amet consectetur eligendi ea eos
                veritatis numquam perferendis neque sequi. A quis quas
                voluptatum doloremque perspiciatis, cum harum nesciunt voluptas
                voluptates quidem libero omnis porro suscipit ut tempora facere
                repellendus laudantium perferendis cupiditate similique amet?
                Labore facilis exercitationem, pariatur fuga repellendus eum
                error deleniti porro laborum eius, modi natus doloribus maiores
                reprehenderit, vero eligendi magni! Rem cupiditate quasi totam
                nostrum consequatur quos odit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
