import "./App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

// Images
import HeaderImage from "./img/main.svg";
import Dbias from "./img/dbias.svg";
import Dbias1 from "./img/dbias1.svg";
import IncExc from "./img/incexc.svg";
import ExcExp from "./img/excexp.svg";
import SpecDis from "./img/specdis.svg";
import SpecDis1 from "./img/specdis1.svg";
import IIDP from "./img/iidp.svg";
import Foot from "./img/foot.svg";

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <div className="Tan">
          <Container>
            <h1>Inclusive Design Practices</h1>
            <Row>
              <Col
                sm={12}
                md={6}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="imageHolder">
                  <Image src={HeaderImage} fluid className="headerImg" />
                </div>
              </Col>
              <Col>
                <h2>About this website</h2>
                <p>
                  Self-identification is all that’s required to be a designer.
                  Everyone designs, not just software engineers and information
                  professionals. Teachers design lessons, retail workers design
                  customer experiences, chefs design meals. People design their
                  living rooms when shopping for furniture, and people design
                  vacations when they make itineraries.
                </p>
                <p>
                  This website strives to promote awareness around inclusive
                  design practices and principles,{" "}
                  <strong>
                    empowering everyone to design with themselves and others in
                    mind.
                  </strong>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="White">
          <Container>
            <h2>Designer Bias</h2>
            <Row>
              <Col sm={12} md={9}>
                <p>
                  Unintentional or not, designer bias leads to exclusion, often
                  as a result of assumptions made of the potential user. For
                  instance, mainstream video game controllers assume a user has
                  two hands with ample finger dexterity similar to the designers
                  of these controllers.
                </p>
                <p>
                  Bias <strong>always</strong> manifests within design. It’s not
                  to be avoided, but <strong>addressed</strong> and{" "}
                  <strong>discussed</strong>.
                </p>
                <p>
                  These assumptions relate to systems of power that exist within
                  our cultures and societal structures in how these systems
                  reinforce themselves through the{" "}
                  <strong>power of forgetting</strong>: forgetting the
                  privileges we are given based on our bodies, forgetting that
                  we cannot empathize others’ experiences differ from our own,
                  forgetting that the socially accepted and normalized aspects
                  of ourselves are not “average”, forgetting, forgetting,
                  forgetting (Allen).
                </p>
              </Col>
              <Col>
                <Image src={Dbias} fluid className="headerImg" />
              </Col>
            </Row>
            <Row>
              <Col
                sm={12}
                md={6}
                className="d-flex align-items-center justify-content-center"
              >
                <Image src={Dbias1} fluid />
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <p>
                  <i>
                    <small>
                      Only the designer, the smaller triangle, can fit into the
                      hole it designed in a box. What could the designer do
                      differently to make sure all these shapes could fit?
                    </small>
                  </i>
                </p>
              </Col>
            </Row>

            <h3>
              <strong>Reflect:</strong>
              <i>
                {" "}
                What privileges given to you are easy to forget about? Why? How
                could this translate into your design process?
              </i>
            </h3>
          </Container>
        </div>
        <div className="Tan">
          <Container>
            <h2>Inclusion // Exclusion</h2>
            <Row>
              <Col sm={12} md={9}>
                <p>
                  Inclusion and exclusion are not moral, neither good nor bad.
                  In fact, intentional exclusion in design can increase safety,
                  such as child-lock devices, which purposefully exclude
                  children often for safety concerns or reduce risk of injury.
                </p>
                <p>
                  However, this justification often isn't the case, and
                  exclusion results in a design that fails to meet the needs of
                  the user.{" "}
                  <strong>
                    The responsibility of inclusion rests on the designer.
                  </strong>{" "}
                  It's the difference between saying "They're unreliable in
                  meeting deadlines" and "The lack of flexibility in this class
                  does not meet the student's needs."
                </p>
                <p>
                  A design will always include and exclude — often influenced by
                  systems of oppression and implicit bias of those designing.{" "}
                  <strong>
                    As designers, we hold power in questioning and choosing how
                    to participate within a cycle of exclusion{" "}
                  </strong>
                  (Johnson).
                </p>
              </Col>
              <Col>
                <Image src={IncExc} fluid />
              </Col>
            </Row>
            <h3>
              <strong>Reflect:</strong>
              <i>
                {" "}
                Think of a recent instance where you designed (a space, an
                experience, an object). What assumptions were made about the
                needs of those interacting with this design? Who’s included and
                excluded?
              </i>
            </h3>
          </Container>
        </div>
        <div className="White">
          <Container>
            <h2>Exclusion Experts</h2>
            <Row>
              <Col sm={12} md={9}>
                <p>
                  Intending to include historically marginalized populations or
                  people with historically marginalized identities is only a
                  starting point. A designer who does not use a wheelchair fails
                  to recognize the experiences of wheelchair users if they
                  attempt to empathize by “testing” one themselves. With good
                  intentions, this illusion of empathy and fear of difference
                  separates us (Lorde).
                </p>
                <p>
                  In the field of inclusive design, individuals excluded as a
                  result of a design are <strong>exclusion experts</strong>{" "}
                  (Holmes). They are experts in understanding why a design fails
                  to meet their needs and how to solve it. Even if a designer is
                  an exclusion expert themself, no single individual can
                  represent an entire spectrum of experiences within a
                  population.
                </p>
                <p>
                  Through practices such as participatory design, discussed
                  later on,{" "}
                  <strong>
                    inclusive designers need to acknowledge the systems of
                    oppression that separate people by listening and including
                    exclusion experts in the design process.
                  </strong>
                </p>
              </Col>
              <Col>
                <Image src={ExcExp} fluid />
              </Col>
            </Row>
            <h3>
              <strong>Reflect:</strong>
              <i>
                {" "}
                Where and when do you experience exclusion? How would you solve
                this experience or why hasn’t this solution been implemented
                yet?
              </i>
            </h3>
          </Container>
        </div>
        <div className="Tan">
          <Container>
            <h2>Spectrum of Disability & Other Paradigms</h2>
            <Row>
              <Col sm={12} md={9}>
                <p>
                  <strong>
                    Paradigms of human identities exist on spectrums
                  </strong>
                  , including gender, race, disability, biological sex,
                  socioeconomic class, health.
                </p>
                <p>
                  Disability does not equate to a personal health condition but
                  rather{" "}
                  <strong>
                    a mismatched interaction between an individual and their
                    environment
                  </strong>{" "}
                  (Holmes). Disability through this model exists on a spectrum
                  between permanent, temporary, and situational (which differs
                  from disability identity and what it means to identify as
                  disabled).
                </p>
                <p>
                  Inclusive design relies on{" "}
                  <strong>spectrum-based thinking</strong> given that socialized
                  systems of oppression rely on strict categorized stereotypes
                  of human bodies, harming those who exist partially or
                  completely outside of them.
                </p>
              </Col>
              <Col>
                <Image src={SpecDis} fluid className="headerImg" />
              </Col>
            </Row>
            <Row>
              <Col
                sm={12}
                md={6}
                className="d-flex align-items-center justify-content-center"
              >
                <Image src={SpecDis1} fluid />
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <p>
                  <i>
                    <small>
                      Which examples show permanent, temporary, and situational
                      disabilities? Why are all the examples illustrated the
                      same even though each has a different experience and
                      disability?
                    </small>
                  </i>
                </p>
              </Col>
            </Row>

            <h3>
              <strong>Reflect:</strong>
              <i>
                {" "}
                How do your identities exist within a spectrum? How does this
                impact your experiences within systems of oppression?
              </i>
            </h3>
          </Container>
        </div>
        <div className="White">
          <Container>
            <h2>Intersectional Inclusive Design Practices</h2>
            <Row>
              <Col sm={12} md={9}>
                <p>
                  Inclusive design practices include participatory design
                  methods, where exclusion experts participate in the{" "}
                  <strong>entire</strong> design process.
                </p>
                <p>
                  In the field of inclusive design, individuals excluded as a
                  “From the 1830s onward, Black speakers and writers like
                  Frances E. W. Harper, Maria Stewart, and Sojourner Truth
                  explicitly linked oppressions based on race and gender,”
                  defining intersectionality as perspectives that integrate
                  gender and other interlocking systems of oppression (Kirk et
                  al.).
                </p>
                <p>
                  <strong>Inclusive design needs intersectionality. </strong>
                </p>
                <p>
                  Through practices such as participatory design, discussed
                  later on,{" "}
                  <strong>
                    For designs can perpetuate interlocking systems of
                    oppression and focusing on one will not rid the other. If
                    anything, <strong>designing for one</strong> population or
                    person impacted by multiple systems of oppression will{" "}
                    <strong>design for many</strong> like and unlike them.
                  </strong>
                </p>
              </Col>
              <Col>
                <Image src={IIDP} fluid />
              </Col>
            </Row>
            <h3>
              <strong>Reflect:</strong>
              <i>
                {" "}
                What identities of yours bring you closer to power and which
                bring you farther from it?
              </i>
            </h3>
          </Container>
        </div>
        <div className="Tan">
          <Container>
            <Row>
              <Col xs="12" md="2">
                <Image src={Foot} fluid />
              </Col>
              <Col>
                <div className="footer">
                  <h3>Further Reading</h3>
                  <p>
                    Allen, Paula Gunn. “The Root of Oppression Is Loss of
                    Memory.” Gendered Lives: Intersectional Perspectives, 7th
                    ed., Oxford University Press, 2020, pp. 21–21.
                  </p>
                  <p>
                    Holmes, Kat. Mismatch: How Inclusion Shapes Design. The MIT
                    Press, 2018.
                  </p>
                  <p>
                    Johnson, Allan G. “Patriarchy, the System: An It, Not a He,
                    a Them, or an Us.” Gendered Lives: Intersectional
                    Perspectives, 7th ed., Oxford University Press, 2020, pp.
                    62–70.
                  </p>
                  <p>
                    Kirk, Gywn. Okazawa-Rey, Margo. “Untangling the “F”-word.”
                    Gendered Lives: Intersectional Perspectives, 7th ed., Oxford
                    University Press, 2020, pp. 2–11.
                  </p>
                  <p>
                    Lorde, Audre. “Age, Race, Class and Sex: Women Redefining
                    Difference.” Sister Outsider Crossing Press, 1998.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </body>
    </div>
  );
}

export default App;
