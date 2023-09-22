import { Box, Typography } from "@mui/material";
import NavBar from "../../Common/Header/NavBar";
import RelatedPosts from "./RelatedPosts";
import Footer from "../../Common/Footer/Footer";

export default function KnifeCare() {
  return (
    <div>
      <NavBar />
      <Box px={6} marginTop={"12%"}>
        <Typography
          fontWeight={"bold"}
          gutterBottom
          variant="h4"
          fontStyle={"Oswald"}
        >
          How to care for a Damascus steel knife
        </Typography>
        <Typography
          color={"#222224"}
          gutterBottom
          variant="body1"
          fontStyle={"Oswald"}
        >
          Damascus is well-known for its contrasting marble light and dark
          designs made of different metals with unique properties. It is
          important to take good care of it, to ensure you don’t lose its
          details to rust. Overall, one should ensure that the blade stays dry
          but also sealed with a lubricating wax or oil layer to lock out excess
          moisture.
        </Typography>
        <br />
        <Typography gutterBottom variant="body1" fontStyle={"Oswald"}>
          Here is how you can take care of your knife:
        </Typography>
        <br />
        <Typography
          fontWeight={"bold"}
          gutterBottom
          variant="h5"
          fontStyle={"Oswald"}
        >
          1. Be mindful of when and where you use your Damascus blade.
        </Typography>
        <Typography gutterBottom variant="body1" fontStyle={"Oswald"}>
          During manufacturing, the steel is chemically treated to reveal the
          unique patterns of the Damascus blades. This process involves both
          patterns welding and etching to bring out the details created during
          the welding process. This causes the different oxidation levels to
          show both dark (oxidized) and light/shiny patterns on the blade
          (resisting oxidation). Because of this, the blade is especially
          susceptible to damage when used on acidic foods (fruits, for example),
          wet/ humid environments.
        </Typography>
        <br />
        <Typography
          fontWeight={"bold"}
          gutterBottom
          variant="h5"
          fontStyle={"Oswald"}
        >
          2. Avoid abrasives, but keep your blade dry
        </Typography>
        <Typography gutterBottom variant="body1" fontStyle={"Oswald"}>
          Wash and dry your blade immediately after use (avoiding abrasives such
          as rough cloths, metal polishes, steel wool), taking care to not rub
          the blade roughly. Using an abrasive or metal cleaner may remove the
          etched oxidation that you want on a Damascus knife to show the
          pattern. Rather use softer materials such as a microfiber or a cotton
          cloth when drying to avoid wear on the blade.
        </Typography>
        <br />
        <Typography gutterBottom variant="body1" fontStyle={"Oswald"}>
          If the etching is significantly altered, we recommend sending your
          blade back to the maker for re-etching service.
        </Typography>
        <br />
        <Typography
          fontWeight={"bold"}
          gutterBottom
          variant="h5"
          fontStyle={"Oswald"}
        >
          3. Lubricate carbon steel Damascus blades.
        </Typography>
        <Typography gutterBottom variant="body1" fontStyle={"Oswald"}>
          After cleaning and drying your knife, lubricate it with a wax or oil
          to prevent moisture from affecting the blade.
        </Typography>
        <br />
        <Typography gutterBottom variant="body1" fontStyle={"Oswald"}>
          Most Damascus blades are made of high carbon steel, meaning they
          contain relatively low levels of chromium in the steel. Carbon steel
          (even Damascus carbon steel) can rust if not cared for properly.
        </Typography>
        <br />
        <Typography
          fontWeight={"bold"}
          gutterBottom
          variant="h5"
          fontStyle={"Oswald"}
        >
          4. Store it properly to keep it rust-free.
        </Typography>
        <Typography gutterBottom variant="body1" fontStyle={"Oswald"}>
          When you are not using your blade, make sure to keep it in a dry
          environment such as a box or padded zipper case, to protect it against
          humidity or temperature changes.
        </Typography>
        <br />
        <Typography gutterBottom variant="body1" fontStyle={"Oswald"}>
          Taking care of your Damascus blade will truly make your piece last the
          test of time. If your blade handle is made of a synthetic material,
          you won’t have to worry about humidity, just make sure the moisture
          doesn’t affect the blade. We suggest having a small cleaning kit in
          your storage item to make it easy, effortless and part of your
          routine! This doesn’t have to be anything fancy, the basics will do
          the trick!
        </Typography>
        
      </Box><br/>
      <Box px={6}>
        <Typography fontWeight={"bold"}
          gutterBottom
          variant="h5"
          fontStyle={"Oswald"}>Related Posts</Typography><br/>
        <RelatedPosts/>
      </Box><br/>
      <Footer/>
    </div>
  );
}
