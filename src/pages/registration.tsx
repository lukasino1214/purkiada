import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

const Registration = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center">
        <div className="">
          <h1>Aktuální ročník</h1>
          <br />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
              in lorem sit amet leo accumsan lacinia. Sed convallis magna eu
              sem. Vivamus porttitor turpis ac leo. Nullam justo enim,
              consectetuer nec, ullamcorper ac, vestibulum in, elit. In sem
              justo, commodo ut, suscipit at, pharetra vitae, orci. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Duis sapien nunc, commodo et, interdum suscipit,
              sollicitudin et, dolor. Curabitur sagittis hendrerit ante. In
              dapibus augue non sapien. Nulla non lectus sed nisl molestie
              malesuada. Quisque tincidunt scelerisque libero. Nam sed tellus id
              magna elementum tincidunt. Quis autem vel eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              Proin pede metus, vulputate nec, fermentum fringilla, vehicula
              vitae, justo. Mauris elementum mauris vitae tortor. Vivamus ac leo
              pretium faucibus. Duis bibendum, lectus ut viverra rhoncus, dolor
              nunc faucibus libero, eget facilisis enim ipsum id lacus. Neque
              porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Maecenas sollicitudin. Integer lacinia. Etiam quis
              quam. Duis condimentum augue id magna semper rutrum. Nullam
              faucibus mi quis velit. Fusce consectetuer risus a nunc. Nullam
              lectus justo, vulputate eget mollis sed, tempor sed magna. Mauris
              tincidunt sem sed arcu. Cras elementum. Nullam lectus justo,
              vulputate eget mollis sed, tempor sed magna. Integer vulputate sem
              a nibh rutrum consequat. Nam quis nulla. Vivamus porttitor turpis
              ac leo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt. Quis autem vel eum iure
              reprehenderit qui in ea voluptate velit esse quam nihil molestiae
              consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
              pariatur? Nullam sit amet magna in magna gravida vehicula. Morbi
              imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et
              sollicitudin sem purus in lacus. Fusce consectetuer risus a nunc.
              Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et,
              dolor. Morbi imperdiet, mauris ac auctor dictum, nisl ligula
              egestas nulla, et sollicitudin sem purus in lacus. Praesent id
              justo in neque elementum ultrices. Vestibulum fermentum tortor id
              mi. Donec iaculis gravida nulla. Aliquam id dolor. Morbi leo mi,
              nonummy eget tristique non, rhoncus non leo. Phasellus faucibus
              molestie nisl. Duis ante orci, molestie vitae vehicula venenatis,
              tincidunt ac pede. In laoreet, magna id viverra tincidunt, sem
              odio bibendum justo, vel imperdiet sapien wisi sed libero.
            </p>
          </div>
          <br />
          <form>
            <input type="text" name="name" placeholder="jméno" required />
            <br />
            <input type="text" name="surname" placeholder="přijmení" required />
            <br />
            <input type="email" name="email" placeholder="e-mail" required />
            <br />
            <input
              type="text"
              name="school"
              placeholder="základní škola"
              required
            />
            <br />
            <input type="checkbox" name="GDPR" placeholder="" required />
            Souhlasíte s podmínkami?
          </form>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;