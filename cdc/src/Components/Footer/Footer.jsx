import SimpleReactFooter from "simple-react-footer";
import "./Footer.css";

const Footer = () => {
  const description =
    "Career Development Centre at NIT Raipur is dedicated to empowering students and alumni to achieve their professional goals. The center provides comprehensive career services, including career counseling, resume building, mock interviews, job search strategies, and professional development workshops.";

  const title = (
    <span style={{fontWeight: "bold", fontSize: "1.5rem"}}>
      Career Development Centre (NITrr)
    </span>
  );

  const columns = [
    {
      title: (
        <span style={{fontWeight: "bold", fontSize: "1.2rem"}}>
          {" "}
          Contact Us{" "}
        </span>
      ),
      resources: [
        {
          name: "Phone:  +91-7712254200",
          link: "tel:+91-7712254200",
        },
        {
          name: "Email: cdc@nitrr.ac.in",
          link: "mailto:cdc@nitrr.ac.in",
        },
        {
          name: "Address: Career Development Centre, NIT Raipur, G.E. Road, Raipur (Chhattisgarh)-492010",
          link: "https://goo.gl/maps/XDoxBRbt8ttrhcwDA",
        },
      ],
    },
    {
      title: (
        <span style={{fontWeight: "bold", fontSize: "1.2rem"}}>
          Quick Links
        </span>
      ),
      resources: [
        {name: "E-CELL", link: "https://www.nitrr.ac.in/e-cell"},
        {name: "I-CELL", link: "https://www.nitrr.ac.in/i-cell"},
        {name: "TPO", link: "https://www.nitrr.ac.in/tpo"},
        {name: "NIT Raipur", link: "https://www.nitrr.ac.in/"},
      ],
    },
  ];

  return (
    <SimpleReactFooter
      description={description}
      title={title}
      columns={columns}
      backgroundColor='#f2f2f2'
      fontColor='#666'
      iconColor='#666'
      textColor='#666'
      contentAlign='left'
      className='footer'
      columnSize='3'
      copyright={
        <div>
          <span style={{fontWeight: "bold", marginRight: "5px"}}>
            © Career Development Centre (NITrr)
          </span>
          All rights reserved.
        </div>
      }
    />
  );
};

export default Footer;
