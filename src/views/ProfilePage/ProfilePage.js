import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import bed1 from "assets/img/products/bedLinen/bedLinen1.jpg";
import bed2 from "assets/img/products/bedLinen/bedLinen2.jpg";
import bed3 from "assets/img/products/bedLinen/bedLinen3.jpg";
import bed4 from "assets/img/products/bedLinen/bedLinen4.jpg";
import bed5 from "assets/img/products/bedLinen/bedLinen5.jpg";
import work1 from "assets/img/products/curtain/curtain1.jpg";
import work2 from "assets/img/products/curtain/curtain2.jpg";
import work3 from "assets/img/products/curtain/curtain3.jpg";
import work4 from "assets/img/products/curtain/curtain4.jpg";
import work5 from "assets/img/products/curtain/curtain5.jpg";
import fabric1 from "assets/img/products/fabric/fabric1.jpg";
import fabric2 from "assets/img/products/fabric/fabric2.jpg";
import fabric3 from "assets/img/products/fabric/fabric3.jpg";
import fabric4 from "assets/img/products/fabric/fabric4.jpg";
import fabric5 from "assets/img/products/fabric/fabric5.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Amsons Textile Mills"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/productBg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                  <div className={classes.name}>
                    <h1 className={classes.title}>Our Products</h1>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Bed linen",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={bed5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={bed2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={bed3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={bed4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={bed5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={bed1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Curtain",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Fabric",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={fabric4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={fabric3}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={fabric2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={fabric2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={fabric1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={fabric5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
